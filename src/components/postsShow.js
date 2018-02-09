import React, {Component} from 'react'
import {connect} from 'react-redux';
import {fetchPost} from '../actions';


class PostShow extends Component{

    componentWillMount(){
      const {id} = this.props.match.params; // this comes from react router
      this.props.fetchPost(id);
    }

    render(){

  const {post} = this.props;
  if(!post){
    return <div>Loading... </div>
  }

      return(
        <div>
          <h3>{post.title}</h3>
          <h6>Categories: {post.categories}</h6>
          <p>{post.content}</p>

        </div>
      );
    }

}

const mapStateToProps = ({posts}, ownProps) => {
 //ownProps === this.prop
  return{ post: posts[ownProps.match.params.id]};   // we only receive the post that we want, instead of the list of posts


}

export default connect(mapStateToProps, {fetchPost}) (PostShow);
