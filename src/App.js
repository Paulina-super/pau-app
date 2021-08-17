import React from 'react';
import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar.js';
import './App.css';
import CartWidget from './components/CartWidget/CartWidget.js';


function App() {
  return (
    <div className="App">
      <NavBar />
      <CartWidget />
      <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
        <p>
          ¡Bienvenidos!
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
