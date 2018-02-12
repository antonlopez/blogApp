import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { fetchPosts } from '../actions'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

class PostIndex extends Component{

    componentWillMount(){
      this.props.fetchPosts();

    }

    renderPosts(){
      return _.map(this.props.posts, post =>{
        return(

          <li className= "list-group-item" key = {post.id}>
            <Link to ={`posts/${post.id}`}>
            {post.title}
            </Link>
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
              <TransitionGroup {...transitionOptions}>
                {this.renderPosts()}
              </TransitionGroup>
          </ul>

        </div>
      );
    }
}

const transitionOptions = {
  transitionName: "fade",
  transitionEnterTimeout:500,
  transitionLeaveTimeout: 500

}

const mapStateToProps = state =>{
    const {posts} = state;
    return {posts};
  }

export default connect(mapStateToProps, {fetchPosts}) (PostIndex);
