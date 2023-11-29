import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
import { useUser } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';  

import Card from "../components/articulo/Card";

const HomePage = () => {
    const [loading, setLoading] = useState(false);
    const [articulos, setArticulos] = useState([]);
    const { user } = useUser();  
    
    const navigate = useNavigate();  

    useEffect(() => {
        if (!user) {
            navigate('/login');
        } else {
            const cargarArticulos = async () => {
                setLoading(true);
                try {
                    const response = await axios.get('http://localhost:3000/api/home');
                    setArticulos(response.data);
                } catch (error) {
                    console.error('Error al cargar artículos:', error);
                } finally {
                    setLoading(false);
                }
            };
            cargarArticulos();
        }
    }, [user, navigate]);

    return (
        <div className="container mt-5">
            <div className="row">
                {loading ? (<p>Cargando...</p>) : (
                    articulos.map(item => (
                        <Card
                            key={item.id}
                            id={item.id}
                            titulo={item.titulo}
                            descripcion={item.descripcion}
                            imagen={item.imagen}
                            precio={item.precio}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default HomePage;
