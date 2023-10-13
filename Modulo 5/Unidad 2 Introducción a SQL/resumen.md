1. ¿Que es SQL?

SQL (Structured Query Languaje) es un lenguaje declarativo de acceso a bases de datos relacionales que permite especificar diversos tipos de operaciones en ellas.

Este explota la flexibilidad y potencia de los sistemas relacionales y permite así gran variedad de operaciones.


Características generales de SQL

Es un lenguaje declarativo de "alto nivel" o "de no procedimiento" que, gracias a su fuerte base teórica y su orientación al manejo de conjuntos de registros permite una alta productividad en codificación y la orientación a objetos.

De esta forma, una sola sentencia puede equivaler a uno o más programas que se utilizarian en un lenguaje de bajo nivel orientado a registros.

SQL también tiene las siguientes caracteristicas:
*Lenguaje de definición de datos: EL LDD de SQL proporciona comandos para la definición de esquemas de relación, borrado de relaciones y modificaciones de los esquemas de relación.
*Lenguaje interactivo de manipulación de datos: El LMD de SQL incluye lenguajes de consultas basado tanto en algebra relacional como en calculo relacional de tuplas
*SQL incorporado y dinamico: Esto quieredecir que se pueden incorporar instrucciones de SQL en lenguajes de programación tales como C++,JAVA,PHP,COBOL,PASCAL,etc..
*Autorización: El LDD incluye comandos para especificar los derechos de acceso a las relaciones y a las vistas.


Tipos de datos:
*VARCHAR: es un string y se especifica su tamaño maximo
*INT
*DATE: guarda una fecha
*TIME: guarda tiempo en dia horas minutos y segundos.


2. Consultas

Los mandatos de SQL se dividen en tres grandes grupos diferenciados
*DDL(Data Definition Language): es el encargado de la definición de bases de datos, tablas, vistas e indices entre otros.
*DML(Data Manipulation Language): cuya misión es la manipulación de datos. A través de el podemos seleccionar, actualizar insertar y eliminar datos.
*DCL(Data Control Languaje) Es el encargado de la seguridad de la base de datos, en todo lo referente al control de accesos y privilegios entre los usuarios


Para crear una base de datos en una query, utilizamos CREATE DATABASE $NOMBREDB

Para crear una tabla dentro de la database, usamos
CREATE TABLE '$nombreTB' (nombreCampo, tipoDato, nombreCampo2,tipoDato2, etc...)

Para seleccionar datos de una tabla usamos
SELECT $nombreColumna
FROM $nombreTabla

Para seleccionar todos los datos de una tabla usamos
SELECT *
FROM $nombreTabla

Podemos agregar condiciones, similares a un if, con un where
SELECT *
FROM $nombreTabla
WHERE $nombreColumna $operator $valor

Podemos a los where anidarles AND y OR, de la siguiente manera
SELECT *
FROM $nombreTabla
WHERE $nombreColumna $operator $valor
AND $nombreColumna $operator $valor
OR $nombreColumna $operator $valor

Los operadores que se pueden usar en Where son
*=: igual a
*<>: diferente a
*>: mayor a
*<: menor a
*>=: mayorigual a
*<=: menorigual a
BETWEEN: entre cierto rango
LIKE: Busca coincidencia entre texto, puede buscarse que sea identico, o de las siguientes maneras:
SELECT *
FROM $nombreTabla
WHERE $nombreColumna LIKE 'ma%'

Aca le pedimos que el nombrecolumna TERMINE con ma

si ponemos '%ma'
le pedimos que el nombre columna comience con ma

y si ponemos '%ma%' le pedimos que solamente lo contenga.


Consultas auxiliares
ORDER BY
Especifica el criterio segun cual ordena los registros que te trae, por ejemplo
SELECT $nombreColumna
FROM $nombreTabla
ORDER BY $nombreColumna ASC
tambien, podemos reemplazar el DESC.

LIMIT
Se utiliza para limitar la cantidad de datos que puede traernos, y desde donde empieza a traernos.
SELECT $nombreColumna
FROM $nombreTabla
LIMIT $dondeEmpieza, $cantFilas


3. Agregar modificar y eliminar registros.

INSERT
INSER INTO $nombreTabla
VALUES ($value1, $value2, etc...)

Sino, tambien podemos especificar que campos queremos llenar exclusivamente, de la siguiente manera
INSER INTO $nombreTabla ($campo1, $campo2, $campo3)
VALUES ($value1, $value2, $value3)

DELETE
Sirve para eliminar registros de una tabla, SI NO PONEMOS UN WHERE COMO CONDICION, BORRA TODOS LOS REGISTROS DE LA TABLA, se utiliza asi
DELETE FROM $nombreTabla
WHERE $nombreColumna $operador $valor


UPDATE
Con este modificamos valores en una tabla, de esta manera:
UPDATE $NombreTabla
SET $nombreColumna=$valor
WHERE $nombreColumna $operador $valor


Instalación de MySQL y otras herramientas.

Para poder probar de forma local las consultas y operaciones que acabamos de ver, necesitamos tener instalado MySql y algun cliente o gestor que nos permita administrar bases de datos, para esto, necesitamos el paquete llamado Wamp Server, que incluye MySQL, el servidor Apache, y el interprete del lenguaje PHP, con esto, podemos utilizar la app phpMyAdmin, que es un gestor de bases de datos muy sencillo.

WampServer puede ser descargado para windows de forma gratuita desde
https://www.wampserver.com/en/. En caso de utilizar la plataforma de Mac, su
equivalente es MAMP y puede ser descargado desde https://www.mamp.info/.
Cualquiera sea el que instalemos deberemos seguir las instrucciones de instalación
provistas en ambos sitios.
Una vez instalado WampServer, nos aseguramos de que los servicios están
ejecutándose y abriremos la dirección http://localhost. Una vez ahí, en la sección
de Tools o herramientas buscaremos el link a phpMyAdmin.

En caso de que nos pida las credenciales de acceso al servidor de MySQL, y no las
hayamos modificado, ingresamos root como usuario y dejaremos vacío el campo de
contraseña (MAMP generalmente usa también root como contraseña).
Una vez que ingresamos al servidor podemos ejecutar las consultas en la pestaña
SQL.




