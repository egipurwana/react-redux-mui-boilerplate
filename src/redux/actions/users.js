import axios from 'axios';
import {BASE_URL, BASE_VERSION} from "../config";

export const login = (payload) => {
  return (dispatch) => {
    return( axios.post(BASE_URL+BASE_VERSION+'login', {
        email: payload.email,
        password: payload.password
      })
      .then(function (response) {
        payload.data = response.data;
        if(response.data.status === 200){
          payload.data.collections = response.data.collections;
          payload.data.expired_collections = response.data.expired_collections;
          payload.data.supports = response.data.supports;
          dispatch({ type: 'SET_LOGIN', payload })
        }
        return payload;
      })
      .catch(function (error) {
        console.log(error);
        payload.error = error;
        payload.data = error.response;
        payload.data = {status:401};
        dispatch({ type: 'SET_LOGOUT', payload })
        return payload;
      })
    )
  }
}