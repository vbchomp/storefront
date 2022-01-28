// step 4: create store
import { createStore, combineReducers } from "redux";

import { composeWithDevTools } from "@redux-devtools/extension";

import storeReducer from './storeReducer.js';

let reducers = combineReducers({ store: storeReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();