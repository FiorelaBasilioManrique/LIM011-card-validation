export const isValid = (numero) => {
  // export const isValid = (creditCardNumber) => {
  let suma = 0;
  let newArray = [];

  const reverseNumero = (numero.value.split(''));
  // console.log(reverseNumero);

  for (let i = 0; i < reverseNumero.length; i++) {
    if (i % 2 === 0) {
      newArray.push(reverseNumero[i] * 2);
    } else {
      newArray.push(parseInt(reverseNumero[i]));
    }
  }
  // console.log(newArray);

  // SUMA

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] >= 10) {
      const numberCadena = newArray[i].toString();
      for (let i = 0; i < numberCadena.length; i++) {
        suma += parseInt(numberCadena[i]);
      }

    } else {
      suma += parseInt(newArray[i]);
    }
    // console.log(suma);
  }
  if (suma % 10 === 0) {

    const validaTarjeta = `<p id="parrafo" class="parrafo">El N° de tarjeta es válida.</p>
    <img class="check" src="img/check.gif" alt="">`

    return validaTarjeta;

  } else {

    const noValida = `<p class="parrafo">El N° de tarjeta no es válida</p>
    <img class="signoAd" src="img/admiracion.png" alt="">`;
    return noValida;
  }
};

  // hacer con el return valida o no valida