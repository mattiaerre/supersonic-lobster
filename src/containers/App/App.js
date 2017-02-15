import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getGreeting } from '../../actions/greetingActions';
import { getApod } from '../../actions/apodActions';
import Message from '../../components/Message/Message';

class App extends React.Component {
  componentDidMount() {
    const { actions } = this.props;

    actions.getGreeting();
    actions.getApod();
  }

  render() {
    const { greeting, apod } = this.props;

    return (
      <div className="App" style={{ backgroundImage: `url('${apod.url}')` }}>
        <Message message={greeting} />
        <Message message={apod.explanation} className="hide" />
      </div >
    );
  }
}

/* eslint-disable react/forbid-prop-types */
App.propTypes = {
  greeting: PropTypes.string.isRequired,
  apod: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};
/* eslint-enable */

function mapStateToProps(state) {
  return {
    greeting: state.greeting,
    apod: state.apod
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getGreeting, getApod }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
