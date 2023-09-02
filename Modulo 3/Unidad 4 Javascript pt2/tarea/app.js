document.addEventListener('DOMContentLoaded', function() {
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


    const textarea = document.getElementsByClassName('textarea')[0];
    const textareaTam = document.getElementsByClassName('textareaTam')[0];
    textarea.addEventListener('change', function(){
        textareaTam.innerHTML = '<strong> El tamaño del textarea es de: ' + textarea.value.length + '</strong>';
    });
});
