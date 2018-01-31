import React from 'react';
import PropTypes from 'prop-types';
import {
  Body,
  Header,
  Container,
  Content,
  Right,
  Left,
  Button,
  Title,
  Icon,
  Fab,
} from 'native-base';
import TodoFilter from '../components/TodoFilter';
import TodoList from '../components/TodoList';

const Todos = ({ navigation }) => (
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
      <TodoList navigation={navigation} />
    </Content>
    <Fab
      style={{ backgroundColor: '#5067FF' }}
      position="bottomRight"
      onPress={() => navigation.navigate('AddTodo')}
    >
      <Icon name="add" />
    </Fab>
  </Container>
);

Todos.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
};

export default Todos;
