import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {createPost} from '../actions'

class PostNew extends Component{

  renderField(field){ // field contains some event handlers that we need to include in jsx
    //{...field.input} is like doing onChange= field.onchange onFocus= field.onFocus, etc it adds all the props using spread function
    const {error, touched} = field.meta
    const className =`form-group ${touched && error ? 'has-danger': null}`
    return(
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : null}
        </div>
      </div>
    );
  }

  onSubmit(values){

    this.props.createPost(values, ()=> {
        this.props.history.push('/')   // because postsNew.js is in <Route as a component we can use this props
    });
  }

    render(){
      const { handleSubmit} = this.props;
      // this.renderTitleFIeld does not includes parenthesis because we are not calling it, Field is calling it itself
      return(
        <form onSubmit={ handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="Post content"
            name="content"
            component={this.renderField}
          />
          <button type ="submit" className ="btn btn-primary">Submit </button>
          <Link to="/" className='btn btn-danger'>Cancel</Link>
        </form>
      );
    }


}

const validate = (values) =>{ // validate will be called during the forms lifecycle at some point
                              // values is an object that contains all the values that the user has entered in the form
                              // values -> {title:'sdad', categories:'casdas', content:'sdasd'}
      const errors = {};

      if(!values.title){
        errors.title = "Enter a title!"
      }
      if(!values.categories){
        errors.categories = "Enter a category!"
      }
      if(!values.content){
        errors.content = "Enter content!"
      }

      //validate inputs from ;values
      // if errors is empty, the form us fine to submit
      return errors;

}

export default reduxForm({
  validate,
  form:'PostsNewForm'
}) (
connect(null,{createPost}) (PostNew)
);
