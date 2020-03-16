import React from 'react';
import styles from './App.module.scss';
import PropTypes from 'prop-types';
import PageTitle from '../PageTitle/PageTitle';
import Button from '../Button/Button';
import Card from '../Card/CardContainer';
import shortid from 'shortid';

class App extends React.Component {

  static propTypes = {
    titles: PropTypes.array,
    cards: PropTypes.array,
    addCard: PropTypes.func,
  }
  
  handleAddCard = (addCard) => {
    const newCategory = prompt('Please enter new category e.g. Nationality', 'Nationality');
    const newContent = prompt('Please enter your content for chosen category e.g. German', 'German');    
    if (!(newContent == null || newContent === '') || (newCategory == null || newCategory === '')) {
      addCard(newContent, newCategory);
    }
  }

  render() {
    const {
      addCard, 
      titles, 
      cards,
    } = this.props;
    /* in fact hardcoded solution to get titles[0] as we have only one page title now */
    const title = titles[0].content;
    /* hardcoded solution to get complicated category as we have only one now */
    const complicatedCategory = 'Ethnicity';
    return (
      <div className={styles.component}>
        <PageTitle title={title}/>
        <div className={styles.cardsWrapper}>
          {cards.map(card =>
            <div key={shortid.generate()}>
              <Card 
                key={card.id} 
                cardId={card.id}
                content={card.content} 
                category={card.category}
                complicatedCategory={complicatedCategory}
              />
            </div>)}
        </div>
        <div className={styles.buttonWrapper}>
          <Button 
            variant='bigplus' 
            handleAddCard={()=> this.handleAddCard(addCard)}
          />
        </div>
      </div>
    );
  }
}

export default App;
