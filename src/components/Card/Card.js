import React from 'react';
import styles from './Card.module.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';

class Card extends React.Component {

  static propTypes = {
    cards: PropTypes.array,
  }

  render() {
    return (
      <div className={styles.component}>
        card
        <Button variant="minus"/>
      </div>
      
    );
  }
}

export default Card;
