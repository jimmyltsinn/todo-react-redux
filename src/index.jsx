import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux'

import { createStore } from 'redux';
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './redux/actions';
import todoApp from './redux/reducers';

let store = createStore(todoApp);

let unsubscribe = store.subscribe(() => {
  // console.log(store.getState());
});

store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// unsubscribe();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
