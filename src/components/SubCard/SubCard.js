import React from 'react';
import styles from './SubCard.module.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

class SubCard extends React.Component {

  static propTypes = {
    item: PropTypes.string,
    category: PropTypes.string,
    removeSubCard: PropTypes.func,
    removeCard: PropTypes.func,
    handleDeleteCard: PropTypes.func,
  }

  handleDeleteSubCard = (removeSubCard, item) => {
    removeSubCard(item);
  }

  render() {
    const {item, category, removeSubCard, removeCard, handleDeleteCard} = this.props;
    const complicatedCategory = 'Ethnicity';
    return (
      <>
        {item !== complicatedCategory ? 
          (
            <div className={styles.items}>
              <span className={styles.text}>{item}</span>
              <Button variant='minus' category={category} handleDeleteSubCard={() => this.handleDeleteSubCard(removeSubCard, item)}/>
            </div>
          ) : (
            <div className={styles.ethnicity}>
              <span className={styles.text}>{item}</span>
              <Button variant='minus' category={category} handleDeleteCard={() => handleDeleteCard(removeCard)}/>
            </div>
          )}
      </>
    );
  }
}

export default SubCard;
