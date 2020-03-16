import React from 'react';
import styles from './PageTitle.module.scss';
import PropTypes from 'prop-types';

const PageTitle = ({title}) => {
  return (
    <div className={styles.component}>
      {title}
    </div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;