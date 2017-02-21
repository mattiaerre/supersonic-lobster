import React, { PropTypes } from 'react';
import Background from '../../components/Background/Background';
import Message from '../../components/Message/Message';
import OC from '../../components/OC/OC';
import Counter from '../../components/Counter/Counter';

const Layout = (props) => { // eslint-disable-line arrow-body-style
  const { counter, model, ocRegistryBaseUrl } = props;
  return (
    <div className="Layout">
      <Background apod={model.apod} />
      <Message message={model.greeting} />
      <Message message={model.apod.explanation} className="hide" />
      <OC href={`${ocRegistryBaseUrl}/oc-date-time-now/`} />
      <Counter value={counter} />
      <Message message={model.apod.date} />
    </div>
  );
};

Layout.propTypes = {
  counter: PropTypes.number.isRequired,
  model: PropTypes.shape.isRequired,
  ocRegistryBaseUrl: PropTypes.string.isRequired
};

export default Layout;
