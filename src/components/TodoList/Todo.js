import React from 'react';
import PropTypes from 'prop-types';
import {
  Body,
  Right,
  Text,
  CheckBox,
  ListItem,
} from 'native-base';
import style from './styles';

const Todo = ({ text, completed, onToggleTodo }) => (
  <ListItem>
    <Body>
      <Text style={[completed && style.completed]}>{text}</Text>
    </Body>
    <Right>
      <CheckBox
        checked={completed}
        onPress={onToggleTodo}
      />
    </Right>
  </ListItem>
);

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onToggleTodo: PropTypes.func.isRequired,
};

export default Todo;

