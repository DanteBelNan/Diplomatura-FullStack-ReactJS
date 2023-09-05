1. Introducción
ReactJS es una libreria JS de código abierto enfocada en la visualización que nos permite el desarrollo de interfaces de usuario de forma sencilla mediante componentes interactivos y reutilizables.
React esta basado en un paradigma de programación orientada a componentes en el que cada componente es una pieza con la que el usuario puede interactuar. Estas piezas se crean usando una sintaxis llamada JSX, que permite escribir HTML (opcionalmente CSS) dentro de objetos JS

Estos componentes son reutilizables y se combinan para crear componentes mayores hasta configurar una web completa.

Esta es la forma de tener HTML con toda la funcionalidad de JS y el estilo grafico de CSS centralizado y listo para ser abstraido y usado en cualquier otro proyecto.


2. JSX
JSX es una extensión de sintaxis de JS, que podemos observar se parece a HTML.
Uno de sus beneficios es mejorar la legibilidad del codigo, mejorar la experiencia del desarrollador y reducir la cantidad de errores de sintaxis, ya que no es necesario repetir tantas veces el mismo codigo, Otro beneficio es el de poder integrar a otros miembros de tu equipo que no sean programadores en el desarrollo. Es "facil" leer el codigo si ellos estan acostumbrados a leer HTML.

React no requiere usar JSX, pero la mayoria de la gente lo encuentra util como ayuda visual cuando trabajan con interfaz de usuario dentro del codigo JS. Esto tambien permite que React muestre mensajes de error o advertencia más utiles.

Insertando expresiones en JSX

const name = 'Josh Perez';
const element = < h1 > Hello, {name} </ h1>;

ReactDOM.render(
    element,
    document.getElementById('root')
)

EN este ejemplo, declaramos una variable llamada name, y la usamos dentro del JSX envolviendola dentro de llaves.

function formatName(user){
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

const element = (
    < h1>
    Hello, {formatName(user)}!
    </ h1>
)

ReactDOM.render(
    element,
    document.getElementById('root')
)

En el ejemplo insertamos el resultado de llamar a la función de JavaScript fortmatName(user) dentro de un elemento h1


Especificando atributos con JSX
podemos utilizar comillas para especificar string literales como atributos
const element = < div tabIndex="0"> </ div>

También puedes usar llaves para insertar una expresión JS en un atributo

const element = < img src={user.avatarUrl}> </ img>

Podemos usar comillas rodeando llaves cuando insertes una expresión JS en un atributo. Debemos utilizar comillas (para los valores de los strings) o llaves (para las expresiones) pero no ambas en el mismo atributo.

Advertencia:
Dado que JSX es más cercano a JS que a HTML, React DOM usa la convención de nomenclatura camelCase en lugar de nombres de atributos HTML
por ejemplo, class se vuelve className en JS, tabindex se vuelve tabIndex.

3. create-react-app

create-react-app configura tu ambiente de desarrollo de forma que puedas usar las últimas caracteristicas de JS, brindando una buena expreiencia de desarrollo y optimizando tu aplicación para producción. Necesitar tener node >= 10.16v y npm >= 5.6v instalados en mi computadora.

Para crear el proyecto hago
create-react-app $name
cd $name
npm start

create-react-app no se encarga de la logica de backend o de bases de datos, tan solo crea un flujo de construcción para frontend de manera que lo pueda usar con cualquier backend.


4. Componentes
Componentes de clase vs componentes de función

Los componentes de React pueden definirse de dos formas distintas: como funciones o como clases.

class Saludo extends React.Component{
    render(){
        return < h1> Hola, {this.props.name} </ h1>
    }
}

function Saludo(props){
    return < h1> Hola, {props.name}</ h1>
}

Ambos componentes son equivalentes, sin embargo, la forma más sencilla y utilizada es la de la función

El ejemplo de función de un componente de React válido porque acepta un solo argumento de objeto "props" (proviene de propiedades) con datos y devuelve un elemento de React. Llamamos a dichos componentes "funcionales" porque literalmente son funciones de JS

Creación de componentes
Como vimos anteriormente podemos definir un componente usando una simple función, y su valor de retorno sera el contenido HTML que se muestre. Así mismo podemos incluir todos los componentes que necesitamos dentro del valor de retorno deotros componentes. Este concepto se llama composición

function Saludo(props){
    return < h1> Hola, {props.name}</ h1>
}

function App(){
    return (
        < div>
        < Saludo name="Sara" />
        < Saludo name="Petra" />
        < Saludo name="Eren" />
        </ div>
    );
}

Por lo general, las aplicaciones de React nuevas tienen un único componente App en lo más alto. Sin embaro, si se integra React en una aplicación existente, se podría empezar de abajo hacia arriba con un pequeño componente Button y poco a poco trabajar el camino a la cima de la jerarquia de la vista.

Es importante que en cada archivo en el que vayamos a definir un componente(ya sea clase o funcion) recordemos importar React al principio de nuestro archivo js y exportarlo al final

import React from 'react'

cont MiComponente = (props) =>{
    return ... code ...
};

export default MiComponente;

Asumiendo que este componente se encuentre en la carpeta componentes, dentro del archivo MiniComponente.js podríamos importarlo dentro de otro componente en la misma carpeta de la siguiente forma:

import React from 'react
import MiComponente from './MiComponente'

cont OtroComponente = (props) =>{
    return ... code ...
};

export default OtroComponente

En caso de ser archivos locales usamos siempre la ruta relativa desde el archivo en el que estamos escribiendo. No es necesario agregar la extension de js para importarlos.