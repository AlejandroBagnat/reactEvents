import React,{useState,useEffect} from 'react';
import RegistroPage from '../Pages/RegistroPage';
import Producto from '../Components/Producto';
import Filtrar from '../Components/Filtrar';

function HomePage(props) {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(
        ()=>{
                fetch("https://jsonfy.com/items")
                .then(response => response.json())
                .then(data => {
                    setProductos(data);
                    setLoading(false);
                })
        },
        []
    )

    const filtrarProducto = () => {
        setProductos([
            {
                    id:2,
                    name:"moto x",
                    price:200
            }
        ])
    }

    if (loading) {
        return(
            <div>
                Loading...
            </div>
        )        
    } else {
        return(
            <div>
                {productos.map(producto => <Producto data = {producto} />)}
                <Filtrar clickFiltrarProducto = {filtrarProducto} />
            </div>
        )
    }
}

export default HomePage;


// o	Se debera visualizar al menos un listado de 3 productos 
// obtenidos de una fuente externa (api resto o archivo json)


