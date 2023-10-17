Integración de NodeJS con la base de datos

1. Instalación de dependencias

La manera más simple de instalar un módulo de Node.js de forma local es usar el comando npm install en la carpeta en la cual vamos a trabajar

Esto combina dospasos:
Marca la ultima versión del modulo como una dependencia en package.json
Descarga el módulo en tu directorio node_modules, permitiendo usar el modulo cuando se desarrolla de forma local

Carga módulos Node.JS
Utilizamos la función require() de Node.js para cargar cualquier módulo de Node.js que instalemos. También, podemos utilizar esta función para importar archivos locales que implementamos junto con nuestra función.

Dependencia mysql
Una de las maneras más faciles de conectarse a MySQL es mediante el uso del módulo mysql, este maneja una conexión entre NodeJS y el server de MYSQL, se instala con "npm i mysql"

Dependencia util
Esta nos permite convertir ciertas funciones que utilizan callbacks al modelo de promesas asincronico, se instala con "npm i util"
2. Conexión a la BD
Archivo .env y variables de entorno

Comunmente, usamos archivos sin nombre con la extensión .env para almacenar datos sensibles como contraseñas, claves de API, datos de conexión, etc. estos archivos con .env quedan ignorados por el gitignore, lo que hace que esta información sensible no pase al repositorio.

Para utilizar los valores almacenados en este archivo instalaremos una libreria llamada "dotenv" cuya función es incorporar los contenidos de este archivo a las variables de entorno, de esta forma, haciendolas disponibles para la aplicación, mediante process.env.$nombreVariable


Los valores que debemos tener en el .env son:
MYSQL_HOST=localhost
MYSQL_DB_NAME=nombreDB
MYSQL_USER=root
MYSQL_PASSWORD=

MYSQL_HOST: Es el nombre del host de la base de datos a la que nos conectamos
MYSQL_DB_NAME: Nombre de la db a la que n os conectamos
MYSQL_USER: Usuario de MYSQL con el que nos autenticamos
MYSQL_PASSWORD: Contraseña del usuario

Conectandonos a la base de datos
Creamos un archivo llamado bd.js, en el cual utilizamos la función require() para cargar los módulos de mysql y util.

Todas las consultas en la conexión de MYSQL se realizan una tras otra, esto significa que si quiero hacer 10 consultas, y cada consulta tarda 2 segundos, se tarda 20 segundos en completar toda la ejecución. La solución es crear 10 conexiones y ejecutar cada consulta en una conexión diferente. Esto sepuede hacer automaticamente utilizando el cnojunto de conexiones y se ejecutaran todas las 10 consultas en paralelo.

Para esto, la libreria de node.js mysql nos permite crear un pool o grupo de conexiones usando los datos de conexión que cargamos previamente.

Cuando usamos "pool" ya no necesitamos la conexión, podemos consultar directamente al grupo de conexiones y el modulo MYSQL buscara la siguiente conexión libre para ejecutar nuestra consulta.


En un codigo podria ser así:

var mysql= require('mysql');
var util = require('util);

var pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB_NAME
})

pool.query = util.promisify(pool.query);

module.exports = pool;


En este ejemplo, creamos una variable llamda pool, donde guardamos la referencia al grujpo de conexiones, utilizando todoslo s datos del .env

Por ultimo, tomamos el metodo query de pool yl o convertimos al modelo de promesas asincronicas usando la libreria util

Despues de esto solo queda exportar la variable pool para incluirla donde necesitamos hacer uso de la base de datos en nuestra aplicación.


Ejecución de consultas

Debemos requerir el archivo donde creamos la pool, y luego ejecutar la query, por ejemplo:

var pool = require('./bd');

pool.query("select * from alumnos").then(function(resultados){
    console.log(resultados);
});


Un codigo para set, podria ser:

var pool = require('./bd');

var obj = {
    nombre: 'Juan',
    apellido: 'Lopez'
}

pool.query("insert into alumnos set ?", [obj ]).then(function(resultados){
    console.log(resultados);
});


Un update, podria ser:

var pool = require('./bd');

var id = 1
var obj = {
    nombre: 'Juan',
    apellido: 'Lopez'
}

pool.query("update into alumnos set ? where id=?", [obj, id]).then(function(resultados){
    console.log(resultados);
});


Podemos notar como se pasan los parametros, de esa forma, ejecutamos todas las querys.




