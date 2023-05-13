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
import { Filter } from './Filter/Filter';

class App extends Component {
  state = {
    todos,
    filter: '',
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  addTodo = text => {
    const todo = {
      id: nanoid(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
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

  getVisibleTodos = () => {
    const { todos, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    const {
      deleteTodo,
      addTodo,
      formSubmitHandler,
      changeFilter,
      getVisibleTodos,
      state: { filter },
    } = this;

    return (
      <Container>
        <Form onSubmit={formSubmitHandler} />

        {/* <Dropdown /> */}
        {/* <ColorPicker options={ColorPickerOptions} /> */}

        <TodoEditor onSubmit={addTodo} />

        <Filter value={filter} onChange={changeFilter} />

        <TodoList
          todos={getVisibleTodos()}
          onDeleteTodo={deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </Container>
    );
  }
}

export default App;
