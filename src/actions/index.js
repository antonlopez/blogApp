import axios from 'axios';
export const FETCH_POSTS= "FETCH_POSTS";
export const CREATE_POST = "CREATE_POST";
export const FETCH_POST = "FETCH_POST";

const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY='?key=paperclip45345345'

export const fetchPosts = (chapterId) => {
  return (dispatch)=> {
    return axios
      .get(`${ROOT_URL}/posts${API_KEY}`)
      .then(response => {
          dispatch(fetchPostsSuccess(response.data));
      })
  };
};

export const fetchPostsSuccess = (request) => {
  return {
    type: FETCH_POSTS,
    request
  }
}


export const createPost = (values, callback)=> {
  return (dispatch)=> {
    return axios
      .post(`${ROOT_URL}/posts${API_KEY}`, values)
      .then(response => {
          dispatch(createPostsSuccess(response.data));
          callback();
      })
  };

}
export const createPostsSuccess = (request) => {
  return {
    type: CREATE_POST,
    request
  }
}

export const fetchPost = (id) => {

  return (dispatch)=> {
    return axios
      .get(`${ROOT_URL}/posts/${id}${API_KEY}`)
      .then(response => {
          dispatch(fetchPostSuccess(response.data));
      })
  };



}

export const fetchPostSuccess = (data)=> {
  debugger;
  return {
    type: FETCH_POST,
    data
  }

}