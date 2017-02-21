import React, { PropTypes } from 'react';

const Background = (props) => { // eslint-disable-line
  const { apod } = props;
  return (
    <div data-media-type={apod.media_type} />
  );
};

Background.propTypes = {
  apod: PropTypes.shape.isRequired
};

export default Background;
