import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/NavBar/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Header title='Samuel'
      subtitle='Shop'/>
        <ItemListContainer greeting='¡Bienvenidos a Tienda Samuel!'/>   
        
            
            
    </div>
  );
}

export default App;
