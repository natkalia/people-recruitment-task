import React from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = () => {
    
  return (
    <>
      <div className={styles.component + ' ' + styles.plus}>
      </div>
      <div className={styles.component + ' ' + styles.minus}>
      </div>
      <div className={styles.component + ' ' + styles.bigplus}> 
      </div>
    </>
  );

};

Button.propTypes = {
  variant: PropTypes.string,    
};

export default Button;