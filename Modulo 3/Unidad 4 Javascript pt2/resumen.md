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