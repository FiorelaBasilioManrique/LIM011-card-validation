 const isValid = (number) => {
  // export const isValid = (number) => {
  let suma = 0;
  let newArray = [];

  const multiNumero = (number.split(''));
  // console.log(multiNumero);

  for (let i = 0; i < multiNumero.length; i++) {
    if (i % 2 === 0) {
      newArray.push(multiNumero[i] * 2);
    } else {
      newArray.push(parseInt(multiNumero[i]));
    }
  }
  // console.log(newArray);

  // SUMA

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] >= 10) {
      const numberCadena = newArray[i].toString();
      // console.log(numberCadena);
      for (let i = 0; i < numberCadena.length; i++) {
        // console.log(numberCadena);
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