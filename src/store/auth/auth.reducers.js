import * as AuthTypes from "./auth.types";
const INITIAL_STATE = {
  isAuthenticated: false,
  currentUser: {},
  newUser: {}, // for creating new user during signup
  error: null,
  loading: false,
};

const authReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case AuthTypes.SIGN_IN_START:
    case AuthTypes.SIGN_UP_START:
    case AuthTypes.LOAD_USER_START:
      return {
        ...state,
        loading: true,
      };
    case AuthTypes.SIGN_IN_SUCCESS:
    case AuthTypes.LOAD_USER_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        currentUser: payload,
        loading: false,
      };
    case AuthTypes.SIGN_UP_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        newUser: payload,
        loading: false,
      };
    case AuthTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        currentUser: {},
      };
    case AuthTypes.SIGN_IN_FAILURE:
    case AuthTypes.SIGN_UP_FAILURE:
    case AuthTypes.LOAD_USER_FAILURE:
    case AuthTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default authReducer;
