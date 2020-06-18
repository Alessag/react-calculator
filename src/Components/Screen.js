import React from 'react';
import PropTypes from 'prop-types';
import OperationScreen from './OperationScreen';
import ResultScreen from './ResultScreen';
import '../styles/styles.css';

function Screen(props) {
  const { history, result } = props;
  return (
    <div className='screen'>
      <OperationScreen>{history}</OperationScreen>
      <ResultScreen>{result}</ResultScreen>
    </div>
  );
}

Screen.propTypes = {
  history: PropTypes.node.isRequired,
  result: PropTypes.node.isRequired,
};

export default Screen;
