import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionIdx: 0,
  };

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];

    if (index === this.state.activeOptionIdx) {
      optionClasses.push('ColorPicker__option--active');
    }

    return optionClasses.join(' ');
  };

  render() {
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>

        <div>
          {this.props.options.map(({ label, color }, index) => {
            return (
              <span
                key={label}
                className={this.makeOptionClassName()}
                style={{
                  backgroundColor: color,
                }}
              ></span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
