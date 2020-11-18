import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import characterReducer from "../reducers/characters";
import locationReducer from "../reducers/location";
import { Middleware } from 'redux';
import thunk from "redux-thunk";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const rootReducer = combineReducers({
  character: characterReducer,
  location: locationReducer,
});

export type RootState = ReturnType<typeof rootReducer>

const logger : Middleware<{}, RootState> = (store) => {
  return (next) => {
    return (action: any) => {
      console.log("Middleware Dispatching", action);
      const result = next(action);
      console.log("Middleware next state", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);
