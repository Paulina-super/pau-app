import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import ItemDetailContainer from './components/NavBar/ItemDetailContainer';
import ItemListContainer from './components/NavBar/ItemListContainer';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';


const App = () => {
    const [data,setData]= useState({});

  return (
    <BrowserRouter>
        <div className="App">
          <Header title='Samuel'
          subtitle='Shop'/>
          <Switch>
            <Route exact path='/'>
              <ItemListContainer greeting='¡Bienvenidos a Tienda Samuel!'/>
            </Route>
            <Route path='category/:categoryId'>
              <ItemListContainer greeting='¡Bienvenidos a Tienda Samuel!'/>
            </Route>
            <Route path='/item/:id'>
              <ItemDetailContainer></ItemDetailContainer>
            </Route>
          
          <ItemListContainer greeting='¡Bienvenidos a Tienda Samuel!'/>
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
