import React from 'react';
import {
  Segment,
  Button,
  Text,
} from 'native-base';

const TodoFilter = () => (
  <Segment>
    <Button
      first
      active
    >
      <Text>All</Text>
    </Button>
    <Button>
      <Text>Active</Text>
    </Button>
    <Button
      last
    >
      <Text>Completed</Text>
    </Button>
  </Segment>
);

export default TodoFilter;
