const Nav = (props) => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/home">Inicio</a>

        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul class="navbar-nav">


            <li class="nav-item">
              <a class="btn btn-outline-primary my-2 my-sm-0" href="/home/profile">Ver perfil</a>
            </li>
            <li class="nav-item">
              <a class="btn btn-outline-danger my-2 my-sm-0" href="/login/logout">Logout</a>
            </li>

          </ul>
        </div>
      </nav>
    );
}

export default Nav;