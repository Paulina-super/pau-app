import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/NavBar/ItemListContainer';
import CardContainer from './components/CardContainer/CardContainer';

function App() {
  return (
    <div className="App">
      <Header title='Samuel'
      subtitle='Pet Shop'/>
        <ItemListContainer greeting='¡Bienvenidos a Tienda Samuel!'/>   
        <CardContainer />
            
            
    </div>
  );
}

export default App;
