import React from 'react';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

class Button extends React.Component {

  static propTypes = {
    variant: PropTypes.string,    
    category: PropTypes.string,
    complicatedCategory: PropTypes.string,
    handleDeleteCard: PropTypes.func,
    handleDeleteSubCard: PropTypes.func,
  };
  
  modifyContent = ({
    variant, 
    category, 
    complicatedCategory,
    handleDeleteCard, 
    handleDeleteSubCard, 
    handleAddCard, 
    handleAddSubCard}) => {

    console.log(category, complicatedCategory);

    /* decide which button variant actions will be used based on variant name from props */
    switch (variant) {
      case 'plus':
        return handleAddSubCard();
      case 'minus':
        return category !== complicatedCategory ? handleDeleteCard() : handleDeleteSubCard();
      case 'bigplus':
        return handleAddCard();
      default:
        console.log('Error: no variant found');
    }
  }

  render() {
    /* decide which button variant classname will be used based on variant name from props */
    const {variant} = this.props;
    const variantClassName = styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('');
    return (
      <div 
        className={variantClassName}
        onClick={() => this.modifyContent(this.props)}
      >
      </div>
    );
  }
}


export default Button;