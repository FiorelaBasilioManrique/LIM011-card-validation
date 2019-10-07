import { isValid } from './validator.js';

const numero = document.getElementById('numero');
const tarjeta = document.getElementById('tarjeta');
const validar = document.getElementById('validar');

validar.addEventListener('click', (e) => {
    e.preventDefault();
    isValid(numero);
});


