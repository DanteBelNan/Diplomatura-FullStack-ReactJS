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