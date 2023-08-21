import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {

  const [disabled, setDisabled ] = useState(false);
  const [buttonColor, setButtonColor ] = useState('MediumVioletRed');
  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <div className="App">
      <button
        style={{backgroundColor: disabled? 'gray': buttonColor}}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
      </button>
      <input
        type='checkbox'
        onClick={(e) => setDisabled(e.target.checked)}
      />
    </div>
  );
}

export default App;
