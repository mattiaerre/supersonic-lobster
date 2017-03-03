import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getFalcorModel } from '../../actions/falcorActions';
import Layout from '../../components/Layout/Layout';

class App extends React.Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getFalcorModel();
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
  model: PropTypes.shape.isRequired
};

function mapStateToProps(state) {
  return {
    counter: state.counter,
    model: state.falcor
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ getFalcorModel }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
