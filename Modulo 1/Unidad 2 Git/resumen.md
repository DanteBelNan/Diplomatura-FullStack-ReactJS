1. ¿Que es el control de versiones?
Git es un sistema de control de versiones distribuido de codigo abierto para ser rapido y eficiente.
Un sistema de control de versiones permite a sus usuarios almacenar revisiones diferentes de un mismo archivo, compararlas, restaurarlas y aveces mezclarlas
Comparado con sistemas de control de version antiguos como SVN o CVS, Git no necesita de un repositorio (lugar donde se alojan los archivos y sus versiones) central. Esto lo hace un sistema distrbuido, lo cual da una flexibilidad que otros sistemas no podrian tener.

Para utilizar git debemos instalarlo en: https://git-scm.com/
Luego, ejecutar los siguientes comandos
git config --global user.name "Tu nombre"
git config --global user.email "Tu@Mail.com"

Este comando representa lo siguiente:
git -> referencia a el programa
config -> indica que configuraremos
--global -> de manera global (env variable)
user.name y user.email -> las variables a cambiar


2. Estados principales

Es importante mencionar los 3 estados con los que pueden contar los archivos en git:
Modificado (modified) -> Se modifico el archivo pero no se confirmo su subida al repositorio
Preparado (staged) -> El archivo modificado se marco como proximo a confirmarse
Confirmado (commited) -> El archivo ya es parte del repositorio final

![Estados de archivos](archivos.png)

3. Agregar y commitear archivos y cambios

Para subir un archivo modificado a staged, ejecutamos el siguiente comando
git add archivo.exe

Si queremos agregar todos los archivos pertenecientes a una ruta
git add ruta/directorio

Si queremos agregar todos los archivos modificados
git add .

Si queremos agregar todos los archivos con alguna extension
git add *.jpg


Si queremos ver los archivos que tenemos en staged, ejecutamos
git status

Si queremos commitear estos archivos (pasarlos de staged a commited) debemos ejecutar el comando
git commit -m "Descripción del commit"


Podemos tambien combinar un git add . con un git commit con el comando
git commit -am "Descripción del commit"
Este, envia de modificado a commiteado todos los archivos que sean modificados



4. Git Log
Podemos ejecutar el comando
git log
para ver un historial de todos los commits realizados en el repositorio, para de esta manera, mantener un registro.

Si queremos ignorar archivos, debemos de utilizar el archivo
.gitignore
En el cual definimos las extensiones de los archivos que no seran subidas al repositorio
