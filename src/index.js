import React from 'react';
import PropTypes from 'prop-types';
import { Provider, connect } from 'react-redux';
import { addNavigationHelpers } from 'react-navigation';
import Navigator from './router/index';

const App = ({ dispatch, nav }) => (
  <Navigator
    navigation={addNavigationHelpers({
      dispatch,
      state: nav,
    })}
  />
);

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.shape({}).isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

const AppWithNavigation = connect(mapStateToProps)(App);

const Root = ({ store }) => (
  <Provider store={store}>
    <AppWithNavigation />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

export default Root;
