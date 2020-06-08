import React from 'react';
import PropType from 'prop-types';

const operationScren = (props) => {
  const { children } = props;
  return <div className='operation-screen'>{children}</div>;
};

operationScren.propTypes = {
  children: PropType.number.isRequired,
};
export default operationScren;
