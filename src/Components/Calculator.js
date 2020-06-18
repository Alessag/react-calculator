/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import '../styles/styles.css';
import PropType from 'prop-types';
// import { create, all } from 'mathjs';
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

const numberList = [
  {
    decimalForm: 0,
    decimalName: 'zero',
  },
  {
    decimalForm: 1,
    decimalName: 'one',
  },
  {
    decimalForm: 2,
    decimalName: 'two',
  },
  {
    decimalForm: 3,
    decimalName: 'three',
  },
  {
    decimalForm: 4,
    decimalName: 'four',
  },
  {
    decimalForm: 5,
    decimalName: 'five',
  },
  {
    decimalForm: 6,
    decimalName: 'six',
  },
  {
    decimalForm: 7,
    decimalName: 'seven',
  },
  {
    decimalForm: 8,
    decimalName: 'eight',
  },
  {
    decimalForm: 9,
    decimalName: 'nine',
  },
];

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      result: [0],
      waitingOperator: true,
    };

    this.handleNumberClick = this.handleNumberClick.bind(this);
    this.handleOperatorClick = this.handleOperatorClick.bind(this);
  }

  handleNumberClick = (event) => {
    const { history, result } = this.state;
    const { id } = event.target;

    const numberObject = numberList.find((key) => key.decimalName === id);

    if (result[0] === 0 && result[1] !== '.') {
      if (id === 'zero') {
        return this.setState({
          history: [...history],
          result: [numberObject.decimalForm],
          waitingOperator: true,
        });
      }
      return this.setState({
        history: [...history],
        result: [numberObject.decimalForm],
        waitingOperator: true,
      });
    }
    return this.setState({
      history: [...history],
      result: [...result, numberObject.decimalForm],
      waitingOperator: true,
    });
  };

  handleOperatorClick = (event) => {
    const { id } = event.target;
    const { history, result, waitingOperator } = this.state;
    const operatorObject = operatorList.find(
      (key) => key.nameOperator === event.target.id
    );

    switch (id) {
      case 'clear':
        return this.setState({
          history: [],
          result: [0],
          waitingOperator: true,
        });

      case 'equals': {
        const finalCal = [...history, ...result];
        // eslint-disable-next-line no-eval
        const finalResult = eval(finalCal.join(''));
        return this.setState({
          history: [],
          result: [finalResult],
          waitingOperator: true,
        });
      }

      case 'decimal': {
        if (!result.includes('.')) {
          return this.setState({
            history: [...history],
            result: [...result, operatorObject.operator],
            waitingOperator: true,
          });
        }
        break;
      }

      default:
        if (waitingOperator) {
          return this.setState({
            history: [...history, result.join(''), operatorObject.operator],
            result: [0],
            waitingOperator: false,
          });
        }
        return this.setState({
          history: history.map((val, index) => {
            if (index < history.length - 1) {
              return val;
            }
            return operatorObject.operator;
          }),
          result: [...result, operatorObject.operator],
          waitingOperator: false,
        });
    }
    return 'hola';
  };

  render() {
    const { history, result } = this.state;
    return (
      <div className='calculator'>
        <Screen history={history} result={result} />
        <Keypad
          handleOperatorClick={this.handleOperatorClick}
          handleNumberClick={this.handleNumberClick}
        />
      </div>
    );
  }
}

Calculator.propType = {
  waitingOperator: PropType.bool.isRequired,
  result: PropType.node.isRequired,
  history: PropType.node.isRequired,
};

export default Calculator;
