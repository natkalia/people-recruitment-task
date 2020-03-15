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

const filteredSubCards = (state, action) => {
  const filteredState = state.filter(card => {
    if (card.content.includes(action.payload)) {
      const index = card.content.indexOf(action.payload);
      return card.content.splice(index, 1);
    } else
      return card.content;
  });
  return filteredState;
};

const updatedSubCard = (state, action) => {
  const updatedState = state.filter(card => {
    if (card.category.includes('Ethnicity')) {
      return card.content.push(action.payload);
    } else
      return card.content;
  });
  return updatedState;
};

// reducer
export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...state, action.payload];
    case ADD_SUBCARD:
      return updatedSubCard(state, action);
    case REMOVE_CARD:
      return state.filter(card => card.id !== action.payload); 
    case REMOVE_SUBCARD:
      return filteredSubCards(state, action);
    default:
      return state;
  }
}