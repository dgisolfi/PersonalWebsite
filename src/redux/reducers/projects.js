import * as ActionTypes from '../constants';

export const defaultState = {
  isFetchingProjects: false,
  projects: undefined,
  error: null,
}    

export const projectReducer = (state = defaultState, action) => {
   switch (action.type) {
        case ActionTypes.GET_PROJECTS_REQUEST:
            return {
                ...state,
                isFetchingProjects: true,
            }

        case ActionTypes.GET_PROJECTS_SUCCESS:
            return {
                ...state,
                isFetchingProjects: false,
                projects: [...action.payload]
            }
        
        case ActionTypes.GET_PROJECTS_FAILURE:
            return {
              ...state,
              isFetchingProjects: false,
              error: action.payload.error || 'Could not get Projects',
            }
    
        default:
            return state;
    }
}