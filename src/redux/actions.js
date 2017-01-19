let nextTodoId = 0;

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export let addTodo = (text) => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  };
};

export let toggleTodo = (index) => {
  return {
    type: TOGGLE_TODO,
    index
  };
};

export let setVisibilityFilter = (filter) => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
};

// const REMOVE_TODO = 'REMOVE_TODO';
