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