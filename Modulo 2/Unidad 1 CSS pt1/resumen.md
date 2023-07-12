1. Gradients
CSS3 posee soporte para nuevo tipos de gradientes en las porpiedades CSS, usarlos en un segundo plano, permite mostrar transiciones suaves entre dos o mas colores especificos, evitando asi el uso de imagenes para estos efectos, lo que reduce el tiempo de descarga y el uso de ancho de banda, ademas, debido a que el gradiente es generado por el navegador, los objetos degradados se ven mejor a la hora de hacer el zoom, el ajuste del diseño es mucho mas flexible.
Los navegadores soportan dos tipos de gradientes: lineal, definido con linear-gradient, y radial, definido con radial-gradient
Ej:
header{
    background: linear-gradient(to bottom, blue, white);
}

nav{
    background: linear-gradient(to right,blue,white);
}

Para mejores gradientes, podemos usar la siguiente pagina
https://www.colorzilla.com/gradient-editor/

2. Sombras
La propiedad box-shadow permite generar sombras a las cajas y utiliza minimo 4 parametros que se definen en el siguiente orden: desplazamiento horizontal, vertical, desenfocado y color de la sombra
.div{
    box-shadow: 0 0 5px #888
}

3. Columnas
Cuando tenemos mucha cantidad de texto y se generan lineas muy largas resulta incomodo leerlas. Para eso podemos utilizar columnas, ya que hacen mas facil la legibilidad dividiendo el contenido en columnas (como hacen los medios impresos)
p{
    column-count: 2;
    column-gap: 20px;
}

4. Bordes redondeados
La propiedad border-radius permite redondear las esquinas de la caja, pueden ser todas iguales, o distintas

.br1{
    border-radius: 5px; //Todos los bordes de 5px
}

.br2{
    border-radius: 5px 10px 5px 10px; //alterna entre 10 y 5 px los bordes
}

5. Tipografias e Iconos
Las tipografias se adjuntan mediante @font-face, google fonts nos da la posibilidad de trabajar con tipografias modernas en nuestros sitios https://fonts.google.com/

Para seleccionar cualquiera que queramos de la pagina, la clickeamos, le damos a download family, y en donde se nos abre un Embed, copiamos en css y html los codigos que nos pone

Iconos
Para incluir iconos en nuestro sitio podemos utilizar una libreria como FontAwesome, esta cuenta con un amplio catalogo de iconos, su link es el siguiente https://cdnjs.com/libraries/font-awesome

La primer columna roja, tocamos el icono del medio que es un </>
Luego, accedemos a https://fontawesome.com/icons
Donde tenemos un gran catalogo de iconos, alli, clickeamos el que mas nos guste, y copiamos su codigo html y lo pegamos en nuestra computadora.