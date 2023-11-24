1. Despliegue del sitio en Heroku
   Heroku es uno de los PaaS (Platform as a Service) más utilizados en la actualidad en entornos empresariales por su fuerte enfoque en resolver el despliegue de una aplicación. Además te permite manejar los servidores y sus configuraciones, escalamiento y la administración.
   podemos ver su sitio, servicios y costos en https://www.heroku.com/.

Para subir nuestros archivos necesitamos:

Una cuenta en heroku

Tener el proyecto en un repositorio git local

Descargar la siguiente herramienta:

https://devcenter.heroku.com/articles/heroku-cli#download-and-install


Despliegue del backend

Paso1

escribimos heroku login en la consola, sin importar donde estamos parados, ya que se configura para toda la computadora

Paso 2

En el directorio de la aplicación ahora, escribimos heroku create. Este comando registra la aplicación en el servicio de Heroku y le asigna un nombre al azar. Ademas agrega como remote de git el servidor que corresponda a nuestra aplicación

Paso 3

Para subir la aplicación solo nos aseguramos de tener todo commiteado localmente y ejecutar

git push heroku master

Al finalizar el proceso, en caso de ser exitoso nos muestra un link a nuestra aplicación.


Pasos para trabajar con la BD

Para implementar bases de datos MySQL en Heroku vamos a utilizar uno de los tantos plugins que ofrece. Para agregar cualquiera de ellos a nuestro servicio será necesario tener validad una tarjeta de crédito dentro de los datos de perfil.


Paso 1

Dentro del panel de administración de Heroku buscamos nuestra aplicación creada anteriormente y hacemos click en configure Add-ons.


En el buscador escribimos mysql y seleccionamos el servicio de JawsBDMySQL


Paso 2

Vamos a configurar las variables de entorno de nuestra aplicación para que se conecte a la base de datos que acabamos de dar de alta. Para esto vamos a la opción Settings y clickeando en Reveal Config Vars veremos la ruta a la base de datos, la cual debemos descomponer en valores que igualen a los que usabamos en nuestro archivo .env local.
