1. Funciones
Cuando se desarrolla una aplicación compleja, es muy habitual utilizar una y otra vez las mismas instrucciones. Un script para una tienda de comercio electrónico por ejemplo, tiene que calcular el precio total de los productos varias veces para añadir los impuestos y los gastos de envio.

Cuando una serie de instrucciones se repiten una y otra vez, es mejor usar funciones, para no repetir codigo
su estructura es

function nombrefunction(parametros){
    //procesos
}


2. DOM
El DOM (Document Object Model) es una API definida para representar e interactuar con cualquier documento HTML o XML, este modelo de documento secarga en el navegador web y representa el documento como un arbol de nodos, en donde cada nodo representa una parte del documento.
El DOM es una de las APIs mas usadas en la Web, permite ejecutar codigo en el navegador para acceder e interactuar con cualquier nodo del documento. Estos pueden crearse, moverse o modificarse. Pueden añadirse a estos nodos manejadores de eventos que se ejecutarán/activarán cuando ocurra el evento indicado en este manejador.
El DOM surgió a partir de la implementación de JS en los navegadores, a esta primera versión se la conoce como Legacy DOM.
el grupo WHATWG es el encargado de actualizar DOM

Selectores de elementos
Los selectores api proveen métodos que hacen mas fácil y rapido devolver los elementos del nodo Element del DOM mediante emparejamiento conjunto de selectores. Esto es mucho más rapido que las técnicas anteriores, donde fuera necesario. Por ejemplo usar un loop en un codigo de JS para localizar el item especifico que quieras encontrar.

document.querySelector()
devuelve la primera coincidencia de elemento, si no se encuentra, devuelve null

document.querySelectorAll()
Devuelve en un array todos los elementos que coinciden. si no encuentra, devuelve una lista vacia.

Estos metodos aceptan uno o más selectores, separados por comas entre cada selector para determinar que elemento o elementos deben ser devueltos, por ejemplo, para seleccionar todos los elementos < p > del parrafo de un documento donde la clase de CSS sea tanto "warning" como "note", podemos ejecutar el siguiente codigo:
document.querySelectorAll('p.warning, p.note')

tambien, podemos hacerlo con ids, agregando un # al parametro.

O directamente utilizar
document.getElementById()
que nos trae el elemento que tenga el id especificado.

Tambien, tenemos los metodos getElementsByClassName y getElementsByTagName, que devuelven una lista con los elementos encontrados.

Como crear elementos y agregarlos al DOM
Podemos crear cualquier tipo de elemento usando el metodo
document.createElement(), el cual recibe como parametro la etiqueta del elemento que deseamos crear, y luego, aplicamos al metodo appendChild(), que recibe como parametro el elemento creado, y lo añade como hijo de a quien se lo asignaste.

por ejemplo:
var newDiv = document.createElement('div);
document.body.appendChild(newDiv);

para eliminar elementos del DOM, debemos en ese elemento (luego de obtenerlo con un getElementById o similar) aplicarle un .remove()

innerHTML e innerText
Las propiedades de los elementos DOM innerHTML e innerText hacen referencia al contenido de los nodos. Mientras que innerText permite insertar y manipular contenido sencillo dentro de los nodos, innerHTML nos permite incluir codigo HTML más complejo sin la necesidad de crear los elementos a mano

Atributos de los elementos
Podemos acceder a los atributos de cualquier elemento que hayamos seleccionado simplemente usando el nombre del atributo como propiedad del nodo, Por ejemplo
const miLink = document.getElementsByTagName('a')[0];
console.log(miLink.href)

Aqui estamos obteniendo el valor de a donde dirigue el primer elemento de tag 'a'

Tambien, podemos acceder a su css, con style, tomando el ejemplo anterior, accedemos haciendo
miLink.style
y le ponemos un .atributo, para decidir cual modificar
miLink.style.backgroundColor = '#ff00ff'


3. Eventos
JS permite responder a eventos en el DOM mediante el uso de funciones.
Existen 3 formas distintas de registrar gestores de eventos para un elemento del DOM:
EventTarget.addEventListener

Esta por ejemplo, tiene la siguiente estructura

miLink.addEventListener('click', function(){
    console.log("Se clickeo el link");
}, false);

Tambien, mediante Atributo HTML podemos agregarlo, dandole un onclick al tag, por ejemplo
< a onclick="console.log("clickeado")>
Esta forma no se recomendada, ya que incrementa el tamaño html, dificultando su lectura, y ademas resulta complejo incluir multiples instrucciones

Por ultimo, podemos usar el
miLink.onclick = function(event){
    console.log("test");
};
Pero esta forma solo permite un listener por evento.


4. Metodos de array: map, filter y find

Array.map()

Este metodo permite crear un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de los elementos

Por ejemplo

const numeros = [1,3,8,20];
const dobles = numeros.map(function(num) {
    return num * 2;
})

console.log(dobles); ([2,6,16,40];)

una forma mas simplificada, usando arrow

const dobles = numeros.map(num => num * 2);


Array.filter()
El metodo filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada

const numeros = [1,2,3,4,5,6];
const pares = numeros.filter(num=> num % 2 === 0);
console.log(pares); ([2,4,6];)

Array.find()
El metodo find devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada, de lo contrario, devuelve undefined
const numeros = [1,2,3,4,5,6];
const encontrado = numeros.find(num => num > 4);
console.log(encontrado) (5)


5. Interpolación de strings
Las plantillas de cadena de texto (o template strings) son una caracteristica implementada desde ES6 que nos permite, entre otras cosas, interpolar o intercalar variables o expresiones dentro de nuestras cadenas de texto sin tener que recurrir a la concatenación.

Para hacer uso de esta nueva funcionalidad tenemos que rodear nuestros string con la tilde invertida (`) o expresiones que deberan estar contenidas dentro de la estructura ${}

var edad = 18;

var texto = "Tu edad es de ${edad}";


6. JSON

JSON o JS Object Notation es un formato de texto utilizado para definir estructuras de objetos y listas complejas. Es ampliamente utilizado para el intercambio de datos entre aplicaciones debido a la simplicidad de su implementación y la facilidad de lectura por parte de las aplicaciones y las personas. Es un subconjunto de la notación de objetos literal de Javascript, por lo cual existen múltiples similitudes entre ambos.

Estructura basica
{
    "nombre": "Dante",
    "edad": 20,
    "esEstudiante": true;
    "hobbies": [
        "futbol",
        "programación",
        "League of Legends",
    ]
}

En el ejemplo podemos apreciar lo siguiente:
Todo el objeto esta rodeado por llaves {}.
Los nombres de las propiedades por comillas dobles ".
Los tipos de valores son: texto, numero, bool, array o incluso otros objetos
Las listas o arrays se rodean con corchetes[] y pueden contener cualquiera de los tipos de datos aceptados.


En JS podemos definir lo que se denomina un objeto literal usando una sintaxis similar a JSON. Una de las principales diferencias es que no es necesario utilizar comillas dobles en los nombres de propiedades. El ejemplo anterior podria escribirse en JS así:

const Dante = {
    nombre: "Dante",
    edad: 20,
    esEstudiante: true;
    hobbies: [
        "futbol",
        "programación",
        "League of Legends",
    ]
};

console.log(Dante.nombre); ("Dante")
console.log(Dante.hobbies.length); (3)



7. Destructing y operador spread
La desestructuración (destructing) es una tecnica utilizada para extraer y declarar varias variables a la vez. Podemos aplicar esta técnica a arrays, objetos y otros tipos de estructuras nuevas en ES6 como maps y sets.

const colores = ['#ff0000', '#00ff00' , '#0000ff];

En lugar de hacer:
const rojo = colores[0];
const verde = colores[1];
const azul = colores[2];

podemos hacer

const [rojo, verde, azul] = colores;

Con un objeto, por ejemplo, seria así

const pelota = {
    posicion:{
        x: 150,
        y: 150
    },
    colorDeRelleno:"tomato",
    radio: 25,
}

En vez de hacer:
const pos = pelota.posicion;
const radio = pelota.radio;
const colorDeRelleno = pelota.colorDeRelleno;

podemos hacer:
const {pos, radio, colorDeRelleno} = pelota;

Operador spread (...) sirve para obtener todas las propiedades de un objeto o los elementos de un array. Es de suma utilidad para cuando necesitamos hacer copias de objetos o listas modificando alguno de los valores o agregando nuevos

const vocales = ['a', 'e', 'i'];
const vocalesCompletas = [...vocales, 'o', 'u']

console.log(vocales) (['a','e','i'])
console.log(vocalesCompletas) (['a','e','i','o'])



