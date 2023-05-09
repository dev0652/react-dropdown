import React, { Component } from 'react';

import Dropdown from './Dropdown';
import ColorPicker from './ColorPicker';
import ColorPickerOptions from '../data/colorPickerOptions';
import TodoList from './TodoList';
import todos from '../data/todoList';

class App extends Component {
  state = { todos };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const { deleteTodo } = this;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 24,
          color: '#010101',
        }}
      >
        <Dropdown />
        <ColorPicker options={ColorPickerOptions} />
        <TodoList todos={todos} onDeleteTodo={deleteTodo} />
      </div>
    );
  }
}

export default App;
