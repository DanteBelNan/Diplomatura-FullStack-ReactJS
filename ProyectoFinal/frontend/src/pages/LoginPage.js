import { useState } from "react";
import axios from 'axios';
import { useUser } from '../contexts/UserContext'; 
import { useNavigate } from 'react-router-dom';


const LoginPage = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useUser(); 
    const navigate = useNavigate(); 
    

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/api/login', {
                username,
                password
            });

            if (response.data.success) {
                login(response.data);  
                navigate('/');
            } else {
                setError(response.data.message || 'Error en la autenticación');
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            
        }
    };

    const handleRegister= async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://localhost:3000/api/register`, {
            });

            if (response.data.success) {
                navigate(`/register`);
            } else {
                setError(response.data.message || 'No se pudo entrar a registrarse');
            }
        } catch (error) {
            console.error('Error al entrar a registrarse:', error);
            
        }
    }

    return (
        <div className="container">
            <h1>Formulario de login</h1>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleLogin}>
                <div className="mb-3">
                    <label htmlFor="inputUser" className="form-label">Usuario</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputUser"
                        name="username"
                        placeholder="Introduce tu usuario"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="inputPassword" className="form-label">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        name="password"
                        placeholder="Introduce tu contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Iniciar sesión</button>
            </form>
            <form onSubmit={handleRegister}>
                <button type="submit" class="btn btn-outline-danger my-2 my-sm-0 ml-2">Registrarse</button>
            </form>
        </div>
    );
} 


export default LoginPage