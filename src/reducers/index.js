import { combineReducers } from 'redux';
import nav from './nav';
import byId, * as fromById from './byId';
import createList, * as fromList from './createList';

const listByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed'),
});

const todos = combineReducers({
  byId,
  listByFilter,
  nav,
});

export default todos;

export const getVisibleTodos = (state, filter) =>
  fromList.getIds(state.listByFilter[filter]).map(id => fromById.getTodo(state.byId, id));

export const getIsFetching = (state, filter) => fromList.getIsFetching(state.listByFilter[filter]);

export const getErrorMessage =
  (state, filter) => fromList.getErrorMessage(state.listByFilter[filter]);

// export const getNavKeyByFilter = (state, filter) => {
//   const match = state.nav.routers.find(route =>
//     route.params.filter && route.params.filter === filter);
//   if (match) return match.key;
//   return null;
// };
