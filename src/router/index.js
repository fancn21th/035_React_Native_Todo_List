import { StackNavigator } from 'react-navigation';
import Todos from '../screens/Todos';
import AddTodo from '../screens/AddTodo';

export default StackNavigator(
  {
    Todos: {
      screen: Todos,
      navigationOptions: {
        headerTitle: 'Todo List',
      },

    },
    AddTodo: {
      screen: AddTodo,
      navigationOptions: {
        headerTitle: 'Add a new Todo',
      },
    },
  },
  {
    headerMode: 'screen',
  },
);
