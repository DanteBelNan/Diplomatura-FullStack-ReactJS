const Ver = (props) => {
    return (
        <div class="container-fluid">
        <div class="row justify-content-center align-items-center vh-100">
          <div class="card col-md-6">
            <div class="card-header">
              <h5 class="card-title">{{articulo.titulo}}</h5>
            </div>
            <div class="card-body text-center">
              {{{imagen}}}
              <p class="card-text">{{articulo.descripcion}}</p>
            </div>
            <div class="card-footer">
              <p class="card-text">Precio: {{articulo.precio}}</p>
            </div>
          </div>
        </div>
    
        {{#eq rol 'admin'}}
            <div class="row mt-3">
                <div class="col-md-6 offset-md-3 text-center d-flex justify-content-center">
                    <a class="btn btn-outline-warning my-2 my-sm-0 mr-2" href="/admin/modificarArticulo/{{articulo.id}}">Modificar Articulo</a>
                    <form action="/admin/eliminarArticulo/{{articulo.id}}" method="post">
                        <button type="submit" class="btn btn-outline-danger my-2 my-sm-0 ml-2">Eliminar Articulo</button>
                    </form>
                </div>
            </div>
        {{/eq}}
      </div>
    
    );
}

export default Ver;