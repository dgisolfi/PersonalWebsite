import * as ActionTypes from '../constants';

export const fetchProjects = () => ({
  type: ActionTypes.API_MIDDLEWARE_INVOKE,
    [ActionTypes.API_MIDDLEWARE_INVOKE]: {
      route: ActionTypes.API_MIDDLEWARE_GIT_ENDPOINT,
      endpoint: `/users/dgisolfi/repos`,
      method: 'GET',
      types: [
        ActionTypes.GET_PROJECTS_REQUEST,
        ActionTypes.GET_PROJECTS_SUCCESS,
        ActionTypes.GET_PROJECTS_FAILURE,
      ],
    },
  }
);
