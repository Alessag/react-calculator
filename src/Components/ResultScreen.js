import React from 'react';
import PropType from 'prop-types';

const resultScreen = (prop) => {
  const { children } = prop;
  return (
    <div className='result-screen' id='display'>
      {children}
    </div>
  );
};

resultScreen.propType = {
  children: PropType.number.isRequired,
};

export default resultScreen;
