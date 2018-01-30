import React from 'react';
import PropTypes from 'prop-types';
import {
  Body,
  Header,
  Container,
  Content,
  Right,
  Text,
  CheckBox,
  List,
  ListItem,
  Left,
  Button,
  Title,
  Icon,
} from 'native-base';
import TodoFilter from '../TodoFilter';

const TodoList = ({ navigation }) => (
  <Container>
    <Header hasTabs>
      <Left>
        <Button transparent onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" />
        </Button>
      </Left>
      <Body>
        <Title>Todo List</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon name="search" />
        </Button>
      </Right>
    </Header>
    <TodoFilter />
    <Content padder>
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
    </Content>
  </Container>
);

TodoList.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default TodoList;
