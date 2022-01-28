import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./UserActionTypes";
import axios from 'axios'

export const FetchUsers = () => {
  return (dispatch) => {
    dispatch(FetchUsersRequest());
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // response.data is the users
        const users = response.data
        dispatch(FetchUsersSuccess(users))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(FetchUsersFailure(error.message))
      })
  };
};

export const FetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const FetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const FetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};
