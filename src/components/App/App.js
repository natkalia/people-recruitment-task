import React from 'react';
import styles from './App.module.scss';
import PropTypes from 'prop-types';
import PageTitle from '../PageTitle/PageTitle';
import Button from '../Button/Button';
import Card from '../Card/CardContainer';
import VerticalDivider from '../VerticalDivider/VerticalDivider';

class App extends React.Component {

  static propTypes = {
    titles: PropTypes.array,
    cards: PropTypes.array,
    addCard: PropTypes.func,
  }
  
  handleAddCard = (addCard) => {
    const newCategory = prompt('Please enter new category e.g. Nationality', 'Nationality');
    const newItem = prompt('Please enter your text for chosen category e.g. German', 'German');    
    if (!(newItem == null || newItem === '') || (newCategory == null || newCategory === '')) {
      addCard(newItem, newCategory);
    }
  }

  render() {
    const {addCard, titles, cards} = this.props;
    /* in fact hardcoded solution to get titles[0] as we have only one page title now */
    const title = titles[0].content;
    return (
      <div className={styles.component}>
        <PageTitle title={title}/>
        <div className={styles.content}>
          <VerticalDivider/>
          <div>
            {cards.map(card =>
              <Card 
                key={card.id} 
                id={card.id}
                content={card.content} 
                category={card.category}
              />)}
          </div>
        </div>
        <div className={styles.buttonWrapper}>
          <Button variant='bigplus' handleAddCard={()=> this.handleAddCard(addCard)} />
        </div>
      </div>
    );
  }
}

export default App;
