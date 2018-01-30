import * as api from '../api';

const toogleTodo = id => (dispatch) => {
  api.toggleTodo(id).then((response) => {
    dispatch({
      type: 'TOGGLE_TODO_SUCCESS',
      response,
    });
  });
};

export default toogleTodo;
