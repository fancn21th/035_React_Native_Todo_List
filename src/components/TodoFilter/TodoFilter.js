import React from 'react';
import {
  Segment,
  Text,
} from 'native-base';
import FilterButtonContainer from './FilterButtonContainer';

const TodoFilter = () => (
  <Segment>
    <FilterButtonContainer
      filter="all"
    >
      <Text>All</Text>
    </FilterButtonContainer>
    <FilterButtonContainer
      filter="active"
    >
      <Text>Active</Text>
    </FilterButtonContainer>
    <FilterButtonContainer
      filter="completed"
    >
      <Text>Completed</Text>
    </FilterButtonContainer>
  </Segment>
);

export default TodoFilter;
