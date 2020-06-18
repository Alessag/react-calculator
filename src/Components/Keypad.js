import React from 'react';
import PropTypes from 'prop-types';

function Keypad(props) {
  const { handleNumberClick, handleOperatorClick } = props;
  return (
    <div id='buttons' className='container'>
      <div className='row'>
        <button
          onClick={handleOperatorClick}
          type='button'
          className='btn'
          id='clear'
        >
          C
        </button>
        <button type='button' className='btn' id='arrow'>
          &larr;
        </button>
        <button
          onClick={handleOperatorClick}
          type='button'
          className='btn'
          id='porcent'
        >
          %
        </button>
        <button
          onClick={handleOperatorClick}
          type='button'
          className='btn'
          id='divide'
        >
          /
        </button>
      </div>
      <div className='row'>
        <button
          onClick={handleNumberClick}
          type='button'
          className='btn'
          id='seven'
        >
          7
        </button>
        <button
          onClick={handleNumberClick}
          type='button'
          className='btn'
          id='eight'
        >
          8
        </button>
        <button
          onClick={handleNumberClick}
          type='button'
          className='btn'
          id='nine'
        >
          9
        </button>
        <button
          onClick={handleOperatorClick}
          type='button'
          className='btn'
          id='multiply'
        >
          *
        </button>
      </div>
      <div className='row'>
        <button
          onClick={handleNumberClick}
          type='button'
          className='btn'
          id='four'
        >
          4
        </button>
        <button
          onClick={handleNumberClick}
          type='button'
          className='btn'
          id='five'
        >
          5
        </button>
        <button
          onClick={handleNumberClick}
          type='button'
          className='btn'
          id='six'
        >
          6
        </button>
        <button
          onClick={handleOperatorClick}
          type='button'
          className='btn'
          id='subtract'
        >
          -
        </button>
      </div>
      <div className='row'>
        <button
          onClick={handleNumberClick}
          type='button'
          className='btn'
          id='one'
        >
          1
        </button>
        <button
          onClick={handleNumberClick}
          type='button'
          className='btn'
          id='two'
        >
          2
        </button>
        <button
          onClick={handleNumberClick}
          type='button'
          className='btn'
          id='three'
        >
          3
        </button>
        <button
          onClick={handleOperatorClick}
          type='button'
          className='btn'
          id='add'
        >
          +
        </button>
      </div>
      <div className='row'>
        <button
          onClick={handleNumberClick}
          type='button'
          className='btn'
          id='zero'
        >
          0
        </button>
        <button
          onClick={handleOperatorClick}
          type='button'
          className='btn'
          id='decimal'
        >
          .
        </button>
        <button
          onClick={handleOperatorClick}
          type='button'
          className='btn large'
          id='equals'
        >
          =
        </button>
      </div>
    </div>
  );
}

Keypad.propTypes = {
  handleNumberClick: PropTypes.func.isRequired,
  handleOperatorClick: PropTypes.func.isRequired,
};

export default Keypad;
