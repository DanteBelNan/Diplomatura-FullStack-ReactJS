1. ¿Que es JavaScript?
JavaScript(JS) es un lenguaje de programación que se utiliza principalmente para crear paginas web dinámicas. Una página web dinámica es aquella que incorpora efectos como texto que aparece y desaparece, animaciones, acciones que se activan al pulsar botones y ventanas con mensajes de aviso al usuario. Ténicamente, JS es un lenguaje de programación interpretado, por lo que no es necesario compilar los programas para ejecutarlos.

Como se incluye?
tiene 2 formas:
1- dentro del propio html, con las etiquetas < script >

2- trayendolo como archivo externo, poniendo en el header:
< script type="text/javascript" src="js/codigo.js> </ script >

3- Caracteristicas básicas:
La sintaxis de un lenguaje de programación se define como el conjunto de reglas que deben seguirse al escribir el codigo fuente de los programas para considerarse correctos.
La sintaxis de JS es similar a la de Java y C
Las normas que la definen son las siguientes:
No se tienen en cuenta los espacios en blanco y las nuevas lineas: como sucede con HTML, el interprete de JS ignora cualquier espacio para entenderlo mejor.
Es Case Sensitive
No se define el tipo de las variables (int, bool, etc)
No es necesario terminar cada sentencia con un punto y coma (;) Aunque es conveniente hacerlo.
Se pueden incluir comentarios.

2. Variables
Las variables de los lenguajes de programación siguen una logica similar como a las matematicas, una variable es un elemento que se emplea para almacenar y hacer referencia a un valor.
Gracias a estas es posible crear programas genericos (funcionan bien sin importar los valores ingresados)
Un uso de variables podria ser:
numero_1 = 3;
numero_2 = 1;
resultado = numero_1 + numero_2;

y asi hariamos una cuenta, con variables.

Tipos de variables:
Aunque todas las variables de JS se crean de la misma forma, se les púede asignar distintos tipos devalores:
Numericos
Cadenas de Texto
Arrays


Diferencias entre var let y const

let y const son dos formas de declarar variables en JS, las cuales reducen el ambito de la variable a bloques (con var era la función actual) y no admiten hoisting. Ademas, las variables declaradas con const no pueden ser reasignadas.

Un bloque en JS se puede entender como "lo que queda entre los dos corchetes" ya sean definiciones de funciones o bloqueas if,while,for y loopos similares, si es una variable declarada con let en el ambito global o en el de una función, la variable pertenecera al ambito global o al de la función respectivamente, de forma similar ocurriria con el var.



3. Estructuras de control
Los programas que se pueden realizar utilizando solamente variables y operadores son una simple sucesión lineal de instrucciones básicas. Sin embargo, no se pueden realizar programas que muestren un mensaje si el valor de una variable es igual a un valor determinado y no muestren el mensaje en el resto de casos. Tampoco se puede repetir de forma eficiente una misma instrucción, como por ejemplo, sumar un determinado valor a todos los elementos de un array.
Para realizar este tipo de programas son necesarias las estructuras de control de flujo, que son instrucciones del tipo 
if (condition) then
else then
Si se utilizan estructuras de control de flujo, los programas dejan de ser una sucesión lineal de instrucciones para convertirse en programas inteligentes que pueden tomar decisiones en función del valor de las variables

Estructura if
La estructura más utilizada en JS y en la mayoria de lenguajes de programación es la estructura if. Se emplea para tomar decisiones en función de una condición. Su definición formal es:
if(condicion){
    //ejecutar codigo
}

Esta puede llevar un else luego del corchete que cierra
if(condicion){
    //ejecutar codigo
}
else{

}

Estructura switch:
Funciona como todos los switchs, se ejecuta así:
switch(value){
    case1:
    break;
    case2:
    break;
    default:
}

Operador ternario, es una forma simplificada de los bloques if else, para asignar valor a una variable o decidir la ejecución de un bloque de codigo, su sintaxis es
condicion ? expresion_verdadero : expresion_falso

un ejemplo:
const esMayor = edad >= 21 ? true: false;
const cuota = esMayor ? 500 : 350;

Estructura for
Esta funciona igual que todas las for, la estructura es la siguiente:
for(let i = 0 ; i<5 ; i++){

}

Estructura while
while(condicion){
    
}