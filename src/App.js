import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="App-Logo2">
          <p>Logo</p>
        </div>
        <div className="lowerLeft">
          <p>Powered by <a href="https://en.wikipedia.org/wiki/Coffee">
          AL and BC</a>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
