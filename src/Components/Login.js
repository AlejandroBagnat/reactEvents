import React,{Component} from 'react';
import DetallePage from '../Pages/DetallePage';


function Login(props) {
    

    return(
        <div className="App">
            <form>
                <div>
                    <div><label>Usuario:</label></div>
                    <div><input type="text" name="nombre"></input></div>
                </div>
                <div>
                    <div><label>Password:</label></div>
                    <div><input type="password" name="password"></input></div>
                </div>
                <button className="button" type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;







// o	Solo realizar maquetado, no se debe guardar el usuario en ninguna base de datos