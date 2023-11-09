1. Eliminar novedades

En el archivo models/novedades agregamos la función necesaria para eliminar la novedad según el id.

La función delete Novedad ById recibe como parámetro el id de la novedad y ejecuta el código necesario para eliminarla de la base de datos.

En el archivo routes/admin/novedades.js agregamos el controlador que sera el encargado de capturar las rutas de eliminación y llamara a la función que acabamos de crear en el modelo, pasando como parametro el valor que reciba por url.

Modificamos el archivo views/admin/novedades.hbs e incluimos un link a nuestro nuevo controlador de eliminar

2. Modificar novedades

En el archivo views/admin/novedades incluimos un link a la ruta de modificar

Luego, en el archivo models/novedades agregamos dos funciones nuevas, una para obtener una novedad unica de la base de datos utilizando el id de la misma para seleccionarla, y otra que se encargara de modificarla.


En el archivo routes/admin/novedades creamos el controlador de ruta necesario que permite imprimir el fromulario de modificación.
Esta ruta tiene la particularidad, al igual que la de eliminar, de recibir como parametro el id de la novedad. Este id se utiliza para llamar a la función previamente creada y pasar la novedad seleccionada al template.

Ahora, creamos una vista en views/admin/modificar.hbs donde armamos el formulario para modificar. Este es muy similar al de agregar, con la salvedad de que todos los campos ya vienen cargados.

En el archivo routes/admin/novedades creamos el controlador encargado de recibir los datos del formulario y pasarlos a la función de model para efectuar la modificación de la novedad en la base de datos.
En caso de éxito redirigimos al usuario al listado de novedades, de lo contrario enviamos una variable de error y el mensaje escribiendo el mismo