import React from 'react';
import PropTypes from 'prop-types';
import {
  Body,
  Right,
  Text,
  CheckBox,
  List,
  ListItem,
} from 'native-base';

const TodoList = ({ todos }) => (
  <List>
    {
      todos.map(todo => (
        <ListItem key={todo.id}>
          <Body>
            <Text>{todo.text}</Text>
          </Body>
          <Right>
            <CheckBox checked={todo.completed} />
          </Right>
        </ListItem>
      ))
    }
  </List>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default TodoList;
