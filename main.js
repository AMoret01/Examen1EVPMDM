crearBotones();

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
function crearBotones()  {

  const myDiv = document.getElementById("buttons-container");

  // create the button object and add the text to it
  const bContar = document.createElement("BUTTON");
  bContar.innerHTML = "Contar Palabras";
  bContar.setAttribute('id', 'bContar');
  bContar.style.margin = "5px";

  bContar.onclick = function ()
  {
    const contar = document.getElementById("bContar");

    const span = document.createElement("span")
    span.setAttribute('id', 'mySpan');

    const texto = document.getElementById("texto").innerHTML;
    const result = document.createElement('h2');
    result.textContent = "Palabras contadas: " + texto.length + " palabras.";
    span.appendChild(result);

    contar.insertAdjacentElement('afterend', span);

    contar.appendChild(span);   

  }

  // add the button to the div
  myDiv.appendChild(bContar);

  // create the button object and add the text to it
  const bRestaurar = document.createElement("BUTTON");
  bRestaurar.innerHTML = "Restaurar";
  bRestaurar.setAttribute('id', 'bRestaurar');
  bRestaurar.style.margin = "5px";

  bRestaurar.onclick = function ()
  {
    const span = document.getElementById("mySpan");

    span.remove();

  }
  // add the button to the div
  myDiv.appendChild(bRestaurar);
}
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

// Ej 5

window.onload = function()
		{
			const elemento=document.getElementById("texto");
			elemento.onmouseover = function(e) {
 
				// El contenido de esta funcion se ejecutara cuanso el mouse
				// pase por encima del elemento
        elemento.style.fontWeight = "bold";
        elemento.style.color = "yellow";
        elemento.style.backgroundColor = "deeppink";
			};
			elemento.onmouseout = function(e) {
 
				// El contenido de esta funcion se ejecutara cuanso el mouse
				// salga del elemento
        
        elemento.style.fontWeight = "lighter";
        elemento.style.color = "black";
        elemento.style.backgroundColor = "white";
			};
		}

// Fin Ej 5
