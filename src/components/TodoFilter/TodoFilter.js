import React from 'react';
import PropTypes from 'prop-types';
import {
  Segment,
  Text,
} from 'native-base';
import FilterButtonContainer from './FilterButtonContainer';

const TodoFilter = ({ navigation }) => (
  <Segment>
    <FilterButtonContainer
      filter="all"
      navigation={navigation}
    >
      <Text>All</Text>
    </FilterButtonContainer>
    <FilterButtonContainer
      filter="active"
      navigation={navigation}
    >
      <Text>Active</Text>
    </FilterButtonContainer>
    <FilterButtonContainer
      filter="completed"
      navigation={navigation}
    >
      <Text>Completed</Text>
    </FilterButtonContainer>
  </Segment>
);

TodoFilter.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default TodoFilter;
