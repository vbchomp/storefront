// step 4: create store
import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from '@redux-devtools/extension';

// import storeReducer from './storeReducer.js';
import itemsReducer from './itemsReducer.js';

let reducers = combineReducers({ itemsReducer });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};


// pass reducers into createStore
export default store(reducers, composeWithDevTools());