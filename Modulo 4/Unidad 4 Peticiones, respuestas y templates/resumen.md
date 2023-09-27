1. Captura de datos del request

Los parametros POST son aquellos que se envian desde la pagina web al servidor sin que sean visibles en la URL.

Lo primero que deberemos de conocer es que los parametros POST no se envian en la URL si no que se envian en el cuerpo de la petición, siendo el tipo de petición recibida por los servidores como application/x-www-form-urlencoded
Si bien el formato de los parametros es el mismo que el utilizado por los parametros GET.

Para conformar esta petición, utilizamos el metodo .post

El objeto req representa la solicitud HTTP y tiene propiedades para la cedena de consulta de la solicitud, parametros, cuerpo, encabezados HTTP, etc. En esta documentación y por convención, el objeto siempre se denomina req (y la respuesta HTTP res), pero su nombre real esta determinado por los parametros de la función de devolución de llamada en la que estas trabajando.

Propiedades del objeto Request

req.body

Contiene pares de datos clave-valor enviados en el cuerpo de la solicitud. De forma predeterminada, no esta definido y se rellana cuando se utiliza middleware de analisis corporal como express.json() o express.urlencoded()


app.post('/saludo', function(req,res){
    var nombre = req.body.nombre || '';
    var saludo = '';
    if(nombre!= ''){
        saludo = "Hola " + nombre;
    }

    res.send(saludo);
})


req.query

A la hora de acceder al parametro GET utilizamos el objeto req.query seguido del nombre que tenia el parametro en el formulario (el cual estaba definido en el atributo name)

app.get('/saludo', function(req,res){
    var nombre = req.body.nombre || '';
})



2. Templates / Vistas / Enviar datos al navegador

Templates con Handlebars

El motor de plantilla (referido como 'motor de vistas' por Express) le permite definir la estructura de documento de salida en una plantilla, usando marcadores de posición para datos que serán llenados. cuando una pagina es generada. Las plantillas son utilizados generalmente para crear HTML, pero también pueden crear otros tipos de documentos.

Express tiene soporte para numerosos motores de plantillas, como es el caso de Handlebars que es una extensión de Mustache.js y es un motor de plantillas muy popular ya que es basado en JavaScript y podemos utilizarlo tanto en lado servidor como en el cliente.

Handlebars nos permite escribir etiquetas HTML y luego dentro con codigo del motor propio podemos definir que imprime del contexto y la forma en que lo hace.

Instalar handlebars

Cuando instalamos express, tambien instalamos el motor de plantillas de las handlebars, ya que queda prolijamente declarado en los archivos.

npx expres-generator --view=hbs

Imprimir elementos del contexto

Nuestra vista genera como resultado datos que debemos mostrar al usuario, dichos datos los pasamos a través del contexto a nuestra plantilla, y aqui es donde los imprimimos. Para imprimir esto simplemente debemos encerrar la variable o el elemento en llaves dobles como lo siguiente:
{{nombre}}

Eso nos lleva a ver el contenido de "nombre" que hayamos definido en nuestra vista, estas dobles llaves llevan al escape de caracteres de forma automatica, de tal manera que no resulte la impresión de código no permitido por omisión del desarrollador.

Ahora, si queremos imprimir un texto sin escapar debemos utilizar triples llaves, esto es así:
{{{nombres}}}


Comentarios:
{{! asi se comenta en Handelbars }}

Renderización de las vistas

Las plantillas se almacenan en el directorio views, y con la extensión .hbs

El metodo res.render() se encarga de decir que vista sera renderizada, por ejemplo:

router.get('/' function(req,res){
    res.render('index');
});

Enviar datos al navegador

Podemos enviar datos al navegador del usuario pasando un objeto como segundo parametro del metodo render(). Dentro de este objeto incluiremos un conjunto de datos definidos como clave-valor donde cualquier tipo de dato es valido

router.get('/plantilla' function(req,res){
    res.render('plantilla', {
        titulo: 'Paises',
        lista: ['Arg', 'Uru', 'Bra'],
        activado: true,
        cantidad: 10
    });
});

Y para llamarlo, por ejemplo, hacemos
< h1 >{{titulo}} </ h1 >

< ul >
 {{#each lista}}
    < li > {{this}} </ li >
 {{/each}}
 </ ul >

 {{#if activado}}
 < p > Como estoy activado, muestro {{cantidad}} </ h3 >
 {{/if}}



 3. Middleware
 Un middleware es una función que se puede ejecutar antes o despues del manejo de una ruta. Esta función tiene acceso al objeto Request, Responde y la función next().

 Las funciones middleware suelen ser utilizadas como mecanismo para verificar niveles de acceso antes de entrar a una ruta, manejo de errores, validación de datos, etc.

 En resumen, las funciones de middleware hacen las siguientes tareas:

* Realizan cambios en la solicitud y los objetos de respuesta.
* Finalizan el ciclo de solicitud/respuestas
* Invocan el siguiente middleware en la pila

Si la función de middleware actual no finaliza el ciclo de solicitud/respuestas debe invocar next() para pasar al control del siguiente middleware, de lo contrario, se cuelga la solicitud, veamos el siguiente ejemplo:

app.use(function(req,res,next){
    if(!req.session.vistas){
        req.session.vistas = {};
    }

    //Buscamos una clave dentro de sesssion.vistas que coincida con la url actual
    //Si no existe, la inicializamos en 1, y si existe, sumamos uno al contador

    if(!req.session.vistas[req.originalUrl]){
        req.session.vistas[req.originalUrl] = 1;
    }else{
        req.session.vistas[req.originalUrl]++;
    }

    next();
})

app.get('/pagina1', function(req,res){
    res.render('pagina', {
        nombre: 'pagina1',
        vistas: req.session.vistas[req.originalUrl]
    })
})


4. Sesiones

Las sesiones son un metodo para hacer que algunas variables esten disponibles en multiples controladores sin tener que pasarlas como parametro. A diferencia de las cookies, las variables de sesión se almacenan en el servidor y tienen un tiempo limitado de existencia.

Para identificar al usuario que generó las variables de sesión, el servidor genera una clave unica que es enviada al navegador y almacenada en una cookie. Luego, cada vez que el navegador solicita otra página al mismo sitio, envia esta cookie con la cual el servidor identifica de que navegador proviene la petición y puede rescatar de un archivo de texto las variables de sesión que se han creado.
Despues de un tiempo sin peticiones por parte de un cliente, estas variables se borran

Una variable de sesión es mas segura que una cookie ya que se almacena en el servidor. Otra ventaja es que no tiene que estar enviandole continuamente como sucede con las cookies.

Uno de los usos mas comunes de las variables de sesión en las aplicaciones web es el proceso de autentiación y autorización de las distintas peticiones que el usuario realiza.

En primer lugar, debemos de conocer brevemente los términos de autentiación y autorización.

Autenticación: proceso que verifica que el usuario es quien dice ser
Autorización: proceso que determina si un usuario puede acceder a un recurso que solicito

Para usar variables de sesión, debemos instalar el modulo express-session en nuestro proyecto e inicializarlo correctamente.

Para insalarlo, hay que ejecutar
npm i express-session


Un codigo en el que se usa esta sesion es:

const session = require('express-session');

app.use(session({
    secret: 'clave',
    resave: false,
    saveUninitialized: true
}));

En este caso, inicializamos el middleware de sesiones pasando como parametro un objeto con las propiedades secret, resave y saveUninitialized. El unico parametro requerido de estos es secret, que sera la cadena de texto o clave que se utilizara para generar el id de sesión que se envia en la cookie al usuario y luego verificar que el mismo no haya sido adulterado por el usuario. Este valor no debe ser sencillo de adivinar, por lo que se recomienda usar cadenas de texto aleatorias de 20 caracteres

A partir de este momento, el objeto res que reciben todos nuestros controladores, contara con una propiedad llamada session, la cual puede ser tanto leida como escrita, en el siguiente ejemplo veremos como lo verificamos

app.get('/ejemplo', function(req,res){
    if(req.session.nombre){
        res.send(req.session.nombre);
    }else{
        res.send("no encontrado");
    }
})

Ahora, veamos un ejemplo mas completo, donde verificamos tambien la existensia de una variable de sesion llamada nombre y en base a esa existensia, mostramos o no un form que permite ingresar un nombre y grabarlo en la sesión.

Asi mismo, damos un link al usuario que permite destruir esta sesion.


app.get('/', function(req,res){
    var conocido = Boolean(req.sesssion.nombre);

    res.render('index', {
        title: 'Sesiones en ExpressJS',
        conocido: conocido,
        nombre: req.session.nombre
    });
});

app.post('/ingresar', function(req,res){
    if(req.body.nombre){
        req.session.nombre = req.body.nombre
    }
    res.redirect('/');
});

app.get('/salir', function(req,res){
    req.session.destroy();
    res.redirect('/');
});

< h1 >{{title}}</ h1 >

{{#if conocido}}
    < p > Hola {{nombre}} < a href="/salir" >salir < /a > </ p >
{{/if}}

{{#unless conocido}}
 < form action="/ingresar" method="post" >
    < input type="text" name="nombre" > < button > ingresar </ button >
 < /form>
