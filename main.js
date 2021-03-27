var texto = 'Lorem ipsum dolor sit amet consectetur adipiscing elit gravida cras proin justo, diam pulvinar in leo aenean morbi nunc lobortis nibh Sollicitudin mattis turpis neque condimentum posuere volutpat dignissim cras, platea egestas pharetra etiam sagittis a et, habitasse placerat mi malesuada facilisis velit ligula. Lacinia cras justo cum viverra gravida egestas neque dictum, auctor sociosqu mauris lacus erat placerat condimentum, varius fames praesent laoreet est donec suscipit';
var espacio = " ";

const dividirTexto = (cadenaADividir,separador) => {
    var array = cadenaADividir.split(separador);
    console.log("<br>El array tiene " + array.length + " elementos: ");
 
    for (var i=0; i < array.length; i++) {
       console.log(array[i] + " / ");
    }
 }
 dividirTexto(texto, espacio);


 const aceptar = document.createElement('button');
    aceptar.textContent = "Aceptar";
    aceptar.addEventListener('click', /*funcionfinal*/);

