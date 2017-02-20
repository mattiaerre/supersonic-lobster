import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxFalcor } from 'redux-falcor';
import { bindActionCreators } from 'redux';
import { renderUnloadedComponents } from '../../actions/ocActions';
import Message from '../../components/Message/Message';
import OC from '../../components/OC/OC';
import Counter from '../../components/Counter/Counter';

class App extends React.Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.renderUnloadedComponents();
  }

  fetchFalcorDeps() {
    return this.props.falcor.get(['greeting'], ['apod', ['explanation', 'url']]);
  }

  render() {
    const { greeting, apod } = this.props;

    return (
      <div className="App" style={{ backgroundImage: `url('${apod.url}')` }}>
        <Message message={greeting} />
        <Message message={apod.explanation} className="hide" />
        <OC href={`${this.props.ocRegistryBaseUrl}/oc-date-time-now/`} />
        <Counter value={this.props.counter} />
      </div >
    );
  }
}

/* eslint-disable react/forbid-prop-types */
App.propTypes = {
  greeting: PropTypes.string.isRequired,
  apod: PropTypes.object.isRequired,
  ocRegistryBaseUrl: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired,
  falcor: PropTypes.object.isRequired
};
/* eslint-enable */

function mapStateToProps(state) {
  return {
    greeting: state.falcor.greeting,
    apod: state.falcor.apod,
    ocRegistryBaseUrl: state.ocRegistryBaseUrl,
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ renderUnloadedComponents }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxFalcor(App));
