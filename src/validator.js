const isValid = (number) => {

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
        // console.log(numberCadena.length);
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
  } else {
    return false;
  }
};

// export funcion
export default isValid