import React, { Component } from 'react';

// import Dropdown from './Dropdown';
// import ColorPicker from './ColorPicker';
// import ColorPickerOptions from '../data/colorPickerOptions';
// import TodoList from './TodoList';
import todos from '../data/todoList';
import { Container } from './App.styled';
import Form from './Form/Form';

class App extends Component {
  state = {
    todos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    // const { todos } = this.state;
    // const { deleteTodo } = this;
    const { formSubmitHandler } = this;

    return (
      <Container>
        <Form onSubmit={formSubmitHandler} />

        {/* <Dropdown /> */}
        {/* <ColorPicker options={ColorPickerOptions} /> */}
        {/* <TodoList todos={todos} onDeleteTodo={deleteTodo} /> */}
      </Container>
    );
  }
}

export default App;
