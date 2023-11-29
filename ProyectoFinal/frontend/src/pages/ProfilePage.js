import { useState, useEffect } from "react";
import axios from 'axios'
import { useParams } from 'react-router-dom';


const ProfilePage = (props) => {
    const [loading, setLoading] = useState(false);
    const [perfil, setPerfil] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const cargarPerfil = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`http://localhost:3000/api/profile/${id}`);
                setPerfil(response.data);
            } catch (error) {
                console.error('Error al cargar el perfil:', error);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            cargarPerfil();
        }
    }, [id]);

    return (
        <div class="container mt-5">
        <div class="row">
            { loading ? (<p>Cargando...</p>) : (
                <div class="container-fluid">
                <div class="row justify-content-center align-items-center vh-100">
                  
                  <div class="card col-md-6">
                    <div class="card-header">
                      <h5 class="card-title">{perfil.username}</h5>
                    </div>
                    <div class="card-body text-center">
                      <p class="card-text">Rol: {perfil.rol}</p>
                    </div>
                  </div>
                </div>
                </div>
            )}
        </div>
        </div>
    );
} 


export default ProfilePage