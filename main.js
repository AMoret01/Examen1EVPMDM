

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

const moveImg = (direction) => {
  const imgContainer = document.querySelector(".image-container");
  const imgDivNode =  document.querySelector(".image-container > div > img").parentNode;
  const availableDivs = [...imgContainer.childNodes].filter(el => /div/i.test(el.tagName));

  const imgPosition = availableDivs.indexOf(imgDivNode);
  const nextPostion = imgPosition + direction;
  
  if (nextPostion > (availableDivs.length - 1) || nextPostion < 0)
    return;

  availableDivs[nextPostion].insertAdjacentElement((direction < 0) ? "beforebegin" : "afterend" , imgDivNode);

}

const moverImagenArriba = () => {
  moveImg(-1);
}

const moverImagenAbajo = () => {
  moveImg(1);
}

// Fin Ej 4
