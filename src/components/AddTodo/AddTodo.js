import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Item,
  Label,
  Input,
  Body,
  Left,
  Right,
  Icon,
  Form,
  Text,
} from 'native-base';
import { Keyboard } from 'react-native';

const AddTodo = ({ navigation, addTodo }) => (
  <Container>
    <Header>
      <Left>
        <Button transparent onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" />
        </Button>
      </Left>
      <Body>
        <Title>Add a new Todo</Title>
      </Body>
      <Right />
    </Header>
    <Content>
      <Form>
        <Item fixedLabel>
          <Label>Todo Name</Label>
          <Input
            ref={
              (input) => { AddTodo.textInput = input; }
            }
            onChangeText={
              (text) => { AddTodo.text = text; }
            }
          />
        </Item>
      </Form>
      <Button
        block
        style={{ margin: 15, marginTop: 50 }}
        onPress={() => {
          Keyboard.dismiss();
          if (AddTodo.text) {
            addTodo(AddTodo.text);
            navigation.navigate('Todos');
          }
        }}
      >
        <Text>Add</Text>
      </Button>
    </Content>
  </Container>
);

AddTodo.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;
