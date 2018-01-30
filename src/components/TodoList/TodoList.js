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
  Fab,
  Icon,
} from 'native-base';
import HeaderFilter from '../TodoFilter';

const TodoList = () => (
  <Container>
    <Header />
    <HeaderFilter />
    <Content>
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
    <Fab
      style={{ backgroundColor: '#5067FF' }}
      position="bottomRight"
    >
      <Icon name="add" />
    </Fab>
  </Container>
);

export default TodoList;

