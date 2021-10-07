import {useState} from 'react';
import './App.css';
import {Formulario} from './components/Formulario/Formulario';
import Home from './components/Home/Home';
import Catalogo from './components/Catalogo/Catalogo';
import Us from './components/Us/Us';
import Contacto from './components/Contacto/Contacto';
import{BrowserRouter as Router, Switch, Route} from "react-router-dom"


const App = () => {
    const[session,setSession]=useState(false)

    const handleAuthentication =()=>setSession(!session)

  return (
    
      <div className="App">
        {session ?
          <>
            <Router>
              <Switch>
                <Route />
                <Route />
                <Route />
                <Route />

              </Switch>


            </Router>




          <Home />
          <button onClick={()=>setSession(false)}>Cerrar Sesión</button>
          </>
          :      
          <Formulario handleAuthentication={handleAuthentication}/>
        }
      </div>
      
  );
}

export default App;
