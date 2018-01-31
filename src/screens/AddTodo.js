import React from 'react';
import PropTypes from 'prop-types';
import AddTodoComponent from '../components/AddTodo';

const AddTodo = ({ navigation }) => (
  <AddTodoComponent navigation={navigation} />
);

AddTodo.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default AddTodo;
