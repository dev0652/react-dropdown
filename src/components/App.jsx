import React, { Component } from 'react';
import { nanoid } from 'nanoid';

// import Dropdown from './Dropdown';
// import ColorPicker from './ColorPicker';
// import ColorPickerOptions from '../data/colorPickerOptions';

import { Container } from './App.styled';
import Form from './Form/Form';

import todos from '../data/todoList';
import TodoList from './TodoList';
import TodoEditor from './TodoEditor/TodoEditor';

class App extends Component {
  state = {
    todos,
  };

  addTodo = text => {
    const todo = {
      id: nanoid(),
      text,
      completed: false,
    };

    this.setState(prevState => ({
      todos: [todo, ...prevState.todos],
    }));
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    const {
      deleteTodo,
      addTodo,
      formSubmitHandler,
      state: { todos },
    } = this;

    return (
      <Container>
        <Form onSubmit={formSubmitHandler} />

        {/* <Dropdown /> */}
        {/* <ColorPicker options={ColorPickerOptions} /> */}

        <TodoEditor onSubmit={addTodo} />

        <TodoList
          todos={todos}
          onDeleteTodo={deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </Container>
    );
  }
}

export default App;
