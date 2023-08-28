//Ejercicio 1
function medioTransporte(metros){
    let medio;
    if (metros < 0){
        return "metros debe ser positivo";
    }
    if(metros < 1000){
        medio = "pie";
    }else if (metros < 10000){
        medio = "bicicleta";
    }else if (metros < 30000){
        medio = "colectivo";
    }else if(metros < 100000){
        medio = "auto";
    }else{
        medio = "avion";
    }
    return medio;
}

//Ejercicio 2
function getMaxArray(miArray){
    maxValue = miArray[0];
    for(let i = 1; 1< miArray.length;i++){
         if(miArray[i] > miArray[maxValue]){
            maxValue = i;
         }
    }

    return miArray[maxValue];
}