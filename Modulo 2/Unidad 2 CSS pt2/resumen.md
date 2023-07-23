1. Pseudo-Clases / Pseudo-elementos

Pseudo-clases
Una pseudoclase CSS es una palabra clave que se añade a los selectores y que especifica un estado especial de unelemento, como por ejemplo :hover

Su estructura es:

selector:pseudoclase { propiedad: valor;}

Algunas pseudoclases son

:first-child -> primer elemento de un grupo de elementos hermanos
:last-child -> ultimo elemento de un grupo de elementos hermanos
:nth-child() -> selecciona elementos basandose en la posición de los hijos, tambien puede usar expresiones, como par e impar.

Pseudo-elementos
Al igual que las pseudo-clases, los pseudo-elementos se añaden a los selectores, pero no describen un estado especial, sino que permiten añadir estilos a una parte concreta del documento, como por ejemplo, :first-line, que selecciona la primera linea del elemento especificado por el selector
Su estructura es
selector::pseudo-elemento{ propiedad: valor; }

Algunos de estos son:
::after crea un pseudo-elemento que es el ultimo hijo del elemento seleccionado, es comunmente agregado para añadir contenido cosmetico a un elemento con la propiedad content. Es en linea(inline) de forma predeterminada
::before crea un pseudo-elemento que es el primer hijo del elemento seleccionado. Es usado normalmente para añadir contenido estetico aun elemento, usando la propiedad content Este elemento se muestra en linea con el texto de forma predeterminada
::first-line aplica estilos a la primera línea de un elemento de bloque. Nótese que la
longitud de la primera línea depende de muchos factores, incluyendo el ancho del
elemento, el ancho del documento y el tamaño de fuente del texto.
::placeholder representa el texto provisional en un elemento < input > o un
elemento < textarea >.


2. Posicionamiento
Los navegadores crean y posicionan de forma automatica todas las cajas que forman cada pagina HTML, no obstante, CSS permite al diseñador modificar la posición en la que se muestra cada caja.
Utilizando las propiedades que proporciona CSS para alterar la posición de las cajas es posible realizar efectos muy avanzados y diseñar estructuras de paginas que de otra forma no serian posibles

El estandar de CSS define cinco modelos diferentes para posicionar una caja:

Posicionamiento normal o estatico (static): se trata del posicionamiento que utilizan los navegadores si no se indica lo contrario.
Posicionamiento relativo (relative): Variante del posicionamiento normal que consiste en posicionar una caja segun el posicionamiento normal y despues desplazarla respecto a su posición original
Posicionamiento absoluto (aboslute): la posición de una caja se establece de forma absoluta respecto de su elemento contenedor y el resto de elementos de la pagina ignoran la nueva posición del elemento
Posicionamiento fijo (fixed): variante del psoicionamiento absoluto, que convierte la caja en un elemento inamovible, de forma que su posición en pantalla siempre sera la misma independientemente del resto de elementos y de si el usuario scrollea en el navegador.


3. Flexbox
Las cajas flexibles, comunmente llamadas flexbox, fueron diseñadas como un modelo unidimensional de layout, y como un metodo que pueda ayudar a distribuir el espacio entre los items de una interfaz y mejorar las capacidades de alineación

Conceptos:
Para comenzar a utilizar flexbox, lo primero que debemos hacer es conocer algunos de los elementos basicos de este nuevo esquema, que son los siguientes:

contenedor: Existe un elemento padre que es el contenedor, que tendra en su interior muchos items flexibles y adaptables
item: Cada uno de los hijos flexibles del contenedor
Eje principal: los contenedores flexibles tendran una orientación principal especifica, por defecto, es en horizontal(una fila)
Eje secundario: de la misma forma, los contenedores flexibles tendran una orientación secundaria, la cual es perpendicular a la principal.

Propiedad display:
Controla la forma en la que se muestra el contenedor flexbox

flex: establece un contenedor de items flexible en bloque
inline-flex: establece un contenedor de items flexibles en linea (el largo del contenedor se ajusta a los items, al contrario del flex, que si los items no llenan el contenedor, queda un espacio vacio)

Propiedad flex-direction:
row: establece la dirección del eje principal en horizontal
row-reverse: establece la dirección del eje principal en horizontal (invertido)
column: establece la dirección del eje principal en vertical
column-reverse: establece la dirección del eje principal en vertical (invertido)

Propiedad flex-wrap
Controla el desbordamiento del contenedor cuando los items superan el ancho del mismo
nowrap: establece los items en una sola linea (no permite desborde del contenedor)
wrap: establece los items en modo multilinea (permite que se desborde el contenedor)
wrap-reverse: establece los items en modo multilinea pero en dirección inversa

Propiedades de alineación de items
La propiedad justify-content alinea los elementos en el eje principal
La propiedad align-content alinea los elementos en el eje secundario cuando el contenedor es multilinea
La propiedad align-items alinea los elementos en el eje secundario cuando el contenedor tiene una linea unica

Estas son algunas de las caracteristicas mas usadas
flex-start: Los elementos se distribuyen desde el inicio de la linea
flex-end: Los elementos se distribuyen al final de la linea
center: Los elementos se centran a lo largo de la linea
space-between: los elementos se distribuyen uniformemente en la linea, el primer elemento esta al principio de la linea, y el ultimo al final
space-around: Los elementos se distribuyen uniformemente en la linea con igual espacio a su alrededor. Tenga en cuenta que visualmente los espacios no son iguales, ya que todos los elementos tienen el mismo espacio en ambos lados
space-evenly: Los elementos se distribuyen de manera que el espacio entre dos elementos (y el espacio hasta los bordes) sea igual