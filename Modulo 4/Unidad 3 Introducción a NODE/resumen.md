1. Introducción a NODE

Node.js es un entorno de ejecución para JS construido con el motor de JS V8 de Chrome. NodeJS usa un modelo de operaciones I/O sin bloqueo y orientado a eventos, que lo hace liviano y eficiente.
El ecosistema de paquetes de Node.js, npm, es el ecosistema mas grande de librerias de codigo abierto en el mundo
Fue concebido como un entorno de ejecución de JS orientado a eventos asincronos y esta diseñado pra construir aplicaciones en red escalables.

Node permite además la creación de sitios y aplicaciones web construidos enteramente usando JS, así como también la creación y utilización de un sun fin de herramientas.

Instalación

Node se puede descargar desde sus itio web en https://nodejs.org/es/
La pagina nos ofrece dos versiones, la LTS y la actual.
La principal diferencia entre estas es que la LTS (Long term service) va a recibir actualizaciones y parches de seguridad durante mucho mas tiempo. En cambio, la actual incluye las ultimas caracteristicas del entorno.

Salvo que busquemos instalar Node en un servidor para correr una aplicación web grande, en el uso diario se recomienda edscargar e instalar la versión mas nueva.

Una vez terminada la instalación, podemos verificar que se instalo, poniendo en la consola node -v

Tambien, podemos verificar que el Node Package Manager (npm) este instalado, con npm -v 

Uso basico de Node

En su forma más simple, podemos abrir la consola y escribir solamente node, esto abrira una instancia que nos permitira ir ingresando excepciones de JS que seran evaluadas e impresas en el momento.

Algunos ejemplos de cosas que podemos probar:
* Operaciones matematicas
* Asignaciones de variables
* Definicion de funciones
* Cualquier codigo valido de JS

para salir de la instancia de node escribimos .exit o CTRL + C
Tambien, podemos ejecutar scripts directamente con Node. por ejemplo, creemos un archivo nuevo llamado firstScript.js y pongamosle un codigo, y lo ejecutamos con node firstScript.js


Manejo de paquetes de npm

Inicialización de un proyecto con Node
Para comenzar un proyecto de Node desde cero es necesario correr el script de inicialización "npm init". Este comando debe ser corrido desde la consola, en la carpeta donde deseamos inicializar el proyecto

Podemos responder con enter a todas las preguntas, ynos crea un package.json, donde se guardo toda la información que acabamos de cargar. Así mismo, en ese archivo, es donde el manejador de paquetes de Node, npm, va a ir guardando las dependencias de librerias de nuestro proyecto, como tambien, muchas herramientas que usamos para desarrollarlo


Instalación y uso de librerias con npm

La instalación de librerias se hace mediante el comando npm install. A este debemos indicarle que libreria deseamos que baje e instale y esto lo hara de forma automatica, las librerias las podemos buscar en el sitio https://npmjs.com/
que es el repo central de npm.

A modo de ejemplo, instalamos la libreria "moment", su pagina es https://www.npmjs.com/package/moment
Y para instalarlo, su comando es npm install moment --save
el argumento --save le indica a npm que deseamos que guarde la referencia a la libreria como una dependencia en el archivo package.json
Una vez terminada la instalación, podemos abrir este archivo para verificarlo.


2. Express
Es el framework web mas popular de Node, y es la libreria subyacente para un gran numero de otros frameworks web populares de Node

Este proporciona mecanismos para:
Escritura de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL (rutas).
Integración con motores de renderización de vistas para generar respuestas mediante la introducción de datos en plantillas.
Añadir procesamiento de peticiones middleware adicional en cualquier punto dentro de la ejecución de una petición

A pesar de que Express es en sí mismo bastante minimalista, los desarrolladores han creado librerias para trabajar con:
Envio de mail: nodemailer
Sesiones: express-session
Base de datos: mysql

Instalación
Paso 1
Dentro de un proyecto node, ejecutamos el metodo npm express-generator --view=hbs
El parametro --view es para especificar que queremos usar handlerbars como motor de templates

Paso 2
Instalaremos nodemon, que es el encargado de reiniciar automaticamente el servidor cada vez que cambiemos un archivo, evitandonos tener que hacerlo manualmente

Paso 3
ejecutamos npm i para instalar todas las dependencias que express generator dejo en el archivo packagejson

Paso 4
Modificamos el archivo package, para que el comando start ejecute nodemon en vez de node

Paso 5
en la consola ejecutamos el comando npm start, lo que prende el sitio, yendo a localhost:3000 podemos acceder a el

3. Rutas

En sitios web o aplicaciones web dinamicas que accedan a bases de datos, el servidor espera recibir peticiones HTTP del navegador (o cliente).

Cuando se recibe una petición, la aplicación determina cual es la acción adecuada correspondiente, de acuerdo a la estructura de la URL y a la información indicada en la petición con los metodos POST o GET.

Dependiendo de la acción a realizar, puede que se ncesite leer o escribir en la base de datos, o realizar otras acciones necesarias para atender la petición correctamente.

Express posee metodos para especificar que función ha de ser llamada dependiendo del verbo HTTP usado en la petición (GET,POST,DELETE, etc) y la estructura de la URL("ruta") tambien tiene los metodos para especificar que plantilla ("view") se utilizara.

La definición de una ruta tiene la siguiente estructura:

app.METHOD(PATH,HANDLER)

app es la instancia de express
method el tipo de solicitud http
path la direccion de la ruta
handler es la función que se ejecuta

Siempre se debe requerir a express y app, así:
var express = require('express');
var router = express.Router();

Luego, se crea una ruta

router.get('/', function(req, res, next) {
  res.send('index');
});

la función 'res' coge una petición y una respuesta como argumentos y ejecuta un send en la respuesta, para enviar la cadena de  enviando "index" esta función se la conoce como callback

Metodos de ruta.

Un metodo de ruta se deriva de los metodos HTTP y se adjunta a una clase HTTP

Pueden haber varios metodos para una misma ruta, estos pueden ser: get,post,put,head,delete,options,trace,
copy, lock, mkcol, move, purge, propfind, proppatch, unlock, report, mkactivity,
checkout, merge, m-search, notify, subscribe, unsubscribe, patch, search y connect.

Hay uno especial, que es app.all() que no deriva de ningun metodo http, y este se usa para cargar funciones de middleware en una via de acceso para todos los metodos de solicitud.

por ejemplo, podemos tener uno así

router.all('/secret', function(req, res, next) {
  console.log("ruta secreta");
  next();
});

Vías de acceso de ruta
las vias de acceso de ruta, en combinación con un metodo de solicitud, definen los puntos finales en los que pueden realizarse las solicitudes. Las vías de acceso de ruta pueden ser series, patrones de serie o expresiones regulares.

Estos son algunos ejemplos de vías de acceso de ruta basadas en series.

router.get('/', function(req, res) {
  res.send('root');
});

Esta via de acceso de ruta coincidira con las solicitudes a la ruta raiz, /

router.get('/quienes', function(req, res) {
  res.send('quienes');
});
En cambio, esta otra, lo hara con /quienes


4. Controladores

Manejadores de rutas
Puede proporcionar varias funciones de devolución de llamada que se comportan como middleware para manejar una solicitud. La única excepción es que estas devoluciones de llamada pueden invocar next('route') para omitir el resto de las devoluciones de llamada de ruta. Puede utilizar este mecanismo para imponer condiciones previas en una ruta y, a continuación, pasar el control a las rutas posteriores si no hay motivo para continuar con la ruta actual.

Los manejadores de rutas pueden tener la forma de una función, una matriz de funciones o combinaciones de ambas.

Una función de devolución de llamada individual puede manejar una ruta, por ejemplo:

router.get('/example/a', function(req, res) {
  res.send('Hello from A!');
});

Más de una función de devolución de llamada puede manejar una ruta (hay que especificar el opbjeto next)

Por ejemplo:
router.get('/example/a', function(req, res, next) {
  res.send('Prox funcion');
  next();
}, function (req, res){
    res.send('Funcion 2');
});


Metodos de respuesta:

res.download(): solicita un archivo para descargarlo
res.end(): finaliza la respuesta
res.json(): convierte a JSON
res.jsonp(): convierte a jsonp
res.redirect(): redirige a una solicitud
res.render(): muestra una vista
res.send(): envia una respueta de varios tipos
res.sendFile(): envia un archivo como una secuencia de octetos
res.sendStatus(): establece el codigo de estado de la respuesta y envia su representación de serie como el cuerpo de respuesta


app.route()

Puede crear manejadores de rutas encadenables para unavía de acceso de ruta utilizando app.route(). Como la vía de acceso se especifica en una ubicación, bajamos la tendencia de error

app.route('/test')
    .get(function(req,res){
        res.send('nuevo metodo');
    })
    .post(function(req,res){
        res.send('nuevo metodo');
    })
    .put(function(req,res){
        res.send('nuevo metodo');
    });


express.router

Se utiliza la clase express.Router para crear manejadores de rutas montables y modulare. Una instancia router es un sistema de middleware y direccionamiento completo, por este motivo, a menudo se conoce como una "miniaplicacion"
Creamos un archivo de direccionador denominado "nosotros.js" y lo cargamos en app.js con app.use, incluyendolo antes con un require