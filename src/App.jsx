import React from 'react';
import ReactDOM from 'react-dom';
import AddTodo from './components/AddTodo.jsx'
import TodoList from './components/TodoList.jsx'
import ListSetting from './components/ListSetting.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <AddTodo />
        <TodoList />
        <ListSetting />
      </div>
    );
  }
}

export default App;
