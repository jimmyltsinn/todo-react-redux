import { combineReducers } from 'redux';
import * as Actions from './actions';

// const initialState = {
//   visibilityFilter: Actions.VisibilityFilters.SHOW_ALL,
//   todos: []
// };

function todos(state = [], action) {
  switch (action.type) {
    case Actions.ADD_TODO:
      return [
          ...state,
          {
            text: action.text,
            completed: false
          }
        ];
    case Actions.TOGGLE_TODO :
      return state.map((todo, index) => {
        if (index == action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    default: return state;
  }
}

function visibilityFilter(state = Actions.VisibilityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case Actions.SET_VISIBILITY_FILTER:
      return action.filter;
    default: return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
});

export default todoApp;
