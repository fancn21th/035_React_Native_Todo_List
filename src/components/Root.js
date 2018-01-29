import React from 'react';
import PropTypes from 'prop-types';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import TodoList from './TodoList';

const Navigator = StackNavigator({
  TodoList: { screen: TodoList },
});

const Root = ({ store }) => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

Root.propTypes = {
  store: PropTypes.shape({}).isRequired,
};

export default Root;
