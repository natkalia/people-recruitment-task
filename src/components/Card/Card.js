import React from 'react';
import styles from './Card.module.scss';
import Button from '../Button/Button';
import SubCard from '../SubCard/SubCardContainer';
import shortid from 'shortid';
import VerticalDivider from '../VerticalDivider/VerticalDivider';
import PropTypes from 'prop-types';

class Card extends React.Component {

  static propTypes = {
    category: PropTypes.string,
    content: PropTypes.string,
    addSubCard: PropTypes.func,
    removeCard: PropTypes.func,
    id: PropTypes.string,
  }

  handleAddSubCard = addSubCard => {
    const content = prompt('Please enter new item from this category e.g. White', 'White');
    if (content == null || content === '') {
      return;
    } else {
      addSubCard(content);
    }
  }

  handleDeleteCard = (removeCard, id) => {
    removeCard(id);
  }

  render() {
    const {category, content, addSubCard, removeCard, id} = this.props;
    const complicatedCategory = 'Ethnicity';
    return (
      <div className={styles.component}>
        <div className={styles.componentInner}>

          {/* render simple Card if category not Ethnicity
          render Card with Subcards if category Ethnicity  */}
          {category !== complicatedCategory ? 
            (
              <div className={styles.simple}>
                <span className={styles.text}>{category} {content}</span>
                <Button variant='minus' category={category} handleDeleteCard={() => this.handleDeleteCard(removeCard, id)}/>
              </div>
            ) : 
            (
              <div className={styles.ethnicity}>
                <SubCard key={shortid.generate()} item={category} handleDeleteCard={() => this.handleDeleteCard(removeCard, id)}/> 
                {content.map(item => 
                  (
                    <div key={shortid.generate()} className={styles.content}>
                      <VerticalDivider/>
                      <SubCard key={shortid.generate()} item={item} category={complicatedCategory}/>
                    </div>
                  )) 
                }
                <div className={styles.buttonWrapper}>
                  <Button variant='plus' category={category} handleAddSubCard={() => this.handleAddSubCard(addSubCard)}/>
                </div>
              </div>
            )
          } 

        </div>
      </div>
    );
  }
}

export default Card;
