1. Props
Las propiedades (o props) son valores que se pasan a los componentes para modificar su comportamiento o valor de retorno. Se especifican el elemento de la misma forma que un atributo HTML.

Como vimos previamente los valores de las props pueden ser valores literales como strings pasados entre comillas, expresiones de JavaScript, referencias a funciones u otros componentes.

Ya sea que declares un componente como una función o como una clase, este nunca debe modificar sus props. Considera esta función sum:
function suma(a,b){
    return a+b;
}

Tales funciones son llamadas puras, porque no tratan de cambiar sus entradas, y siempre devuelven el mismo resultado para las mismas entradas.

En cambio, una impura seria
function retiro(cuenta, moto){
    cuenta.total -= monto;
}

React es bastante flexible, pero tiene una sola regla estricta: Todos los componentes de React deben actuar como funciones puras con respecto a sus props.

2. Estado
El estado es el "corazón" de los componentes de React. Es la característica que te permitirá desarrollar aplicaciones mucho más interesantes. Un estado en React es, entonces, unalmacen de datos mutable de componentes y que ademas son autonomos.

Diferencia entre estado y props
Los estados actúan en el contexto del componente y por otro lado, las propiedades, crean una instancia del componente cuando le pasas un nuevo valor desde un componente padre.
Los valores de las propiedades los pasas de padres a hijos, y los valores de los estados los defines en el componente, no se inician en el componente padre.

Estado en clases
class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {date: new Date()};
    }

    render(){
        return (
            < div>
                Hoy es {this.state.date.toLocaleTimeString()}
            </ div>
        );
    }
}

En los componentes de clase el estado se define como una propiedad de la clase llamada state representada por un objeto literal de JavaScript, la cual podemos modificar mediante el uso del método setState que todos los componentes qu eextienden a React.Component tienen.

Estado en componentes funcionales

import React, {useState} from "react";

const App = (props) => {
    const [hoy, setHoy] = useState(new Date());

    return (
        < div>
            Hoy es {hoy.toLocaleDateString()}
        </ div>
    );
}

export default App;

En el caso de componentes funcionales podemos hacer uso del hook useState para definir una variable local a nuestro componente. Dicha variable podría ser modificada con la función asociada a la misma( en este caso, setHoy).


3. Hooks

Hooks son una nueva caracteristica en React 16.8, Estos permiten usar el teclado y otras caracteristicas de React sin escribir una clase.

Los hooks son funciones especiales que permiten conectarnos a distintas caracteristicas de React y permiten su reutilización entre componentes. Por ejemplo, usando componentes de clase, la lógica de manejo de estado sería hooks, podríamos compartir esta funcionalidad con todos los componentes que la necesitaran.

Igualmente, vamos a centrarnos en 2 de los hooks que incluye React que utilizaremos más a menudo,

Ejemplo de useState.
En una clase, inicializamos el estado count a 0, estableciendo this.state a {count 0}

class Example extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        };
    }
}

En un componente funcional, no existe this por lo que no podemos asignar o leer this.state. En su lugar, usamos el hook de useState directamente dentro de nuestro componente


import React, {useState} from 'react';

function Example(){
    const [count, setCount] = useState(0);
}

La llamada useState declara una variable de estado. Nuestra variable se llama count, pero podemos llamarla como queramos, esta es una forma de "preservar" algunos valores entre las llamadas de la función - useState es una nueva forma de usar exactamente las funciones que this.state nos da en una clase, normalmente las variables desaparecen cuando se sale de la función, pero las de estado son conservadas por react

A useState como argumento le pasamos el estado inicial, al contrario que las clases, el estado no tiene porque ser un objeto, pueden ser numeros o strings, si es todo lo que necesitamos, en el ejemplo, fue solo un numero. si quisieramos guardar dos valores distintos, usariamos useState dos veces

useState devuelve una pareja de valores, el estado actual, y una función que lo actualiza, en este caso, serian los equivalentes a this.state.count y this.setState.

Con este conocimiento, si revisamos denuevo:

import React, {useState} from 'react';

function Example(){
    const [count, setCount] = useState(0);
}

Declaramos una variable de estado llamada count y le asignamos a 0. React recordará su valor actual entre re-renderizados, y devolverá el valor más reciente a nuestra función. Si se queire actualizar el valor de count actual, podemos llamar a setCount

useEffect
El hook de efecto te permite llevar a cabo efectos secundarios en componentes funcionales.

4. Eventos
Los eventos en React se manejan similar a en HTML
En react se nombran con camelCase
JSX permite pasar una fuinción como manejador del evento envez cde un string como HTML
en React no podemos devolver false

5. Listar elementos
La forma más comun de listar elementos en React es utilizando el metodo Map, así iterando entre el array

6. Ruteo
Mediante el ruteo podemos hacer que la navegación de la aplicación o sitio hecho en React responda a diferentes urls y pueda navegar entre ellas. Para utilizarlo, deberemos incluir la lib llamada React Router DOM.
Sus principales componentes son
BrowserRouter
Routes
Route
Link