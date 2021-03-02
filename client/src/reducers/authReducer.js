import { ACCESS_OK, ACCESS_FAIL, CHECK_AUTH } from "../actions/types";

const initialState = {
  isAuthorized: null,
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case CHECK_AUTH:
      return {
        ...state,
        isLoading: true,
      };
    case ACCESS_OK:
      return {
        ...state,
        isAuthorized: true,
        isLoading: false,
      };
    case ACCESS_FAIL:
      return {
        ...state,
        isAuthorized: false,
        isLoading: false,
      };
    default:
      return state;
  }
}
