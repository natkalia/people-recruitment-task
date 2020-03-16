import React from 'react';
import styles from './App.module.scss';
import PropTypes from 'prop-types';
import PageTitle from '../PageTitle/PageTitle';
import Button from '../Button/Button';
import Card from '../Card/CardContainer';

const App = ({titles, cards}) => {

  // in fact hardcoded solution to get titles[0] as we have only one page title now 
  const title = titles[0].content;

  return (
    <div className={styles.component}>
      <PageTitle title={title}/>
      <div className={styles.content}>
        {cards.map(card =>
          <Card 
            key={card.id} 
            id={card.id}
            content={card.content} 
            category={card.category}
          />)}
      </div>
      <div>
        <Button variant='bigplus'/>
      </div>
    </div>
  );
};

App.propTypes = {
  titles: PropTypes.array,
  cards: PropTypes.array,
};

export default App;