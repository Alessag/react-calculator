import React, { Component } from 'react';
import '../styles/styles.css';
import PropType from 'prop-types';
import { create, all } from 'mathjs';
import Screen from './Screen';
import Keypad from './Keypad';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equation: '',
      result: 0,
    };
  }

  onButtonPress = (event) => {
    const buttonPressed = event.target.innerHTML;
    let { equation } = this.state;
    const aritmethics = ['+', '-', '*', '/', '%'];
    const config = {};
    const math = create(all, config);

    if (buttonPressed === 'C') {
      return this.clear();
    }

    if ((buttonPressed >= 0 && buttonPressed <= 9) || buttonPressed === '.') {
      equation += buttonPressed;
    } else if (aritmethics.indexOf(buttonPressed) !== -1) {
      equation += buttonPressed;
    } else if (buttonPressed === '=') {
      try {
        const result = math.evaluate(equation);
        this.setState({ result });
      } catch (error) {
        alert('Invalid Mathematical Equation'); // eslint-disable-line no-alert
      }
    } else {
      equation = equation.trim();
      equation = equation.substr(0, equation.length - 1);
    }
    this.setState({ equation });

    return 'hola';
  };

  clear() {
    this.setState({
      equation: '',
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
