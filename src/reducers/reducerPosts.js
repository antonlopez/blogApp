import _ from 'lodash'
import {FETCH_POSTS, FETCH_POST} from '../actions';

export default (state = {},action)=>{
  switch(action.type){

    case FETCH_POSTS:
      return _.mapKeys(action.request, 'id')

    case FETCH_POST:
      return {...state, [action.data.id]: action.data }

    default:
      return state
  }
}
