import React, { PropTypes } from 'react';
import Message from '../../components/Message/Message';

const Layout = (props) => { // eslint-disable-line arrow-body-style
  const { model: { apod } } = props;
  return (
    <div className="Layout">
      <Message message={apod.title} />
      <Message message={apod.explanation} />
      <Message message={apod.date} />
    </div>
  );
};

Layout.propTypes = {
  model: PropTypes.shape.isRequired
};

export default Layout;
