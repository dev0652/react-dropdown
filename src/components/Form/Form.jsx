import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { Label, RadioLabel, CheckboxLabel, MyForm } from './Form.styled';

class Form extends Component {
  state = {
    name: '',
    tag: '',
    experience: 'junior',
    license: false,
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleLicenseChange = event => {
    this.setState({
      license: event.currentTarget.checked,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      tag: '',
      experience: 'junior',
    });
  };

  render() {
    const {
      state: { name, tag, experience, license },
      handleChange,
      handleSubmit,
      handleLicenseChange,
    } = this;

    return (
      <MyForm onSubmit={handleSubmit}>
        <Label>
          Name
          <input
            type="text"
            name="name"
            id={nanoid()}
            placeholder="Enter name"
            value={name}
            onChange={handleChange}
          />
        </Label>

        <Label>
          Tag
          <input
            type="text"
            name="tag"
            id={nanoid()}
            placeholder="Enter tag"
            value={tag}
            onChange={handleChange}
          />
        </Label>

        <p>Your level:</p>
        <RadioLabel>
          Junior
          <input
            type="radio"
            name="experience"
            onChange={handleChange}
            value="junior"
            checked={experience === 'junior'}
          />
        </RadioLabel>
        <RadioLabel>
          Middle
          <input
            type="radio"
            name="experience"
            onChange={handleChange}
            value="middle"
            checked={experience === 'middle'}
          />
        </RadioLabel>
        <RadioLabel>
          Senior
          <input
            type="radio"
            name="experience"
            onChange={handleChange}
            value="senior"
            checked={experience === 'senior'}
          />
        </RadioLabel>

        <CheckboxLabel>
          I accept the Terms and Conditions
          <input
            type="checkbox"
            name="license"
            checked={license}
            onChange={handleLicenseChange}
          />
        </CheckboxLabel>

        <button type="submit" disabled={!license}>
          Send
        </button>
      </MyForm>
    );
  }
}
export default Form;
