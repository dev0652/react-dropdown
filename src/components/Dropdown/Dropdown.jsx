import React, { Component } from 'react';
import './Dropdown.css';

class Dropdown extends Component {
  state = { visible: false };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    const { visible } = this.state;
    const { toggle } = this;

    return (
      <div className="Dropdown">
        <button
          type="button"
          className="Dropdown__toggle"
          onClick={toggle}
          // onMouseOver={toggle}
          // onMouseLeave={toggle}
        >
          {visible ? 'Hide' : 'Show'}
        </button>

        {visible && <div className="Dropdown__menu">Dropdown menu</div>}
      </div>
    );
  }
}

export default Dropdown;
