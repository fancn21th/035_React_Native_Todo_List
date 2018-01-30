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
import {
  View,
} from 'react-native';

import HeaderFilter from '../TodoFilter';

const TodoList = () => (
  <Container>
    <Header hasSegment>
      <Body>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <HeaderFilter />
        </View>
      </Body>
    </Header>
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

