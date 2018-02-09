import React, {Component} from 'react'
import {connect} from 'react-redux';
import {fetchPost} from '../actions';


class PostShow extends Component{

    componentWillMount(){
      const {id} = this.props.match.params; // this comes from react router
      this.props.fetchPost(id);
    }

    render(){
      const{post}= this.props || '';
      return(
        <div>
          <h3>{post.title}</h3>

        </div>
      );
    }

}

const mapStateToProps = ({posts}, ownProps) => {
 //ownProps === this.props

  return{ post: posts[ownProps.match.params.id]};   // we only receive the post that we want, instead of the list of posts


}

export default connect(mapStateToProps, {fetchPost}) (PostShow);
