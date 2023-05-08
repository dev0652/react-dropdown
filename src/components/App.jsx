import React, { Component } from 'react';

// import Dropdown from './Dropdown';
// import ColorPicker from './ColorPicker';
// import { ColorPickerOptions } from '../data/colorPickerOptions';
import TodoList from './TodoList';

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Master React 101', completed: false },
      { id: 'id-2', text: 'Get handy with React Router', completed: false },
      { id: 'id-3', text: 'Survive Redux', completed: false },
    ],
  };

  render() {
    const { todos } = this.state;

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
        {/* <Dropdown /> */}
        {/* <ColorPicker options={ColorPickerOptions} /> */}
        <TodoList todos={todos} />
      </div>
    );
  }
}

export default App;
