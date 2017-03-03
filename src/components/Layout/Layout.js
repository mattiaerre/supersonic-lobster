import React, { PropTypes } from 'react';
import Message from '../../components/Message/Message';
import Counter from '../../components/Counter/Counter';

const Layout = (props) => { // eslint-disable-line arrow-body-style
  const { counter, model } = props;
  return (
    <div className="Layout">
      <div>
        <Message message={model.greeting} />
        <Message message={model.apod.explanation} className="hide" />
        <Message message={model.apod.date} />
      </div>
      <div>
        <Counter value={counter} />
      </div>
    </div>
  );
};

Layout.propTypes = {
  counter: PropTypes.number.isRequired,
  model: PropTypes.shape.isRequired
};

export default Layout;
