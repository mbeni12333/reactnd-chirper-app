import {RECEIVE_TWEETS} from '../actions/tweets';


export function tweets(state = {}, action){

  switch(action.type){
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...actions.tweets
      }

    default:
      return state;
  }
}
