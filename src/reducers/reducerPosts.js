import _ from 'lodash'
import {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions';

export default (state = {},action)=>{
  switch(action.type){

    case FETCH_POSTS:
      return _.mapKeys(action.request, 'id')

    case DELETE_POST:
        return _.omit(state, action.id)       // for an object!! , look at the state object and if it has a key of action id just drop it, ommit it
                                              // return an object that does not contain that id anymore, returns a new state object with id not present anymore
                                              // for arrays use _.reject(state, post => post.id === action.id )

    case FETCH_POST:
      return {...state, [action.post.id]: action.post }

    default:
      return state
  }
}
