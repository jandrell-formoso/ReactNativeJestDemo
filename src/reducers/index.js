// store
import { combineReducers } from 'redux';

// middlewares
import { thunkMiddleware } from 'redux-thunk';

// import all reducers
import { repoReducer } from './repoReducer';

// combine all reducers

export default combineReducers({
  repoReducer
});
