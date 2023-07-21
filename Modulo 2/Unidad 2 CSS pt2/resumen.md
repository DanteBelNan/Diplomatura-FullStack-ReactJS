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

