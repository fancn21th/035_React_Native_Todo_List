import {
  createReduxBoundAddListener,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import Navigator from '../router';

const initialState = Navigator.router.getStateForAction(Navigator.router.getActionForPathAndParams('Todos'));

const navReducer = (state = initialState, actions) => {
  const nextState = Navigator.router.getStateForAction(actions, state);
  return nextState || state;
};

const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

const addListener = createReduxBoundAddListener('root');

export {
  navReducer,
  navMiddleware,
  addListener,
};
