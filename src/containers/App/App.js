import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/greetingActions';
import Message from '../../components/Message/Message';

class App extends React.Component {
  componentDidMount() {
    this.props.actions.getGreeting();
  }

  render() {
    return (
      <div className="App">
        <Message message={this.props.greeting} />
      </div>
    );
  }
}

App.propTypes = {
  greeting: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

function mapStateToProps(state) {
  return {
    greeting: state.greeting
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
