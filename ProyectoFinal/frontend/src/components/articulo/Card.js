const Card = (props) => {
    return (
        <div class="col-md-4">
        <div class="card">
          <div class="card-header d-flex justify-content-between align-items-center">
            <h5 class="card-title">{{titulo}}</h5>
            <a href='home/articulo/{{id}}' class="btn btn-link">
              <i class="bi bi-three-dots"></i>
            </a>
          </div>
          <div class="card-body text-center">
            {{{imagen}}}  
            <p class="card-text">{{descripcion}}</p>
          </div>
          <div class="card-footer">
            <p class="card-text">Precio: {{precio}}</p>
          </div>
        </div>
      </div>
    );
}

export default Card;