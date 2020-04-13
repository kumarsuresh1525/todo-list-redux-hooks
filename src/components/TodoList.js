import React, {memo} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Todo from './Todo';
import { toggleTodo, VisibilityFilters } from '../actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => getVisibleTodos(state.todos, state.visibilityFilter));
  return (
    <ul>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => dispatch(toggleTodo(todo.id))}
        />
      )}
    </ul>
  );
}

export default memo(TodoList);