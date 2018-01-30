import uuidv1 from 'uuid/v1';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const fakeTodos = {
  todos: [
    {
      id: uuidv1(),
      text: 'I want to do this 1stly',
      completed: false,
    },
    {
      id: uuidv1(),
      text: 'I want to do this 2ndly',
      completed: true,
    },
    {
      id: uuidv1(),
      text: 'I want to do this 3rdly',
      completed: false,
    },
  ],
};

export const fetchTodos = filter =>
  delay(1000).then(() => {
    if (Math.random() > 0.9) {
      throw new Error('Boom!');
    }
    switch (filter) {
      case 'all':
        return fakeTodos.todos;
      case 'active':
        return fakeTodos.todos.filter(t => !t.completed);
      case 'completed':
        return fakeTodos.todos.filter(t => t.completed);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });

export const addTodo = text =>
  delay(500).then(() => {
    const todo = {
      id: uuidv1(),
      text,
      completed: false,
    };
    fakeTodos.todos.push(todo);
    return todo;
  });

export const toggleTodo = id =>
  delay(500).then(() => {
    const todo = fakeTodos.todos.find(t => t.id === id);
    todo.completed = !todo.completed;
    return todo;
  });
