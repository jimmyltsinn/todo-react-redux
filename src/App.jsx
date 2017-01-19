import React from 'react';
import ReactDOM from 'react-dom';
import AddTodo from './components/AddTodo.jsx';
// import TodoList from './components/TodoList.jsx'
import VisibleTodoList from './containers/VisibleTodoList';
import VisibilitySetting from './containers/VisibilitySetting';
// import ListSetting from './components/ListSetting.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
          <VisibilitySetting filter='SHOW_ALL'>
            All
          </VisibilitySetting>
          <VisibilitySetting filter='SHOW_ACTIVE'>
            Active
          </VisibilitySetting>  
          <VisibilitySetting filter='SHOW_COMPLETED'>
            Completed
          </VisibilitySetting>
      </div>
    );
  }
}

export default App;
