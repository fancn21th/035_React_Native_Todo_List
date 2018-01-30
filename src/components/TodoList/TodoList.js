import React from 'react';
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

const TodoList = () => (
  <Container>
    <Header hasTabs>
      <Left>
        <Button transparent onPress={() => this.props.navigation.goBack()}>
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
            <CheckBox
              checked={false}
            />
          </Right>
        </ListItem>
        <ListItem>
          <Body>
            <Text>Name of the product</Text>
          </Body>
          <Right>
            <CheckBox
              checked={false}
            />
          </Right>
        </ListItem>
      </List>
    </Content>
  </Container>
);

export default TodoList;

