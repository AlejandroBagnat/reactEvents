import React,{Component} from 'react';
import DetallePage from '../Pages/DetallePage';


function Filtrar(props) {
    

    return(
        <div>
            <button onClick={props.ClickFiltrarProducto}>Filtrar</button>
        </div>
    )
}

export default Filtrar;







// o	Solo realizar maquetado, no se debe guardar el usuario en ninguna base de datos