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

