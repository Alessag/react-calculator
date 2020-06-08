import React from 'react';
import OperationScreen from './OperationScreen';
import ResultScreen from './ResultScreen';
import '../styles/styles.css';

function Screen() {
  return (
    <div className='screen'>
      <OperationScreen />
      <ResultScreen />
    </div>
  );
}

export default Screen;
