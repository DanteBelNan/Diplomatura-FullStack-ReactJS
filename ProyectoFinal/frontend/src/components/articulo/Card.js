import { NavLink } from "react-router-dom"

const Card = (props) => {
    return (
        <div class="col-md-4">
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h5 class="card-title">{props.titulo}</h5>
            <NavLink to="home/articulo/{{props.id}}" className="btn btn-link">
              <i class="bi bi-three-dots"></i>
              test
            </NavLink>
          </div>
          <div class="card-body text-center">
            
            <p class="card-text">{props.descripcion}</p>
          </div>
          <div class="card-footer">
            <p class="card-text">Precio: {props.precio}</p>
          </div>
        </div>
      </div>
    );
}

export default Card;