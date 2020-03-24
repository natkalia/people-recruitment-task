import shortid from 'shortid';

/* ACTIONS */

// action types

export const ADD_CARD = 'ADD_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const ADD_SUBCARD = 'ADD_SUBCARD';
export const REMOVE_SUBCARD = 'REMOVE_SUBCARD';

// action creators (arrow functions using payload as argument and returning)

export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });
export const createActionRemoveCard = payload => ({ type: REMOVE_CARD, payload });
export const createActionAddSubCard = payload => ({ type: ADD_SUBCARD, payload });
export const createActionRemoveSubCard = payload => ({ type: REMOVE_SUBCARD, payload });

// reducer helper functions

const removedCard = (state, payload) => {
  const newState = state.filter(card => card.id !== payload);
  return newState;
};

const addedSubCard = (state, payload) => {
  let newState = [...state];
  newState = newState.filter((element) => {
    if (typeof(element.content) !== 'string') {
      return element.content.push(payload);
    } else {
      return element.content;
    }
  });
  return newState;
};

const removedSubCard = (state, payload) => {
  let newState = [...state];
  newState = newState.filter((element) => {
    if (element.content.includes(payload)) {
      const indexSubcard = element.content.indexOf(payload);
      return element.content.splice(indexSubcard, 1);
    } else
      return element.content;
  });
  return newState;
};

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];
    case REMOVE_CARD:
      return removedCard(state, action.payload);
    case ADD_SUBCARD:
      return addedSubCard(state, action.payload);
    case REMOVE_SUBCARD:
      return removedSubCard(state, action.payload);
    default:
      return state;
  }
}