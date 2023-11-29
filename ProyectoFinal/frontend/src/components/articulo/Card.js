import { NavLink } from "react-router-dom"

const Card = (props) => {
    const {id, titulo, descripcion, imagen, precio} = props;
    return (
        <div class="col-md-4">
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h5 class="card-title">{titulo}</h5>
            <NavLink to={`/articulos/${id}`} className="btn btn-link">
              <i class="bi bi-three-dots"></i>
            </NavLink>
          </div>
          <div class="card-body text-center">
            <img src={imagen}/>
            <p class="card-text">{descripcion}</p>
          </div>
          <div class="card-footer">
            <p class="card-text">Precio: {precio}</p>
          </div>
        </div>
      </div>
    );
}

export default Card;