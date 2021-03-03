import { toggleModal } from "../actions/authActions";
import { ACCESS_OK, ACCESS_FAIL, CHECK_AUTH, TOGGLE_MODAL } from "../actions/types";

const initialState = {
  isAuthorized: null,
  isLoading: false,
  toggleModal: false
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
        toggleModal: false
      };
    case ACCESS_FAIL:
      return {
        ...state,
        isAuthorized: false,
        isLoading: false,
        toggleModal: true
      };
    case TOGGLE_MODAL:
      return{
        ...state,
        toggleModal: !toggleModal
      }
    default:
      return state;
  }
}
