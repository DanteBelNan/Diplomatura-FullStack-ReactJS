import { NavLink } from "react-router-dom"

const Nav = (props) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" className="navbar-brand">Inicio</NavLink>

        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">

            <li class="nav-item">
              <NavLink className="btn btn-outline-primary my-2 my-sm-0" to="/profile">Ver perfil</NavLink>
            </li>

          </ul>
        </div>
      </nav>
    );
}

export default Nav;