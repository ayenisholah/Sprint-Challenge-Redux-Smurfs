import axios from 'axios';
import {
  GETTING_SMURFS,
  GET_SMURF_SUCCESS,
  GET_SMURF_FAILURE,
  ADDING_SMURF,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE,
  DELETING_SMURF,
  DELETE_SMURF_SUCCESS,
  DELETE_SMURF_FAILURE
} from './actionTypes';

export function getSmurfs() {
  return (dispatch) => {
    dispatch({ type: GETTING_SMURFS });

    axios.get('http://localhost:3333/smurfs')
      .then(res => {
        dispatch({ type: GET_SMURF_SUCCESS, payload: res.data })
      })
      .catch(err => {
        const error = err.response.data.message;
        dispatch({ type: GET_SMURF_FAILURE, payload: error });
        console.log(error);
      });
  }
};

