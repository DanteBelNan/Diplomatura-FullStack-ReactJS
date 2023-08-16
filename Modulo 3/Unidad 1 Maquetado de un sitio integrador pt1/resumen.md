1. Armado de estructura principal

En este tema se comienza con el armado de un sitio complejo que incluye las caracteristicas mas utilizadas comunmente.
Empezaremos creando la estructura basica de nuestros documentos html e iremos incorporando las distintas secciones

Paso 1
Creamos la carpeta TransportesX y dentro de ella las carpetas img,css y js

Paso 2
Creamos un archivo nuevo: index.html
completamos la etiqueta < title >

Paso 3
Descargamos el archivo normalize.css de la url
https://necolas.github.io/normalize.css/
lo guardamos en css

Paso 4
Creamos el archivo transportes.css en la carpeta css y lo vinculamos al documento.

Paso 5 
incluimos la fuente open sans en sus variantes de 300,400 y 700, estas pueden ser obtenidas desde 
https://fonts.google.com

Paso 6
Armamos los elementos que se repiten en todo el sitio: < header> < nav> < main> y < footer>

En el header colocamos la etiqueta img para el logo y la etiqueta h1 para el titulo
En el nav armamos la botonera usando una lista desordenada y colocamos todos los divs
Luego, colocaremos un main, en el que momentaneamente no tendremos nada
Por ultimo un footer, que tendra los creditos

Paso 7
En transportes.css aplicamos cambios (verlos)

Paso 8
Para destacar la sección actual, agregamos la clase activo al elemento que vincula a la pagina actual y le damos estilo al mismo en transportes.css

El ancho del contenido situadio dentro de las etiquetas de header, nav y main habra que limitarlos por un div de clase holder, a excepción de main, a la cual le agregaremos la clase holder sin un div como intermediario y a este le damos un max-width de 960px y un margin de 0 auto

2. Armando la sección Home
En este tema comenzaremos con el armado de la sección Home. Esta sección cuenta con una imagen principal y un contenedor de dos columnas, donde incluiremos un texto de bienvenida al sitio yun modulo de testimonios

Paso 1
Situamos los elementos que seran el contenido de la pagina index.html

Paso 2
En el archivo transporte.css, escribimos la regla para los h2 que se utilizaran en el sitio y el resto de estilos de la pagina

3. Armado de la sección Nosotros
A partir de ahora, esta base que hicimos en index.html la clonaremos y cambiaremos su nombre por cada $seccion.html, en este caso, nosotros.html, acordandonos tambien de cambiar en el nav, el que esta activo

Paso 1
Situamos los elementos que seran el contenido de la pagina.
Esta sección cuenta con dos div principales, uno para historia donde incluiremos textos, y otro para staff
En el div con la clas staff, colocaremos un div con la clase personas que va a contener 5 divs de persona, donde cada uno de ellos tendra una foto, un encabezado y una breve descripción

Paso 2
En transportes.css aplicamos estilos

4. Armado de la sección Servicios

Paso 1
Situamos los elementos que serán el contenido de la pagina de servicios.html
Esta sección cuenta con 4 divs para los servicios que tendran un titulo, una foto y una breve descripción

Paso 2
Aplicamos los respectivos estilos a la pagina