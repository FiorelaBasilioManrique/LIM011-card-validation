export const isValid = (creditCardNumber) => {
  let suma = 0;
  let newArray = [];

  const reverseNumero = (numero.value.split(''));
  console.log(reverseNumero);

  for (let i = 0; i < reverseNumero.length; i++) {
    if (i % 2 === 0) {
      newArray.push(reverseNumero[i] * 2);
    } else {
      newArray.push(parseInt(reverseNumero[i]));
    }
  }
  console.log(newArray);

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
    console.log(suma);
  }
  if (suma % 10 === 0) {
    alert('valida')

  } else {
    alert('no valida')
  }
};

