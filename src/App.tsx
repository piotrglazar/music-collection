import React from 'react';
import logo from './logo.svg';
import './App.css';
import collection from './music-collection.json'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>My music collection</p>
        {collection.map(i => {
          return <p>{i.artist}: {i.title}</p>
        })}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
