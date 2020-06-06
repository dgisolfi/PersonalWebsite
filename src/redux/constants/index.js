/**
* @module src/redux/constants/index.js
* @fileoverview The main `Redux` action types module.
* @imports YARN:react
* @imports YARN:react-redux::{createStore}
* @exports {Object} New store object
*/

// API INVOCATION ACTION TYPE
// (Specifically used to trigger the API middleware action.)
export const API_MIDDLEWARE_INVOKE = 'API_MIDDLEWARE_INVOKE';

export const API_MIDDLEWARE_PAGE_ENDPOINT = 'pages';
export const API_MIDDLEWARE_GIT_ENDPOINT = 'git';

export const GET_HOME_PAGE_REQUEST = 'GET_HOME_PAGE_REQUEST';
export const GET_HOME_PAGE_SUCCESS = 'GET_HOME_PAGE_SUCCESS';
export const GET_HOME_PAGE_FAILURE = 'GET_HOME_PAGE_FAILURE';

export const GET_ABOUT_PAGE_REQUEST = 'GET_ABOUT_PAGE_REQUEST';
export const GET_ABOUT_PAGE_SUCCESS = 'GET_ABOUT_PAGE_SUCCESS';
export const GET_ABOUT_PAGE_FAILURE = 'GET_ABOUT_PAGE_FAILURE';

export const GET_PROJECTS_REQUEST = 'GET_PROJECTS_REQUEST';
export const GET_PROJECTS_SUCCESS = 'GET_PROJECTS_SUCCESS';
export const GET_PROJECTS_FAILURE = 'GET_PROJECTS_FAILURE';