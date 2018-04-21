import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import todoApp from '../reducers';
import { navMiddleware } from '../reducers/nav';

const configureStore = () => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }
  middlewares.push(navMiddleware);
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
