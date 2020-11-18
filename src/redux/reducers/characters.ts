import {ReturnAllCharacters, ReturnCharacterAction, ReturnSearchedCharacters, ReturnFailure, LoadingRequest } from '../actions/characters';

export interface Character extends Location {
  id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: {
      name: string,
      url: string,
    },
    location: {
      name: string,
      url: string,
    },
    image: string,
    episode: string[],
    url: string,
    created: string,
}

interface Location {
  name: string,
  url: string,
}


interface CharacterState {
  character : Character;
  allCharacters : Character[];
}

const initialState : CharacterState = {
  character : {
    id: 0,
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
    origin: {
      name: '',
      url: '',
    },
    location: {
      name: '',
      url: '',
    },
    image: '',
    episode: [],
    url: '',
    created: '',
  },
  allCharacters: [],
};

// export const selectCharacter = (rootState : RootState, rootState )

const characterReducer = (state : CharacterState = initialState, action : ReturnAllCharacters | ReturnCharacterAction | ReturnSearchedCharacters | ReturnFailure | LoadingRequest) => {

  if (action.type === 'GET_SINGLE_CHAR') {

    return {
      ...state,
      character : action.payload
    }
  }

  if (action.type === 'GET_ALL_CHARS') {

    return {
      ...state,
      allCharacters : action.payload.filter(() => {
        return true;
      }),
    };
  }

  if (action.type === 'SEARCH_NAME') {
    return {
      ...state,
      allCharacters: action.payload.filter(() => {
        return true;
      }),
    };
  }

  return state;
};

export default characterReducer;
