import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    name: '',
    tag: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
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
    });
  };

  render() {
    const {
      state: { name, tag },
      handleChange,
      handleSubmit,
    } = this;

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            id=""
            placeholder="Enter name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label>
          Tag
          <input
            type="text"
            name="tag"
            id=""
            placeholder="Enter tag"
            value={tag}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Send</button>
      </form>
    );
  }
}
