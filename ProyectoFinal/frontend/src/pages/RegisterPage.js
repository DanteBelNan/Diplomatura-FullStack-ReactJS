import { useState } from "react";
import axios from 'axios';
import { useUser } from '../contexts/UserContext'; 
import { useNavigate } from 'react-router-dom';


const LoginPage = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const { login } = useUser(); 
    const navigate = useNavigate(); 
    

    const handleRegister= async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3000/api/register`, {
                username,
                password,
                password2,
                email
            });

            if (response.data.success) {
                navigate(`/`);
            } else {
                setError(response.data.message || 'No se pudo entrar a registrarse');
            }
        } catch (error) {
            console.error('Error al entrar a registrarse:', error);
            
        }
    }

    return (
        <div className="container">
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleRegister}>
                <div class="mb-3">
                    <label for="username" class="form-label">Usuario</label>
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
                <div class="mb-3">
                    <label for="email" class="form-label">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputEmail"
                        name="email"
                        placeholder="Introduce tu usuario"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Contraseña</label>
                    <input
                        type="password"
                        className="form-control"
                        id="inputPassword"
                        name="password"
                        placeholder="Introduce tu contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        className="form-control"
                        id="inputPassword2"
                        name="password2"
                        placeholder="Introduce tu contraseña"
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                    />
                </div>
                <button type="submit" class="btn btn-primary">Registrarse</button>
            </form>
        </div>
    );
} 


export default LoginPage