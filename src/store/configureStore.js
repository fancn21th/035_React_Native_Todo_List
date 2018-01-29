import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import todoApp from '../reducers';

const configureStore = () => {
  const middlewares = [];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }
  return createStore(
    todoApp,
    // todo: the config below is for dev only
    /* eslint-disable */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    /* eslint-enable */
    applyMiddleware(...middlewares),
  );
};

export default configureStore;
