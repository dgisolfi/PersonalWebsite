/**
 * Middleware...
 * 
 */ 

import 'whatwg-fetch';
import * as ActionTypes from '../constants';

const DGISOLFI_API_URL = 'http://dgisolfi.xyz:9095/http://dgisolfi.xyz/api/';
const GITHUB_API_URL = 'https://api.github.com';
let SERVER_API_URL = DGISOLFI_API_URL;

const SERVER_API_PAGE_ACTIONS = 'pages';

const middleware = store => next => action => {

  // Determine if the API hook was passed in so we can trigger API processing.
  const apiInvocationHook = action[ActionTypes.API_MIDDLEWARE_INVOKE];

  if (typeof apiInvocationHook === 'undefined') {
    return next(action);
  }

  if (action.type) {
    delete action.type;
  }

  const { route, endpoint, method, content, types } = apiInvocationHook;
  const [ requestType, successType, failureType ] = types;

  let cleanedRoute = '';

  switch (route) {
    case ActionTypes.API_MIDDLEWARE_PAGE_ENDPOINT:
      cleanedRoute = SERVER_API_PAGE_ACTIONS;
      SERVER_API_URL = DGISOLFI_API_URL;
      break;
    case ActionTypes.API_MIDDLEWARE_GIT_ENDPOINT:
      SERVER_API_URL = GITHUB_API_URL;
      cleanedRoute = '';
      break;
    default:
      SERVER_API_URL = DGISOLFI_API_URL;
      cleanedRoute = SERVER_API_PAGE_ACTIONS;
  }

  const cleanedEndpoint = cleanedRoute + endpoint;

  // Remove proxy header information and forward action to next stage properly.
  const actionWith = (data) => {
    const finalAction = { ...action, ...data };
    delete finalAction[ActionTypes.API_MIDDLEWARE_INVOKE];
    return finalAction;
  };

  next({
    type: requestType,
  })


  fetch(`${SERVER_API_URL}${cleanedEndpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: content ? JSON.stringify(content) : undefined,
  })
    .then(async (serverResponse) => {
      const data = await serverResponse.json()

      if (!serverResponse.ok || data.error) {
        return next(actionWith({
          payload: data.error || { error: 'Server error occurred' },
          type: failureType,
        }));
      }

      return next(actionWith({
        payload: data,
        type: successType,
      }));
    })
    .catch(
      (err) => {
        
        console.log(err)
        return next(actionWith({
          payload: err.message || { error: 'Server error occurred' },
          type: failureType,
        }))
      }
    );
};


export default middleware;