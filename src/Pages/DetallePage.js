import React, {useState, useEffect} from 'react';
import Producto from '../Components/Producto';

function DetallePage(props) {
    const id = props.match.params.id;
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true);


    useEffect(
        () => {
            fetch("https://jsonfy.com/items/"+id)
            .then(response =>response.json())
            .then(data => {
                setProducto(data[0])
                setLoading(false);
            })
        },
        []
    )

        if (loading) {
            return(
                <div>
                    Loading...
                </div>
            )
        } else {
            return(
                <div>
                    <Producto data={producto} verDetalle={false}/>
                </div>
            )
        }
}

export default DetallePage;



// •	Pagina de detalle de producto
// o	Mostrar el detalle de un producto, obteniendo los datos de una api resto o archivo json. Algunos campos a visualizar son:
// o	Nombre
// o	Descripción
// o	Precio
// o	Botón "Comprar"
