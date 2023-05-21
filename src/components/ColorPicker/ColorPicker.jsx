import React, { PureComponent } from 'react';
import './ColorPicker.css';
import classNames from 'classnames';

class ColorPicker extends PureComponent {
  state = {
    activeOptionIdx: 0,
  };

  setActiveIndex = index => {
    this.setState({ activeOptionIdx: index });
  };

  // makeOptionClassName = index => {
  //   const optionClasses = ['ColorPicker__option'];

  //   if (index === this.state.activeOptionIdx) {
  //     optionClasses.push('ColorPicker__option--active');
  //   }

  //   return optionClasses.join(' ');
  // };

  render() {
    const { activeOptionIdx } = this.state;
    const { options } = this.props;
    const { label } = options[activeOptionIdx];

    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>Selected color: {label}</p>

        <div>
          {options.map(({ label, color }, index) => {
            return (
              <span
                key={label}
                // className={this.makeOptionClassName(index)}
                className={classNames('ColorPicker__option', {
                  'ColorPicker__option--active':
                    index === this.state.activeOptionIdx,
                })}
                style={{
                  backgroundColor: color,
                }}
                onClick={() => this.setActiveIndex(index)}
              ></span>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
