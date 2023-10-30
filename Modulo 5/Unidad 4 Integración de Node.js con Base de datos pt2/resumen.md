Utilización de proyecto de modulo 4 unidad 4

1. Creación de login
Creemos una base de datos llamada cerveceria

Esta tendra una tabla llamada usuarios, con 3 campos
id
usuario
password

Recordemos que la password debera encriptarse luego con la funcion MD5.

Una vez finalizamos la creación de nuestra base de datos, vamos a instalar dependencias para crear login en nuestro proyecto.

Instalamos express-session, mysql, util y md5

A excepcion de md5, el resto ya fueron utilizadas en ejemplos previos


Paso 1
Creamos el archivo routes/admin/login.js

Paso 2
En app.js, importamos el manejador de rutas y lo configuramos para que se encargue de las rutas comenzadas con admin/login

Paso 3

Creamos el archivo views/admin/layout.hbs, el cual sera el nuevo layout base para nuestro administrador

Paso 4
Creamos el archivo views/admin/login.hbs que albergara el formulario de login para acceder al panel

Paso 5
Para este paso, es importante que tengamos configurados los archivos .env y bd.js
Ya que vamos a empezar a trabajar con mas archivos y a realizar mas operaciones involucrando a la base de datos y dichas operaciones se utilizaran en varios archivos. vamos a emplear el concepto de modelos de arquitectura MVC

Los modelos serán archivos donde crearemos funciones que nos permitan consultar, crear, actualizar o eliminar un tipo de dato en particular. De esta forma, al importar o requerir estas funciones en otros archivos, como nuestros controladores, tendremos acceso a la información sin necesidad de tipear varias veces lo mismo.

El primer archivo a crear es models/usuarios.js

En ese archivo se utiliza try catch, y trae un usuario por nombre y contraseña en caso de encontrarlo, sino tira error

Paso 6
En el archivo routes/admin/login.js agregamos el controlador necesario para capturar los datos enviados por el formulario.
Tambien, vamos a importar el modelo de usuarios para utilizar la funcion que creamos.

Ahi bien podemos ver que toma los valores enviados por el formulario, los envia como query, y si obtiene resultado, logea, redirigiendo a admin/novedades, en caso de no obtener resultado, va a admin/login.hbs, en el cual incluimos un codigo de error

Paso 7
Creamos el archivo routes/admin/novedades.js para mostrar el template correspondiente. Donde damos el valor del usuario al controlador.

Paso 8
Creamos la vista para novedades en views/admin/novedades.hbs e ingresamos contenido


2. Logout
Paso 1
En el archivo routes/admin/login.js