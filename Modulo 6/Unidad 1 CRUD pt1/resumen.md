1. Listado de novedades

Paso 1
Con nuestra base de datos ya definida en la anterior unidad, vamos a crear la tabla novedades
La cual nos va a servir para listar, modificar, agregar y eliminar novedades

La tabla contara con 4 campos:
id (11 dig)
titulo (250char)
subtitulo (text)
cuerpo (text)

Cundo aceptemos estos valores podemos cargar como minimo 2 noticias a nuestra tabla para poder empezar a trabajar.

Paso 2
Crearemos el archivo models/novedades y creamos un metodo getNovedades que nos de todas las novedades en orden desc

Paso 3
En el archivo routes/admin/novedades.js importamos nuestro modelo de novedades y lo enviamos como variable en el template

Paso 4
Modificamos tambien nuestro template de views/admin/novedades.hbs para que liste las novedades recibidas desde el controlador. Para este fin, primero agregamos el código necesario para mostrar una fila estática (que no refleje datos de la base de datos), la cual podemos usar de ejemplo para ajustar nuestro diseño.

Paso 5
Finalmente, en el archivo view/admin/novedades.hbs agregamos un bucle each de Handlebars para recorrer el array de novedades que recibimos

2. Alta de novedades
Paso 1
En el archivo models/novedades agregamos una nueva función necesaria para dar de alta una novedad

Paso 2
Modificamos nuestro archivo view/admin/novedades.hbs creando un link a una nueva ruta que utilizaremos para mostrar el formulario donde ingresaremos las novedades.

Paso 3
En el archivo routes/admin/novedades.js creamos el nuevo manejador de ruta que mostrara el formulario de alta.

Paso 4
Creamos el archivo view/admin/agregar.hbs con el codigo necesario para el formulario

Paso 5
Denuevo en routes/admin/novedades.js agregamos el controlador neceasrio para capturar los datos, y llevarlos a la base de datos.

Paso 6
Agregamos en la vista un condicional para que muestre un mensaje en caso de error