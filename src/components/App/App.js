import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import PropTypes from 'prop-types';

const App = ({titles}) => {
  return (
    <div>
      {/* hardcoded solution to get titles[0] as we have only one page title now */}
      <PageTitle title={titles[0].content}/>
    </div>
  );
};

App.propTypes = {
  titles: PropTypes.array,   
};

export default App;