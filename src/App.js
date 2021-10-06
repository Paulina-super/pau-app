import {useState} from 'react';
import './App.css';
import {Formulario} from './components/Formulario/Formulario';
import Home from './components/Home/Home';


const App = () => {
    const[session,setSession]=useState(false)

    const handleAuthentication =()=>setSession(!session)

  return (
    
      <div className="App">
        {session ?
          <>
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
