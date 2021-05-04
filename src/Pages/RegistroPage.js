import React,{Component} from 'react';

function RegistroPage(props) {
    

    return(
        <div className="App">
            <form>
                <div>
                    <div><label>Nombre:</label></div>
                    <div><input type="text" name="nombre"></input></div>
                </div>
                <div>
                    <div><label>Apellido:</label></div> 
                    <div><input type="text" name="apellido"></input></div>    
                </div>
                <div>
                    <div><label>Email:</label></div>
                    <div><input type="email" name="email"></input></div>
                </div>
                <div>
                    <div><label>Password:</label></div>
                    <div><input type="password" name="password"></input></div>
                </div>
                <button className="button" type="submit">Registrarse</button>
            </form>
        </div>
    )
}

export default RegistroPage;


// •	Registro
// o	Solo realizar maquetado, no se debe guardar el usuario en ninguna base de datos





// o	Solo realizar maquetado, no se debe guardar el usuario en ninguna base de datos