import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {ItemListContainer} from './components/Items/ItemListContainer.js';

const App = () => {
    

  return (
    
        <div className="App">
          <Header title='Samuel'
          subtitle='Shop'/>
          <ItemListContainer />
        </div>
    
  );
}

export default App;
