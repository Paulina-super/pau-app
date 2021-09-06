import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';


import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';


const App = () => {
    const [data,setData]= useState({});

  return (
    <BrowserRouter>
        <div className="App">
          <Header title='Samuel'
          subtitle='Shop'/>
          
        </div>
    </BrowserRouter>
  );
}

export default App;
