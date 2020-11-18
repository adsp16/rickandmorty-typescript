import {ReturnLocation} from '../actions/location';
import {AnyAction} from 'redux';

export interface Location {
  created: string,
  dimension: string,
  id: number,
  name: string,
  residents: string[],
  type: string,
  url: string,
}

interface LocationState {
  location : Location;
}

const initialState : LocationState = {
  location : {
    created: "",
    dimension: "",
    id: 0,
    name: "",
    residents: [],
    type: "",
    url: "",
  }
};

const locationReducer = (state : LocationState = initialState, action : ReturnLocation | AnyAction) => {

  if (action.type === 'GET_LOCATION') {
    return {
      ...state,
      location: action.payload,
    };
  }
  return state;
};

export default locationReducer;
