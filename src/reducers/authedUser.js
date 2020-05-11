import {SET_AUTHED_USER} from '../actions/authedUser';



export function authedUser(state = null, action){

  switch(action.type){

    case SET_AUTHED_USER:
      return actions.authedId
      
    default:
      return state;
  }
}
