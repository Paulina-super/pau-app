import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ItemListContainer from './components/Items/ItemListContainer';

const App = () => {
    

  return (
    
      <div className="App">
        <Header title='UFP'
        subtitle='Shop'/>
        <ItemListContainer />
      </div>
  );
}

export default App;
