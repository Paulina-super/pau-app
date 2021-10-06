import React,{ useState } from "react";

const Formulario=()=>{
    const [user, setUser]=useState('');
    const [pass, setPass]=useState('');

    const handleOnChange = (e) => {
        if (e.target.name === 'user'){
            setUser(e.target.value)
        }else if (e.target.name === 'pass'){
            setPass(e.target.value)
        }
    }
    
    return(
        <>
            <form>
                <div>
                    <label htmlFor="user">Usuario:</label>
                    <input
                        type="text"
                        name="user"
                        id="user"
                        value={user}
                        onChange={handleOnChange}         
                    />
                </div>
                <div>
                    <label htmlFor="pass">Password:</label>
                        <input
                            type="password"
                            name="pass"
                            id="pass"
                            value={pass}   
                            onChange={handleOnChange}       
                        />
                </div>

                <button type="submit">Submit</button>

            </form>
        </>
    )
}

export {Formulario}