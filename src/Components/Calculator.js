import React from 'react';
import '../styles/styles.css';
import Screen from './Screen';
import Keypad from './Keypad';

function Calculator() {
  return (
    <div className='calculator'>
      <Screen />
      <Keypad />
    </div>
  );
}

export default Calculator;
