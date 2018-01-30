import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import Navigator from './router/index';

const Root = ({ store }) => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

export default Root;
