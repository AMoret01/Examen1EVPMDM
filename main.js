const texto = 'Lorem ipsum dolor sit amet consectetur adipiscing elit gravida cras proin justo, diam pulvinar in leo aenean morbi nunc lobortis nibh Sollicitudin mattis turpis neque condimentum posuere volutpat dignissim cras, platea egestas pharetra etiam sagittis a et, habitasse placerat mi malesuada facilisis velit ligula. Lacinia cras justo cum viverra gravida egestas neque dictum, auctor sociosqu mauris lacus erat placerat condimentum, varius fames praesent laoreet est donec suscipit';
const caracter = 'c';
const textoDividido = texto.split(" ");

const filtrarPalabras = (cadenaDeTexto, caracterARemplazar) => {

  const filtradas = [];
  cadenaDeTexto.forEach(palabra => {
    if(!palabra.includes(caracterARemplazar)){
        console.log("Ha entrado");
        filtradas.push(palabra);
    }
  });

  // console.log(filtradas);  
  return filtradas;
}

const filterTextOnKeyUp = () => {
  const textElement = document.getElementById("texto");
  const textoValue = textElement.innerText.split(" ");
  const caracter = document.getElementById("filterText").value;
  textElement.innerText = filtrarPalabras(textoValue, caracter).join(" ") || texto;
}

// console.log(filtrarPalabras(textoDividido,caracter).join(" "));

// //  const aceptar = document.createElement('button');
// //     aceptar.textContent = "Aceptar";
// //     aceptar.addEventListener('click', /*funcionfinal*/);