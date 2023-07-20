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