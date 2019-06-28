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
} from '../actions/actionTypes';


export function smurfsReducer(sliceOfState = [], action) {
  switch (action.type) {
    case GET_SMURF_SUCCESS:
      return action.payload;
    case ADD_SMURF_SUCCESS:
      return action.payload;
    case DELETE_SMURF_SUCCESS:
      return action.payload;
    default:
      return sliceOfState;
  }
};

export function errorMessageReducer(sliceOfState = '', action) {
  switch (action.type) {
    case GET_SMURF_FAILURE:
      return action.payload;
    case GET_SMURF_SUCCESS:
      return sliceOfState = '';

    case ADD_SMURF_FAILURE:
      return action.payload;
    case ADD_SMURF_SUCCESS:
      return sliceOfState = '';

    case DELETE_SMURF_FAILURE:
      return action.payload;
    case DELETE_SMURF_SUCCESS:
      return sliceOfState = '';

    default:
      return sliceOfState;
  }
}

