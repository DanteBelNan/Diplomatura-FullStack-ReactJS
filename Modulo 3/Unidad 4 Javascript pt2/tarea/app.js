document.addEventListener('DOMContentLoaded', function() {
    //Punto 1
    const btnRed = document.getElementsByClassName('btnRed')[0];
    const btnBlue = document.getElementsByClassName('btnBlue')[0];
    const btnGreen = document.getElementsByClassName('btnGreen')[0];

    const body = document.getElementsByTagName('body')[0];
    btnRed.addEventListener('click', function(){
        console.log("Se clickeó el botón Red");
        body.style.backgroundColor = "#ff0000";
    }, false);

    btnBlue.addEventListener('click', function(){
        console.log("Se clickeó el botón Blue");
        body.style.backgroundColor = '#0000ff';
    }, false);
    
    btnGreen.addEventListener('click', function(){
        console.log("Se clickeó el botón Green");
        body.style.backgroundColor = '#00ff00';
    }, false);

    //Punto 2
    const textarea = document.getElementsByClassName('textarea')[0];
    const textareaTam = document.getElementsByClassName('textareaTam')[0];
    textarea.addEventListener('change', function(){
        textareaTam.innerHTML = '<strong> El tamaño del textarea es de: ' + textarea.value.length + '</strong>';
    });
});

//Punto 3
var alumnos = [

  {

    nombre: 'Juan Gomez',

    nota: 7

  }, {

    nombre: 'Pedro Rodriguez',

    nota: 4

  }, {

    nombre: 'Roxana García',

    nota: 8

  }, {

    nombre: 'Luciano Lopez',

    nota: 5

  }, {

    nombre: 'Fernanda Gimenez',

    nota: 6

  }, {

    nombre: 'Florencia Martinez',

    nota: 10

  }, {

    nombre: 'Raul Sanchez',

    nota: 7

  }, {

    nombre: 'Sandra Figueroa',

    nota: 8

  }

];

const aprobados = alumnos.filter(function(alumno){
    return alumno.nota >= 7;
});

console.log(aprobados);
