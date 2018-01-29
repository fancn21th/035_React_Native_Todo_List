import React from 'react';
import {
  Segment,
  Button,
  Text,
} from 'native-base';

const TodoFilter = () => (
  <Segment>
    <Button first>
      <Text>All</Text>
    </Button>
    <Button>
      <Text>Active</Text>
    </Button>
    <Button last active>
      <Text>Completed</Text>
    </Button>
  </Segment>
);

export default TodoFilter;
