import React, { Component } from 'react';

import Dropdown from './Dropdown';
import ColorPicker from './ColorPicker';
import ColorPickerOptions from '../data/colorPickerOptions';

import { Container } from './App.styled';
import Form from './Form/Form';

class App extends Component {
  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    const { formSubmitHandler } = this;

    return (
      <Container>
        <Form onSubmit={formSubmitHandler} />

        <Dropdown />
        <ColorPicker options={ColorPickerOptions} />
      </Container>
    );
  }
}

export default App;
