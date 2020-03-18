import shortid from 'shortid';

/* content for PageTitle */
export const titles = [
  {
    id: shortid.generate(), 
    content: 'People',
  },
];

/* initial content for cards and subcards */
export const cards = [
  {
    id: shortid.generate(),
    category: 'Age',
    content: '40+',
  },
  {
    id: shortid.generate(),
    category: 'Ethnicity',
    /* content for subcards */
    content: ['Black', 'Hispanic'],
  },
  {
    id: shortid.generate(),
    category: 'Income',
    content: 'yearly 45k USD+',
  },
];

export const initialStoreData = {
  cards: [...cards],
  titles: [...titles],
};

export default initialStoreData;
