import React, { Component } from 'react';
import '../styles/styles.css';
import PropType from 'prop-types';
import Screen from './Screen';
import Keypad from './Keypad';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equation: '',
      result: 10,
    };
  }

  onButtonPress = (event) => {
    const buttonPressed = event.target.innerHTML;
    let { equation } = this.state;
    // console.log(equation);

    if (buttonPressed === 'C') {
      return this.clear();
    }

    if (
      (buttonPressed >= '0' && buttonPressed <= '9') ||
      buttonPressed === '.'
    ) {
      equation += buttonPressed;
      this.setState({ equation });
    }
    return equation;
  };

  clear() {
    this.setState({
      equation: ' ',
      result: 0,
    });
  }

  render() {
    const { equation, result } = this.state;
    return (
      <div className='calculator'>
        <Screen equation={equation} result={result} />
        <Keypad onButtonPress={this.onButtonPress} />
      </div>
    );
  }
}

Calculator.propType = {
  equation: PropType.string.isRequired,
  result: PropType.number.isRequired,
};

export default Calculator;
