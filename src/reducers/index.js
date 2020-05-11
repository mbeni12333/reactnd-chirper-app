import {CombinedReducer} from 'redux';


import {users} from '../reducers/users';
import {tweets} from '../reducers/tweets';
import {authedUser} from '../reducers/authedUser';


export default CombinedReducer({
  authedUser,
  users,
  tweets
});
