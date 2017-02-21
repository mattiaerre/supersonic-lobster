import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxFalcor } from 'redux-falcor';
import { bindActionCreators } from 'redux';
import { renderUnloadedComponents } from '../../actions/ocActions';
import Layout from '../../components/Layout/Layout';

class App extends React.Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.renderUnloadedComponents();
  }

  fetchFalcorDeps() {
    const { falcor } = this.props;
    return falcor.get(['apod', ['date', 'explanation', 'media_type', 'url']], ['greeting']);
  }

  render() {
    const { model } = this.props;
    return (
      <div className="App" style={{ backgroundImage: `url('${model.apod.url}')` }}>
        <Layout {...this.props} />
      </div >
    );
  }
}

App.propTypes = {
  actions: PropTypes.shape.isRequired,
  falcor: PropTypes.shape.isRequired,
  model: PropTypes.shape.isRequired
};

function mapStateToProps(state) {
  return {
    counter: state.counter,
    model: state.falcor,
    ocRegistryBaseUrl: state.ocRegistryBaseUrl
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
