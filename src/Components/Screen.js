import React from 'react';
import PropTypes from 'prop-types';
import OperationScreen from './OperationScreen';
import ResultScreen from './ResultScreen';
import '../styles/styles.css';

function Screen(props) {
  const { equation } = props;
  return (
    <div className='screen'>
      <OperationScreen>{equation}</OperationScreen>
      <ResultScreen />
    </div>
  );
}

Screen.propTypes = {
  equation: PropTypes.number.isRequired,
};

export default Screen;
