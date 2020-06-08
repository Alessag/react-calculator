import React, { Component } from 'react';
import '../styles/styles.css';
import Screen from './Screen';
import Keypad from './Keypad';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equation: 'Hola',
      result: 0,
    };
  }

  render() {
    const { equation, result } = this.state;
    return (
      <div className='calculator'>
        <Screen equation={equation} result={result} />
        <Keypad />
      </div>
    );
  }
}

export default Calculator;
