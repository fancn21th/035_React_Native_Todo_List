import React from 'react';
import PropTypes from 'prop-types';
import TodoList from '../components/TodoList';

const Todos = ({ navigation }) => <TodoList navigation={navigation} />;

Todos.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default Todos;
