import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/Items/ItemListContainer';
import {Formulario} from './components/Formulario/Formulario';
const App = () => {
    

  return (
    
      <div className="App">
        <Header title='UFP'
        subtitle='Shop'/>
        <ItemListContainer />
        <Formulario />
      </div>
      
  );
}

export default App;
