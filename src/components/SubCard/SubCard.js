import React from 'react';
import styles from './SubCard.module.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

class SubCard extends React.Component {

  static propTypes = {
    subCardContent: PropTypes.string,
    category: PropTypes.string,
    complicatedCategory: PropTypes.string,
    removeSubCard: PropTypes.func,
    removeCard: PropTypes.func,
    handleDeleteCard: PropTypes.func,
  }

  handleDeleteSubCard = (removeSubCard, subCardContent) => {
    removeSubCard(subCardContent);
  }

  render() {
    const {
      subCardContent, 
      category, 
      complicatedCategory,
      removeSubCard, 
      removeCard, 
      handleDeleteCard, 
    } = this.props;
    return (
      <>
        {subCardContent !== complicatedCategory ? 
          (
            <div className={styles.items}>
              <span className={styles.text}>{subCardContent}</span>
              <Button 
                variant='minus' 
                category={category}
                complicatedCategory={complicatedCategory}
                handleDeleteSubCard={() => this.handleDeleteSubCard(removeSubCard, subCardContent)}
              />
            </div>
          ) : (
            <div className={styles.complicated}>
              <span className={styles.text}>{subCardContent}</span>
              <Button 
                variant='minus' 
                category={category} 
                complicatedCategory={complicatedCategory}
                handleDeleteCard={() => handleDeleteCard(removeCard)}
              />
            </div>
          )}
      </>
    );
  }
}

export default SubCard;
