import api from "../../api/rickandmorty.instance";
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {Action} from 'redux';
import {Character} from '../reducers/characters';
import {RootState} from '../store/store';


const GET_SINGLE_CHAR = "GET_SINGLE_CHAR";
const GET_ALL_CHARS = "GET_ALL_CHARS";
const SEARCH_NAME = "SEARCH_NAME";
const REQUEST_FAILURE = "REQUEST_FAILURE";


export interface ReturnCharacterAction extends Action<typeof GET_SINGLE_CHAR> {
  payload : Character;
}

export interface ReturnFailure extends Action<typeof REQUEST_FAILURE> {
  error : string;
}

export interface LoadingRequest extends Action {
  type : 'REQUEST_LOADING'
}

export interface ReturnAllCharacters {
  type : 'GET_ALL_CHARS';
  payload : Character[];
}

export interface ReturnSearchedCharacters {
  type : 'SEARCH_NAME';
  payload : Character[];
}



export const getSingleChar = (id : number) : ThunkAction<Promise<void>, RootState, undefined, ReturnCharacterAction | ReturnFailure> => {
  return (dispatch : ThunkDispatch<RootState, {}, ReturnCharacterAction | ReturnFailure>) : Promise<void> => {
    return new Promise<void>((resolve, reject) => {
  
         api.get(`/character/${id}`)
         .then(result => {
          const data : Character = result.data;
          dispatch({
            type : 'GET_SINGLE_CHAR',
            payload : data
          })
           resolve();
         })
         .catch((e) => {
          
          dispatch({
            type: REQUEST_FAILURE,
            error : 'Failed To Load' 
          })

           reject();

        })
      })
    }
  }


export const getAllChars = (page : number) : ThunkAction<Promise<any>, RootState, undefined, ReturnAllCharacters | ReturnFailure> => async (dispatch : ThunkDispatch<{}, {}, ReturnAllCharacters | ReturnFailure >) : Promise<any> => {

    return new Promise<any>(async (resolve, reject) => {
      try {
        const response = await api.get(`/character/?page=${page}`);
        const charArray : Character[] = response.data.results;
    
       dispatch({
         type : GET_ALL_CHARS,
         payload : charArray, 
       })
       resolve();
    
      } catch (err) {
        dispatch({
          type : REQUEST_FAILURE,
          error : 'Could not load charaters'
        })
         reject();
      }
    })
}

export const searchName = (name : string) : ThunkAction<Promise<any>, RootState, undefined, ReturnSearchedCharacters | ReturnFailure> => async (dispatch : ThunkDispatch<{}, {}, ReturnSearchedCharacters | ReturnFailure  >) => {

  return new Promise(async (resolve, reject) => {
    try {
      const response = await api.get(`/character/?name=${name}`);
        const charArray : Character[] = response.data.results;
        dispatch({
          type : SEARCH_NAME,
          payload : charArray,
        })
        resolve();
  
      }catch(err) {
        dispatch({
          type : REQUEST_FAILURE,
          error : 'Could not load charaters'
        })
        reject();
      }
  })
}
