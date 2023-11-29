import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../contexts/UserContext';


const CrearArticulo = (props) => {

    
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

    }, [user, navigate]);
    const handleCreateArticulo = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/crearArticulo', {
                titulo,
                descripcion,
                imagen,
                precio
            });

            if (response.data.success) {
                console.log(response.data)
                navigate('/');
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
                    <h4>Agregar un nuevo producto</h4>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <form onSubmit={handleCreateArticulo} enctype="multipart/form-data">
                        <div class="mb-3 row">
                            <label htmlFor="inputTitulo" className="form-label">Titulo</label>
                            <input
                                type="text"
                                className="form-control"
                                id="inputTitulo"
                                name="Titulo"
                                placeholder="Introduce tu titulo"
                                value={titulo}
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
                                value={imagen}
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
                                placeholder="Introduce tu Descripcion"
                                value={descripcion}
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
                                placeholder="Precio"
                                value={precio}
                                onChange={(e) => setPrecio(e.target.value)}
                                min="0"
                            />
                        </div>
                        <button type="submit" class="btn btn-primary">Crear</button>                               
                    </form>
                </div>
            </div>
        
    );
} 


export default CrearArticulo