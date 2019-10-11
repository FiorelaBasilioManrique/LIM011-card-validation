 const isValid = (numero) => {
  // export const isValid = (creditCardNumber) => {
  let suma = 0;
  let newArray = [];

  const reverseNumero = (numero.split(''));
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
        // console.log(suma);
      }

    } else {
      suma += parseInt(newArray[i]);
      // console.log(suma);
    }
    // console.log(suma);
  }

  if (suma % 10 === 0) {
    return true;
    // const validaTarjeta = `<p id="parrafo" class="parrafo">El N° de tarjeta es válida.</p>
    // <img class="check" src="img/check.gif" alt="">`

    // return 'El N° de tarjeta es válida.';

  } else {
    return false;
    // const noValida = `<p class="parrafo">El N° de tarjeta no es válida</p>
    // <img class="signoAd" src="img/admiracion.png" alt="">`;
    // return 'El N° de tarjeta no es válida';
  }
};

  // hacer con el return valida o no valida
  export default isValid