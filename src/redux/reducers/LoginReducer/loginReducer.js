import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from '../../actions/LoginActions/types';

export const initialState = {
  error: {},
  message: {},
  success: false,
  isLoading: false,
  isAuthenticated: false,
  isError: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START: {
      return {
        ...initialState,
        ...action.payload,
        isLoading: true,
        error: {},
        isAuthenticated: false,
        message: {},
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...initialState,
        ...action.payload,
        isLoading: false,
        error: {},
        success: true,
        isAuthenticated: true,
      };
    }
    case LOGIN_ERROR: {
      return {
        ...initialState,
        ...action.payload,
        isLoading: false,
        isAuthenticated: false,
        success: false,
        isError: true,
        message: {},
      };
    }
    default:
      return state;
  }
};

export default loginReducer;
