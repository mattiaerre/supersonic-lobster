import React, { PropTypes } from 'react';

const Message = ({ message, className }) => (<div className={`Message ${className}`}>{message}</div>);

Message.propTypes = {
  message: PropTypes.string.isRequired,
  className: PropTypes.string
};

Message.defaultProps = {
  className: ''
};

export default Message;
