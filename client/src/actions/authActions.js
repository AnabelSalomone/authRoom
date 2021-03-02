import { ACCESS_OK, ACCESS_FAIL } from "./types";
import axios from 'axios'

export const checkAuth = (token) => (dispatch, getState) => {

  const config = {
    "token": token
  }
  
  axios
    .post("/api/auth", config)
    .then((res) =>
      dispatch({
        type: ACCESS_OK,
      })
    )
    .catch((err) => {
      dispatch({
        type: ACCESS_FAIL,
      });
    });
};
