import React,{Component, useState} from 'react';
import Login from '../Components/Login';
import {Link} from 'react-router-dom';
import '../App.css';

function Producto(props) {
    const [mensaje,setMensaje] = useState("");
    const {id, name, price} = props.data;
    const [cantidad, setCantidad] = useState(props.data.stock);
    const verDetalle = (props.verDetalle!==false?true:false);

    const numero = () => setCantidad(cantidad - 1);

    const comprar = (e) => {
        e.preventDefault();
            if((cantidad-1) == 0) {
                setMensaje("No hay stock")  
            } else {
                setMensaje("Gracias por su compra")
                console.log(numero()); 
            }
    }

    return(
        <div className="firstFrame">
            <div className="frame"><b>Id:</b> {id}</div>
            <div className="frame"><b>Nombre:</b>  {name}</div>
            <div className="frame"><b>Precio:</b>  {price}</div>
            <div className="frame"><b>Cantidad de productos:</b>  {cantidad}</div>
            <button className="button" onClick={comprar}>Comprar</button>
            {
                verDetalle && 
                <button id="buttonDetail"><Link to={"/producto/"+id}>Ver Detalle</Link></button>
            }

            <div id="message">{mensaje}</div>
            
        </div>
    )
}

export default Producto;

// •	Pagina de detalle de producto
// o	Mostrar el detalle de un producto, obteniendo los datos de una api resto o archivo json. 
// Algunos campos a visualizar son:
// o	Nombre
// o	Descripción
// o	Precio
// o	Botón "Comprar"
