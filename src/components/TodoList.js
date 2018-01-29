import React from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';

const TodoList = () => (
  <Container>
    <Header />
    <Content>
      <List>
        <ListItem>
          <Text>Simon Mignolet</Text>
        </ListItem>
        <ListItem>
          <Text>Nathaniel Clyne</Text>
        </ListItem>
        <ListItem>
          <Text>Dejan Lovren</Text>
        </ListItem>
      </List>
    </Content>
  </Container>
);

export default TodoList;
