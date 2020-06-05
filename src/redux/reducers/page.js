import * as ActionTypes from '../constants';

export const defaultState = {
  isFetchingHomePage: false,
  isFetchingAboutPage: false,
  home: undefined,
  about: undefined,
  error: null,
}    

export const pageReducer = (state = defaultState, action) => {
   switch (action.type) {
        case ActionTypes.GET_HOME_PAGE_REQUEST:
            return {
                ...state,
                isFetchingHomePage: true,
            }

        case ActionTypes.GET_HOME_PAGE_SUCCESS:
            return {
                ...state,
                isFetchingHomePage: false,
                home: [...action.payload][0]
            }
        
        case ActionTypes.GET_HOME_PAGE_FAILURE:
            return {
              ...state,
              isFetchingHomePage: false,
              error: action.payload.error || 'Could not get home page',
            }
        case ActionTypes.GET_ABOUT_PAGE_REQUEST:
            return {
                ...state,
                isFetchingAboutPage: true,
            }

        case ActionTypes.GET_ABOUT_PAGE_SUCCESS:
            return {
                ...state,
                isFetchingAboutPage: false,
                about: [...action.payload][0]
            }
        
        case ActionTypes.GET_ABOUT_PAGE_FAILURE:
            return {
                ...state,
                isFetchingAboutPage: false,
                error: action.payload.error || 'Could not get about page',
            }
    
        default:
            return state;
    }
}