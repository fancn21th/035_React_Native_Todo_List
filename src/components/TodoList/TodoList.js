import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
} from 'native-base';
import Todo from './Todo';

const TodoList = ({ todos }) => (
  <List>
    {
      todos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
        />
      ))
    }
  </List>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default TodoList;
