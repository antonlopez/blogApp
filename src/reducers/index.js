import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import postsReducer from './reducerPosts'

const rootReducer = combineReducers({
    posts: postsReducer,
    form: formReducer
});

export default rootReducer;
