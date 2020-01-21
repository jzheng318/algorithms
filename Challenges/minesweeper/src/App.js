import React from 'react';
import Grid from './components/grid';
import './App.css';

const App = () => {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Minesweeper</h1>

          <Grid size={10} />
        </header>
      </div>
    </div>
  );
};

export default App;
