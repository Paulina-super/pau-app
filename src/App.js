import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/NavBar/ItemListContainer';
import Spinner from './components/Spinner/Spinner';

const App = () => {
    const [data,setData]= useState({});
    const[cargando, setCargando]=useState(false);

  return (
    <div className="App">
      <Header title='Samuel'
      subtitle='Shop'/>
      {cargando ? <Spinner /> : <ItemListContainer greeting='¡Bienvenidos a Tienda Samuel!'/>}
            
    </div>
  );
}

export default App;
