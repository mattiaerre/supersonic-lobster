import React, { PropTypes } from 'react';

const Counter = (props) => { // eslint-disable-line arrow-body-style
  return (
    <div className="Counter">{props.value}</div>
  );
};

Counter.propTypes = {
  value: PropTypes.number.isRequired
};

export default Counter;
