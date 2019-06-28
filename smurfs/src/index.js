import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import {
  smurfsReducer,
  errorMessageReducer
} from './reducers/reducers'

const combinedReducer = combineReducers({
  smurfs: smurfsReducer,
  errorMessage: errorMessageReducer

})



ReactDOM.render(
  <Provider >
    <App />
  </Provider>,
  document.getElementById('root')
);
