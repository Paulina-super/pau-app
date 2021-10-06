import React from 'react';
import './App.css';
import {Formulario} from './components/Formulario/Formulario';
import Home from './components/Home/Home';


const App = () => {
    const[session,setSession]=useState(false)

    const hadnleAuthentication =()=>setSession(!session)

  return (
    
      <div className="App">
        {session ?
          <>
          <Home />
          <button>Cerrar Sesión</button>
          </>
          :      
          <Formulario />
        }
      </div>
      
  );
}

export default App;
