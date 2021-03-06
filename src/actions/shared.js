import {getInitialData} from '../utils/api.js';
import {receiveUsers} from '../actions/users';
import {receiveTweets} from '../actions/tweets';
import {setAuthedUser} from '../actions/authedUser';


const AUTHED_ID = 'tylermcginnis';


// action creator initial data
export function handleInitialData(){
  // use thunk pattern
  return (dispatch) => {
    return getInitialData()
          .then(({users, tweets}) => {
            dispatch(receiveUsers(users));
            dispatch(receiveTweets(tweets));
            dispatch(setAuthedUser(AUTHED_ID));
          });
  }
}
