import { StackNavigator } from 'react-navigation';
import Todos from '../screens/Todos';
import AddTodo from '../screens/AddTodo';

export default StackNavigator(
  {
    Todos: {
      screen: Todos,
      navigationOptions: {
        header: () => null,
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
