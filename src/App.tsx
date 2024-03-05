import React from 'react';
import './App.css';
import { CheckBoxGroup } from './components/checkbox-group';

function App() {
  return (
    <div className="container">
      <header className="header">
        Select All component

        <div className="checkboxContainer">
          <CheckBoxGroup
            label="Select All"
            values={[ "India", "USA", "France" ]}
          />
        </div>

      </header>
    </div>
  );
}

export default App;
