import { useState, useEffect } from "react";
import axios from 'axios'
import Card from "../components/articulo/Card";

const HomePage = (props) => {
    const [loading, setLoading] = useState(false);
    const [articulos, setArticulos] = useState([]);

    useEffect(() => {
        const cargarArticulos = async () => {
            setLoading(true);
            const response = await axios.get('http://localhost:3000/api/home');
            setArticulos(response.data);
            setLoading(false);
        };
        cargarArticulos();
    }, []);

    return (
        <div class="container mt-5">
        <div class="row">
            { loading ? (<p>Cargando...</p>) : (
                    articulos.map(item => <Card id={item.id} title={item.titulo} descripcion={item.descripcion}
                        imagen={item.imagen} precio={item.precio}/>)
            )}
        </div>
        <form action="/login/deleteUser" method="post">
            <input type="hidden" value="{{idUsuario}}" name="id"/>
            <button type="submit" class="btn btn-danger">Remover cuenta</button>
        </form>
        </div>
    );
} 

export default HomePage