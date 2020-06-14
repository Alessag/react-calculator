import React, { Component } from 'react';
import '../styles/styles.css';
import PropType from 'prop-types';
import { create, all } from 'mathjs';
import Screen from './Screen';
import Keypad from './Keypad';

const operatorList = [
  {
    operator: '=',
    nameOperator: 'equals',
  },
  {
    operator: '+',
    nameOperator: 'add',
  },
  {
    operator: '-',
    nameOperator: 'subtract',
  },
  {
    operator: '*',
    nameOperator: 'multiply',
  },
  {
    operator: '/',
    nameOperator: 'divide',
  },
  {
    operator: '.',
    nameOperator: 'decimal',
  },
  {
    operator: 'clear',
    nameOperator: 'clear',
  },
];

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      equation: '',
      result: 0,
    };

    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress = (event) => {
    const buttonPressed = operatorList.find(
      (key) => key.nameOperator === event.target.id
    );
    // console.log(event.target.id);
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
