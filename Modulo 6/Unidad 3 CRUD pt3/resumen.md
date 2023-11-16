CRUD Parte 3


1. Subida de archivos
   Nuestro sitio web permitirá al administrador subir imagenes a las noevdades que ya tenemos implementadas. Para esto será necesario hacer algunas modificaciones en el código y estructura de base de datos que ya tenemos.

    Necesitaremos primero instalar algunas dependencias nuevas:

    express-fileupload

    Esta dependencia nos permite mediante un middleware capturar y manipular archivos subidos mediante formularios a nuestro sitio web

    Esto lo hacemos con "npm i express-fileupload"

cloudinary

Utilizamos el servicio gratuito de Cloudinary (https://cloudinary.com/) para alojar y manipular las imagenes que se vayan subiendo a las novedades. La dependencia la instalamos así:

"npm i cloudinary"


Para poder utilizar el servicio necesitamos registrarnos en el sitio y, una vez terminado este proceso, copiar el valor de API Environment variable a nuestro archivo .env con el nombre CLOUDINARY_URL

![1700096768818](image/resumen/1700096768818.png)

![1700096781250](image/resumen/1700096781250.png)

Agregar imagenes a las novedades

Paso 1

Incluimos la dependencia de express-fileupload y los configuramos como middleware de nuestra aplicación de express.

Es importante configurar el uso de archivos temporales a fin de que podamos una vez subidos enviarlos al servidor Cloudinary donde quedarán almacenados


Paso 2

Agregamos en la tabla de novedades la columna img_id con el tipo de datos varchar, cantidad de caracteres 250 ytildamos la opción NULL (para permitir la carga de novedades sin imagenes)


Paso 3

En el archivo view/admin/agregas.hbs, agregamos en la etiqueta form el atributo enctype con el valor multipart/form-data

Esto hara que el formulario envie no solo los campos que veniamos usando hasta ahora, sino que tambien los archivos incluidos.

Debajo de la etiqueta input cuerpo agregamos el input del tipo file para poder adjuntar la imagenes y le ponemos de nombre imagen
