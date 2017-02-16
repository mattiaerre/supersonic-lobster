import React, { PropTypes } from 'react';

const OC = props => (
  <div className="OC">
    <oc-component href={props.href} />
  </div>
);

OC.propTypes = {
  href: PropTypes.string.isRequired
};

export default OC;
