import {
  legacy_createStore as createStore,
  applyMiddleware,
  //combineReducers,
  compose,
} from "redux";

//import genresReducer from "../Reducer/reducers_genres";
import rootReducerVideogames from "../Reducer/reducers_videogames";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = rootReducerVideogames;
const middleware = composeEnhancers(applyMiddleware(thunk));

export default createStore(rootReducer, middleware);

/* 

import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducer";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);




*/
