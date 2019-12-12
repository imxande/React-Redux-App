import React from 'react';
import './App.css';
import Nasa from './components/Nasa'

function App() {
  return (
    <div className="App">
      <header>
        <h1>Nasa Weather</h1>
      </header>
      <Nasa />
    </div>
  );
}

export default App;
