import React from 'react';
import styles from './App.module.scss';
import PropTypes from 'prop-types';
import PageTitle from '../PageTitle/PageTitle';
import Button from '../Button/Button';

const App = ({titles}) => {

  {/* in fact hardcoded solution to get titles[0] as we have only one page title now */}
  const title = titles[0].content;

  return (
    <div className={styles.component}>

      <PageTitle title={title}/>

      <div>
        <Button/>
      </div>

    </div>
  );
};

App.propTypes = {
  titles: PropTypes.array,   
};

export default App;