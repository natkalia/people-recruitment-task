import { combineReducers, createStore } from 'redux';
import initialStoreData from '../data/dataStore';
import cardsReducer from './cardsRedux';
import titlesReducer from './titlesRedux';

// define initial state and initial data
const initialState = {
  cards: initialStoreData.cards,
  titles: initialStoreData.titles,
};

// define reducers (imported)
const reducers = { 
  cards: cardsReducer,
  titles: titlesReducer,
};

// create store
const store = createStore (
  // merge all reducers
  combineReducers(reducers),
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
  
export default store;