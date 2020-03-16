import React from 'react';
import styles from './Card.module.scss';
import Button from '../Button/Button';
import SubCard from '../SubCard/SubCardContainer';
import shortid from 'shortid';
import PropTypes from 'prop-types';

class Card extends React.Component {

  static propTypes = {
    category: PropTypes.string,
    complicatedCategory: PropTypes.string,
    content: PropTypes.node,
    addSubCard: PropTypes.func,
    removeCard: PropTypes.func,
    cardId: PropTypes.string,
  }

  handleAddSubCard = addSubCard => {
    const content = prompt('Please enter new content from this category e.g. White', 'White');
    if (content == null || content === '') {
      return;
    } else {
      addSubCard(content);
    }
  }

  handleDeleteCard = (removeCard, cardId) => {
    removeCard(cardId);
  }

  render() {
    const {
      category, 
      content, 
      addSubCard, 
      removeCard, 
      cardId,
      complicatedCategory,
    } = this.props;
    return (
      <div className={styles.component}>
        <div className={styles.componentInner}>

          {/* render simple Card if category not complicatedCategory
          render Card with Subcards if category complicatedCategory */}
          {category !== complicatedCategory ? 
            (
              <div className={styles.simple}>
                <span className={styles.text}>{category} {content}</span>
                <Button 
                  variant='minus' 
                  category={category} 
                  complicatedCategory={complicatedCategory} 
                  handleDeleteCard={() => this.handleDeleteCard(removeCard, cardId)}
                />
              </div>
            ) : 
            (
              <div className={styles.complicated}>
                <SubCard key={shortid.generate()} 
                  subCardContent={category} 
                  complicatedCategory={complicatedCategory} 
                  handleDeleteCard={() => this.handleDeleteCard(removeCard, cardId)}
                /> 
                {content.map(subCardContent=> 
                  (
                    <div key={shortid.generate()} className={styles.subcardsWrapper}>
                      <SubCard 
                        key={shortid.generate()} 
                        subCardContent={subCardContent} 
                        complicatedCategory={complicatedCategory} 
                        category={complicatedCategory}/> 
                    </div>
                  )) 
                }
                <Button 
                  variant='plus' 
                  category={category}
                  complicatedCategory={complicatedCategory}  
                  handleAddSubCard={() => this.handleAddSubCard(addSubCard)}
                />
              </div>
            )
          } 

        </div>
      </div>
    );
  }
}

export default Card;
