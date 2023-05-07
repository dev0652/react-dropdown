// import Dropdown from './Dropdown/Dropdown';
import ColorPicker from './ColorPicker/ColorPicker';

const ColorPickerOptions = [
  { label: 'red', color: 'red' },
  { label: 'green', color: 'green' },
  { label: 'blue', color: 'blue' },
  { label: 'grey', color: 'grey' },
  { label: 'pink', color: 'pink' },
  { label: 'indigo', color: 'indigo' },
];

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* <Dropdown /> */}
      <ColorPicker options={ColorPickerOptions} />
    </div>
  );
};
