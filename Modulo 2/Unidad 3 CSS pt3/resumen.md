1. Transformaciones

La propiedad CSS transform permite manipular el sistema de coordenadas de un elemento usando las funciones de transformación.

rotate
La función CSS rotate() define una transformación que gira un elemento alrededor de un punto fijo en un plano 2D sin deformarlo
El punto fijo alrededor del cual gira el elemento, mencionado anteriormente. también se conoce como el origen de transformación. Se establece de manera en el centro del elemento
transform: rotate(grados);

scale
La función CSS scale() define una transformación que modifica el tamaño de un elemento en el plano 2D. debido a que la cantidad de escalado esta definida por un vector, puede cambiar el tamaño de las dimensiones horizontal y verticalmente hablando
Puede hacer que estos escalados sean distintos, o iguales
scale(sx); <- Crece tanto en x como en y de la misma forma
scale(sx, sy) <- Crece de manera diferente en x e y

translate
La función de CSS translate() recoloca un elemento en el eje horizontal y/o vertical, con el atributo
transform: translate(x,y);

2. Transiciones
Las trancisiones CSS son pequeños cambios en propiedades de la hoja de estilos desencadenados por acontecimientos generados por interacciones del usuario. como por ejemplo cuando el mouse pasa por encima de algo (:hover), el cambio se ve tosco, pero con una transición, estos cambios se ven suaves y de manera progresiva durante un intervalo de tiempo.
Su estructura es la siguiente:
Transition: [propiedad] [duración] [tipo_de_funcion] [delay]
por ejemplo
Transition: all 0.3s ease 0.5s;

propiedad: Especifica el nombre o nombres de las propiedades CSS a las que se deben de aplicar las transiciones. Sólo las propiedades que se enumeran aquí son animadas durante las transiciones; los cambios en el resto de las propiedades suceden de manera instantanea como siempre. En caso que sean varias propiedades se puede usar el valor all
duración: Especifica la duración en la que sucederan las transiciones
tipo de funcion: especifica la curgva cubica bezier que se usa para definir como se computan los valores intermedios para las propiedades
delay: define el tiempo de espera entre el momento en que se cambia de propiedad y el inicio de la transiciíon

Algunas propiedades que pueden ser animadas son:
background-color, background-image, background-position, background-size, border-color, border,radius, color, font-size, opacity, etc

Tipos de funciones:
linear: la animación tiene la misma velocidad de principio a fin
ease: la animación tiene un comienzo lento, luego rapido, y termina lentamente
ease-in: la animación tiene un comiento lento
ease-out: la animación tiene unb final lento.
ease-in-out: La animación tiene un comienzo lento y un final lento
step-start: equivalente a pasos (1, inicio)
step-end equivalente a pasos (1, fin)
steps(int,start|end): Especifica una función paso a paso, con dos parametros, el primero especifica el numero de intervalos en la función, el segundo, el valor de inicio o final, y especifica el punto en el que se produce el cambio de valores dentro del intervalo, si se omite el segundo parametro se le asigna el valor "fin"
cubic-bezier(n,n,n) Define sus propios valores enb la función, con posibilidades booleanas ( 0 y 1)

3. Media queries
Media queries significa "consulta de medios" y son utiles cuando deseamos modificar el aspecto de nuestra pagina basados en la resolución de la pantalla o el ancho del viewport del navegador

se llama de la siguiente manera
@media (min-width: 700px){

}
dentro de esta media, se ejecutaran muchos estilos, que se aplican solo si el width de la pagina es mayor a 700px

podemos apolicar operadores, por ejemplo aqui
@media screen and (max-width: 992px){
    body {
        background-color: blue;
    }
}
si la pantalla es menor a 992px, aplica un cambio de background del body a azul.

Es recomendable hacer los estilos aplicables en el estilo "Mobile First" que vendria a ser, que el estilo por defecto, sea el mobile, y que si la resolución es mayor que la mobile, ahi dar estilos customizados y condicionales.
