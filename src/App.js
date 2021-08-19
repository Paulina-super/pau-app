import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/NavBar/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Header title='Samuel App'
      subtitle='Miau'/>
      <ItemListContainer greeting='¡Bienvenidos a Tienda Samuel!'/>         
    </div>
  );
}

export default App;
