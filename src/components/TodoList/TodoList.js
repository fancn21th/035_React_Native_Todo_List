import React from 'react';
import {
  Body,
  Right,
  Text,
  CheckBox,
  List,
  ListItem,
} from 'native-base';

const TodoList = () => (
  <List>
    <ListItem>
      <Body>
        <Text>Name of the product</Text>
      </Body>
      <Right>
        <CheckBox checked={false} />
      </Right>
    </ListItem>
    <ListItem>
      <Body>
        <Text>Name of the product</Text>
      </Body>
      <Right>
        <CheckBox checked={false} />
      </Right>
    </ListItem>
  </List>
);

TodoList.propTypes = {
};

export default TodoList;
