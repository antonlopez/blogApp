import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { fetchPosts } from '../actions'

class PostIndex extends Component{

    componentWillMount(){
      this.props.fetchPosts();

    }

    renderPosts(){
      return _.map(this.props.posts, post =>{
        return(
          <li className= "list-group-item" key = {post.id}>
            {post.title}
          </li>
        )
      })
    }

    render(){
     const { posts } = this.props
     console.log(posts)
      return(
        <div>
          <div className= "text-xs-right">
            <Link className="btn btn-primary" to = "/posts/new">
              Add a Post
            </Link>
          </div>
          <h3> Posts </h3>
          <ul className="list-group">
            {this.renderPosts()}
          </ul>

        </div>
      );
    }
}

const mapStateToProps = state =>{
    const {posts} = state;
    return {posts};
  }

export default connect(mapStateToProps, {fetchPosts}) (PostIndex);
