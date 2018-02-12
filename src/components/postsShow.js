import React, {Component} from 'react'
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions';
import {Link} from 'react-router-dom'


class PostShow extends Component{

    componentWillMount(){
      const {id} = this.props.match.params; // this comes from react router
      this.props.fetchPost(id);
    }

    onDeleteClick(){
      const {id} = this.props.match.params;
      this.props.deletePost(id, ()=> {
        this.props.history.push('/')
      })
    }

    render(){

  const {post} = this.props;
  if(!post){
    return <div>Loading... </div>
  }

      return(
        <div>
          <Link to ="/"> Back to index</Link>
          <button className=" btn btn-danger pull-xs-right"
                  onClick={this.onDeleteClick.bind(this)}  >Delete Post</button>
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

export default connect(mapStateToProps, {fetchPost, deletePost}) (PostShow);
