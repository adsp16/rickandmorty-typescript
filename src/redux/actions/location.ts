import api from "../../api/rickandmorty.instance";
import { Location } from '../reducers/location';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../store/store';

export const GET_LOCATION = "GET_LOCATION";
export const REQUEST_FAILURE = "REQUEST_FAILURE";


export interface ReturnLocation extends Action<typeof GET_LOCATION> {
  payload : Location; 
}

interface ReturnFailure extends Action<typeof REQUEST_FAILURE> {
  error : string;
}

export const getLocation = (url : string) : ThunkAction<Promise<any>, RootState, undefined, ReturnLocation | ReturnFailure> => async (dispatch : ThunkDispatch<{}, {}, ReturnLocation | ReturnFailure >) => {
  return new Promise<void>( async (resolve, reject) => {
    try {
      const response = await api.get(`${url}`);
      const loc : Location = response.data; 
      
      console.log(response)
      dispatch({
        type : 'GET_LOCATION', 
        payload : loc
      })
      resolve()

    } catch(err) {

      dispatch({
        type: REQUEST_FAILURE, 
        error : 'Could Not Get Location'
      })
      reject();
    }
  })
   
}
