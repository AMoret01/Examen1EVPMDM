

// Ej 1
const filtrarPalabras = (cadenaDeTexto, caracterARemplazar) => {

  const filtradas = [];
  cadenaDeTexto.forEach(palabra => {
    if (!palabra.includes(caracterARemplazar)) {
      console.log("Ha entrado");
      filtradas.push(palabra);
    }
  });

  // console.log(filtradas);  
  return filtradas;
}

// console.log(filtrarPalabras(textoDividido,caracter).join(" "));

const filterTextOnKeyUp = () => {
  const textElement = document.getElementById("texto");
  const textoValue = textElement.innerText.split(" ");
  const caracter = document.getElementById("filterText").value;
  textElement.innerText = filtrarPalabras(textoValue, caracter).join(" ") || texto;
}
// Fin Ej 1

// Ej 2
const miForm = document.getElementById('miForm');

miForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(miForm);
  const jsonData = {};
  for (const [k, v] of formData) {
    jsonData[k] = v;
  }
  document.getElementById("json-result").innerHTML = JSON.stringify(jsonData);

  // return jsonData;
});
// Fin Ej 2

// Ej 3
// function crearBotones() {

//   const bContar = document.createElement("button");
//   bContar.setAttribute('id', 'bContar');
//   bContar.setAttribute('tag', 'Contar palabras');
//   bContar.addEventListener('click', function () {
//     const wordCount = () => {
//       const texto = document.getElementById("texto").innerHTML;
//       const result = "Palabras contadas: " + texto.length + " palabras";
//       return result;
//     }
//     const tempSpan = document.createElement('span');
    
//     const result = document.getElementsByTagName("span")[0];
//     result = wordCount;
//     tempSpan.insertAdjacentElement('afterend',result);
//  });

// const bRestaurar = document.createElement('button');
// bRestaurar.setAttribute('id', 'bRestaurar');
// bRestaurar.addEventListener('click', function () {
//   const texto = document.getElementById("texto").innerHTML;
//   const tempSpan = document.createElement('span');
//   const result = document.getElementsByTagName("span")[0];
//   result = "Palabras contadas: " + texto.length + " palabras";
//   tempSpan.insertAdjacentElement('afterend',res);
//   return result;
// });
// };
// Fin Ej 3

// Ej 4

const moverImagenArriba = () => {
  const botonElement = document.getElementById("btnSubir");
  const contador = 0;
  botonElement.onclick = function () {
    contador++;

  }
  if (contador % 2 == 0) {
    const arriba = document.getElementById("arriba");
    const centro = document.getElementById("centro");
    centro.insertAdjacentElement("beforebegin", arriba);
  }else{
    const arriba = document.getElementById("arriba");
    const abajo = document.getElementById("abajo");
    abajo.insertAdjacentElement("beforebegin", arriba);
  }
}

const moverImagenAbajo = () => {
  const botonElement = document.getElementById("btnBajar");
  const contador = 0;
  botonElement.onclick = function () {
    contador++;
  }
  if (contador % 2 == 0) {
    const arriba = document.getElementById("arriba");
    const abajo = document.getElementById("abajo");
    arriba.insertAdjacentElement("afterend", abajo);
    
  }else{
    const arriba = document.getElementById("arriba");
    const centro = document.getElementById("centro");
    centro.insertAdjacentElement("afterend", arriba);
  }
}

// Fin Ej 4