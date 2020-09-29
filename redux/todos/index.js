import eFetch from '../../utils/EFetch';
import { message } from 'antd';

export function receiveLogout() {
  return {
    type: 'login_success',
    isFetching: false,
    isAuthenticated: false
  };
}

export function loginUser(creds, cbk) {
  return dispatch => {
    dispatch(receiveLogout(creds));
    let url="/login";
    eFetch(url, {method: "GET", params: creds})
    .then((response) => {
      dispatch(receiveLogout(response.jsonResult));
    });
  };
}