import React from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

class Button extends React.Component {

  static propTypes = {
    variant: PropTypes.string,    
  };

  modifyContent = () => {
    console.log('from modifyContent');
  }

  render() {

    /* decide which button variant classname will be used based on variant name from props */
    const { variant } = this.props;
    const variantClassName = 
      styles.component + 
      variant.split(' ').map(name => ' ' + (styles[name] || name)).join('');

    return (
      <div 
        className= { variantClassName }
        onClick={() => this.modifyContent()}
      >
      </div>
    );
  }
}

export default Button;