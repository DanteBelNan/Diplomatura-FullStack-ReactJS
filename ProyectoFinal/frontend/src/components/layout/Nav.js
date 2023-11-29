import { NavLink } from "react-router-dom";
import { useUser } from '../../contexts/UserContext';

const Nav = (props) => {
    const { user } = useUser();

    const userId = user ? user.user.idUsuario : null;
    console.log("El usuario es:", JSON.stringify(user, null, 2));

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to="/" className="navbar-brand">Inicio</NavLink>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="btn btn-outline-primary my-2 my-sm-0" to={`/profile/${userId}`}>Ver perfil</NavLink>
                        <NavLink className="btn btn-outline-primary my-2 my-sm-0" to={`/crearArticulo`}>Crear Articulo</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
