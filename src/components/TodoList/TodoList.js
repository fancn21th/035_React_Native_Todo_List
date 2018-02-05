import React from 'react';
import PropTypes from 'prop-types';
import {
  List,
} from 'native-base';
import Todo from './Todo';

const TodoList = ({ todos, onToggleTodo }) => (
  <List>
    {
      todos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          onToggleTodo={() => onToggleTodo(todo.id)}
        />
      ))
    }
  </List>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};

export default TodoList;
