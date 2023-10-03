1. ¿Que son las bases de datos?

Una base de datos es un conjunto de datos pertenecientes a un mismo contexto y almacenados sitematicamente. Se pueden clasificar segun la variabilidad de los datos almacenados:

*Estaticas: estas son solo de lecturas, se utilizan primordialmente para almacenar datos historicos
*Dinamicas: La inofmración es modificada, agregada, eliminada, etc.

Bases de datos relacionales
Este es el modelo mas utilizado en la actualidad para modelar problemas reales y administrar datos dinamicamente

En este modelo, el lugar y la forma en que se almacenan los datos no tienen relevancia 
Este tiene la considerable ventaja de que es facil de entender y utilizar

Caracteristicas:
Se compone por varias tablas o relaciones
No pueden haber dos tablas con el mismo nombre
Cada tabla tiene su conjunto de registros o filas
Cada registro representa un objeto del mundo real
No pueden existir dos campos o columnas con el mismo nombre en la misma tabla
Los valores almacenados en una columna son de un mismo tipo de dato
Todas las filas de una misma tabla poseen el mismo numero de campos
No se considera el orden en que se almacenan los registros de las tablas.
No se considera el orden en que se almacenan las tablas en la DB
La información puede ser recuperada o almacenada mediante querys, que ofrecen una amplia flexibilidad y poder para administrar la información.

2. Tablas
Las tablas, en DB, son el tipo de modelados de datos donde se guardan los datos recogidos por un programa. Su estructura general se asemeja a la vista general de un programa de tablas.

Las tablas se componen de dos estructuras:
Campo o columnas: Nombre de la columna, es unica y tiene un tipo de dato asociado
Registro: es el valor que le corresponde a cada fila de la base de datos.

3. Columnas
Una columna, campo o atributo es cada uno de los valores unicos que proporciona la estrctura en la cual se descomponen las filas (registros o tuplas)

Los datos de cada campo pueden ser de diferentes tipos, pero solo uno por columna, numericos,alfanumericos, booleanos, de texto, etc.

Para evitar la inconsistencia de estructura de campos al diseñarla, se deben seguir las formas normales, sobre todo en bases de datos de gran tamaño

4. Registros

Un registro (fila) representa un objeto unico de datos implicitamente estructurado en una tabla.

Cada fila de una tabla representa un conjunto de datos relacionados, y todas las filas tienen la misma estructura

5. Tipos de datos

Con formato string:
char: Textos de longitud fija, si se le asigna 50 espacios de memoria, y solo se ocupan 5, los otros 45 quedan desperdiciados
varchar: Textos de longitud variable, con el ejemplo anterior, no se desperdician
text: graba textos muy extensos, de hasta 2gb

Con formato numerico:
int: solo permite valores positivos o negativos sin decimal
decimal: guarda numeros con decimales
float: guarda con coma flotante


Con formato fechas:
date: almacena una fecha con año, mes y dia, con rango entre 1/01/1000 al 31/12/9999
datetime: igual que date pero con horas minutos y segundos.

6. Relaciones

Claves primarias: Son campos llave que identifican univocamente registros que estan dentro de la tabla. Solo puede existir una clave primaria por tabla y ningun campo de dicha clave puede contener valores null

Claves foraneas
Son campos llave que permiten referencias a un registro que esta en otra tabla, necesitan no ser claves unicas.

