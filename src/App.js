import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/NavBar/ItemListContainer';

const App = () => {
    const [data,setData]= useState({});

  return (
    <div className="App">
      <Header title='Samuel'
      subtitle='Shop'/>
      <ItemListContainer greeting='¡Bienvenidos a Tienda Samuel!'/>
            
    </div>
  );
}

export default App;
