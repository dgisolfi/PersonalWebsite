import * as ActionTypes from '../constants';

export const fetchHomePage = () => ({
  type: ActionTypes.API_MIDDLEWARE_INVOKE,
    [ActionTypes.API_MIDDLEWARE_INVOKE]: {
      route: ActionTypes.API_MIDDLEWARE_PAGE_ENDPOINT,
      endpoint: `/home`,
      method: 'GET',
      types: [
        ActionTypes.GET_HOME_PAGE_REQUEST,
        ActionTypes.GET_HOME_PAGE_SUCCESS,
        ActionTypes.GET_HOME_PAGE_FAILURE,
      ],
    },
  }
);
  
export const fetchAboutPage = () => ({
  type: ActionTypes.API_MIDDLEWARE_INVOKE,
    [ActionTypes.API_MIDDLEWARE_INVOKE]: {
      route: ActionTypes.API_MIDDLEWARE_PAGE_ENDPOINT,
      endpoint: `/about`,
      method: 'GET',
      types: [
        ActionTypes.GET_ABOUT_PAGE_REQUEST,
        ActionTypes.GET_ABOUT_PAGE_SUCCESS,
        ActionTypes.GET_ABOUT_PAGE_FAILURE,
      ],
    },
  }
);