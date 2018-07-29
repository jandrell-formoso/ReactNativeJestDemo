// store
import { combineReducers } from 'redux';

// middlewares
import { thunkMiddleware } from 'redux-thunk';

// import all reducers
import { repoReducer } from './repoReducer';
import { searchReducer } from './searchReducer';

// combine all reducers

export default combineReducers({
  repoReducer,
  searchReducer,
});
