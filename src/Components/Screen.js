import React from 'react';
import PropTypes from 'prop-types';
import OperationScreen from './OperationScreen';
import ResultScreen from './ResultScreen';
import '../styles/styles.css';

function Screen(props) {
  const { equation, result } = props;
  return (
    <div className='screen'>
      <OperationScreen>{equation}</OperationScreen>
      <ResultScreen>{result}</ResultScreen>
    </div>
  );
}

Screen.propTypes = {
  equation: PropTypes.number.isRequired,
  result: PropTypes.number.isRequired,
};

export default Screen;
