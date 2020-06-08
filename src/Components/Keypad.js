import React from 'react';

function Keypad() {
  return (
    <div id='buttons' className='container'>
      <div className='row'>
        <button type='button' className='btn' id='divide'>
          /
        </button>
        <button type='button' className='btn' id='clear'>
          C
        </button>
        <button type='button' className='btn' id='clear'>
          C
        </button>
        <button type='button' className='btn' id='clear'>
          C
        </button>
      </div>
      <div className='row'>
        <button type='button' className='btn' id='seven'>
          7
        </button>
        <button type='button' className='btn' id='eight'>
          8
        </button>
        <button type='button' className='btn' id='nine'>
          9
        </button>
        <button type='button' className='btn' id='multiply'>
          x
        </button>
      </div>
      <div className='row'>
        <button type='button' className='btn' id='four'>
          4
        </button>
        <button type='button' className='btn' id='five'>
          5
        </button>
        <button type='button' className='btn' id='six'>
          6
        </button>
        <button type='button' className='btn' id='subtract'>
          -
        </button>
      </div>
      <div className='row'>
        <button type='button' className='btn' id='one'>
          1
        </button>
        <button type='button' className='btn' id='two'>
          2
        </button>
        <button type='button' className='btn' id='three'>
          3
        </button>
        <button type='button' className='btn' id='add'>
          +
        </button>
      </div>
      <div className='row'>
        <button type='button' className='btn' id='zero'>
          0
        </button>
        <button type='button' className='btn' id='decimal'>
          .
        </button>
        <button type='button' className='btn' id='equals'>
          =
        </button>
        <button type='button' className='btn' id='clear'>
          C
        </button>
      </div>
    </div>
  );
}

export default Keypad;
