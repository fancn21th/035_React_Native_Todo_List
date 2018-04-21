import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { Spinner } from 'native-base';
import {
  getVisibleTodos,
  getIsFetching,
  getErrorMessage,
} from '../../reducers';
import TodoList from './TodoList';
import FetchError from '../FetchError';
import toggleTodo from '../../actions/toggleTodo';
import fetchTodos from '../../actions/fetchTodos';

class TodoListContainer extends Component {
  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData();
    }
  }

  fetchData() {
    /* eslint-disable no-shadow */
    const { filter, fetchTodos } = this.props;
    /* eslint-enable no-shadow */
    fetchTodos(filter);
  }

  render() {
    /* eslint-disable no-shadow */
    const {
      todos,
      toggleTodo,
      isFetching,
      errorMessage,
    } = this.props;
    /* eslint-enable no-shadow */
    if (isFetching && !todos.length) {
      return <Spinner />;
    }
    if (errorMessage && !todos.length) {
      return (
        <FetchError message={errorMessage} onRetry={() => this.fetchData()} />
      );
    }
    return <TodoList todos={todos} onToggleTodo={toggleTodo} />;
  }
}

TodoListContainer.defaultProps = {
  errorMessage: '',
  todos: [],
};

TodoListContainer.propTypes = {
  filter: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  todos: PropTypes.arrayOf(PropTypes.shape({})),
  toggleTodo: PropTypes.func.isRequired,
  fetchTodos: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

const mapStateToProps = (state, { navigation }) => {
  const filter = navigation.state.params && navigation.state.params.filter ? navigation.state.params.filter : 'all';
  return {
    // for now the component do not rely on the state shape anymore
    todos: getVisibleTodos(state, filter),
    filter,
    isFetching: getIsFetching(state, filter),
    errorMessage: getErrorMessage(state, filter),
  };
};

export default withNavigation(connect(mapStateToProps, {
  toggleTodo, // mapDispatchToProps shorthand notation, no need to call dispatch explicitly
  fetchTodos,
})(TodoListContainer));
