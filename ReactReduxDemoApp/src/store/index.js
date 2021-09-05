import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, compose, applyMiddleware } from 'redux';
import productReducers from './product-reducers';
import reduxThunk  from 'redux-thunk';

const middleware = [reduxThunk];

const middlewareEnhancer = applyMiddleware(...middleware);
const composedEnhancers = compose(middlewareEnhancer)

var reducers = combineReducers({ productReducers, composedEnhancers});
const store = configureStore({  
  reducer: { reducers},        
});

export default store;