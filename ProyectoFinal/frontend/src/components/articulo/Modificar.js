const Modificar = (props) => {
    return (
        <div class="container" style="margin:100px auto;">
            <div class="row">
                <div class="col-6 offset-3">
                    <h4>Modificar Articulo</h4>
                    <form action="/admin/modificarArticulo/{{articulo.id}}" method="post" enctype="multipart/form-data">
                        <div class="mb-3 row">
                            <input type="text" class="form-control" placeholder="Titulo" name="titulo" value="{{articulo.titulo}}"/>
                        </div>
                        <div class="form-group">
                            <p>
                                <label>Imagen: <input class="form-control" type="file" name="imagen" id="imagen"/></label>
                            
                            </p>
                            <p>
                                <label><input type="checkbox" name="img_delete" id="img_delete" value="1"/> Eliminar imagen actual?</label>
                                <input type="hidden" name="img_original" value="{{articulo.img_id}}"/>
                            </p>
                        </div>
                        <div class="mb-3 row">
                            <input type="text" class="form-control" placeholder="Descripcion" name="descripcion" value="{{articulo.descripcion}}"/>
                        </div>
                        <div class="mb-3 row">
                            <input type="number" class="form-control" placeholder="Precio" name="precio" id="precio" min="0" value="{{articulo.precio}}"/>
                        </div>
                        <button type="submit" class="btn btn-primary">Guardar</button>                               
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Modificar;