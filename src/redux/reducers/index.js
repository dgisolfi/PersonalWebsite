/**
 * @module src/components/redux/reducers.index.js
 * @fileoverview The main `Redux` reducer module.
 * @imports YARN:react
 * @imports YARN:react-redux::{createStore}
 * @exports {Object} New store object
 */

import { combineReducers } from 'redux';
import { pageReducer } from './page'
import { projectReducer } from './projects';

export default combineReducers({
  pageReducer,
  projectReducer
})