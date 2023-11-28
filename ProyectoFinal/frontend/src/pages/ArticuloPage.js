const ArticuloPage = (props) => {
    return (
        <div class="container-fluid">
        <div class="row justify-content-center align-items-center vh-100">
          <div class="card col-md-6">
            <div class="card-header">
              <h5 class="card-title">{props.titulo}</h5>
            </div>
            <div class="card-body text-center">
              
              <p class="card-text">{props.descripcion}</p>
            </div>
            <div class="card-footer">
              <p class="card-text">Precio: {props.precio}</p>
            </div>
          </div>
        </div>
    
            <div class="row mt-3">
                <div class="col-md-6 offset-md-3 text-center d-flex justify-content-center">
                    <a class="btn btn-outline-warning my-2 my-sm-0 mr-2" href="/admin/modificarArticulo/{{articulo.id}}">Modificar Articulo</a>
                    <form action="/admin/eliminarArticulo/{{articulo.id}}" method="post">
                        <button type="submit" class="btn btn-outline-danger my-2 my-sm-0 ml-2">Eliminar Articulo</button>
                    </form>
                </div>
            </div>

      </div>
    );
} 

export default ArticuloPage