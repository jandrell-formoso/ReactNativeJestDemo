import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './src/reducers';

export const initialState = {
  repoReducer: {}
};

export default (preloadedState) => {

  // define middlewares
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  return createStore(
    rootReducer,
    preloadedState,
    middlewareEnhancer
  );

};
