import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';
import { useParams } from 'react-router-dom';


const ModificarArticulo = (props) => {

    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [articulo, setArticulo] = useState([]);
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [imagen, setImagen] = useState('');
    const [precio, setPrecio] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 
    const { user } = useUser();

    useEffect(() => {
        if(user.user.rol !== "admin"){
            navigate('/home');
        }
        const cargarArticulo = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:3000/api/articulo/${id}`);
                setArticulo(response.data);
            } catch (error) {
                console.error('Error al cargar el artículo:', error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            cargarArticulo();
        }
    }, [id, user, navigate]);

    const handleModificarArticulo= async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3000/api/modificarArticulo/${id}`, {
                titulo,
                descripcion,
                imagen,
                precio
            });

            if (response.data.success) {
                console.log(response.data)
                navigate(`/articulos/${id}`);
            } else {
                setError(response.data.message || 'Error en la autenticación');
            }
        } catch (error) {
            console.error('Error al crear articulo:', error);
            
        }
    };


    return (
            <div class="row">
                <div class="col-6 offset-3">
                    <h4>Modificar articulo</h4>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={handleModificarArticulo} enctype="multipart/form-data">
                        <div class="mb-3 row">
                            <label htmlFor="inputTitulo" className="form-label">Titulo</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputTitulo"
                                name="Titulo"
                                placeholder={articulo.titulo}
                                
                                onChange={(e) => setTitulo(e.target.value)}
                            />
                        </div>
                        <div class="mb-3">
                            <label htmlFor="inputImagen" className="form-label">Imagen</label>
                            <input
                                type="file"
                                className="form-control"
                                id="inputImagen"
                                name="imagen"
                                onChange={(e) => setImagen(e.target.value)}
                            />
                        </div>
                        <div class="mb-3 row">
                            <label htmlFor="inputDescripcion" className="form-label">Descripcion</label>
                            <textarea
                                type="text"
                                className="form-control"
                                id="inputDescripcion"
                                name="Descripcion"
                                placeholder={articulo.descripcion}
                                onChange={(e) => setDescripcion(e.target.value)}
                            />
                        </div>
                        <div class="mb-3 row">
                            <label htmlFor="inputPrecio" className="form-label">Precio</label>
                            <input
                                type="number"
                                className="form-control"
                                id="inputPrecio"
                                name="precio"
                                placeholder={articulo.precio}
                                onChange={(e) => setPrecio(e.target.value)}
                                min="0"
                            />
                        </div>
                        <button type="submit" class="btn btn-primary">Modificar</button>                               
                    </form>
                </div>
            </div>
        
    );
} 


export default ModificarArticulo