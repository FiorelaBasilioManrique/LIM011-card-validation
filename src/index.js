import isValid from './validator.js';

const number = document.getElementById('numero');
const validar = document.getElementById('validar');
const cardTarje = document.getElementById('cardTarje');
const message = document.getElementById('mensaje');

// MODAL
const modal = document.getElementById('modal');
const flex = document.getElementById('flex');
const close = document.getElementById('close');

const openModal = () => {
    // cardTarje.classList.add('hide');
    modal.classList.remove('hide');
}

close.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('hide');
    cardTarje.classList.remove('hide');
});

window.addEventListener('click', (e) => {
    if (e.target == flex) {
        modal.classList.add('hide');
        cardTarje.classList.remove('hide');
    }
});

const validaTarjeta = `<p id="parrafo" class="parrafo">El N° de tarjeta es válida.</p>
<img class="check" src="img/check.gif" alt="">`

const noValida = `<p class="parrafo">El N° de tarjeta no es válida</p>
<img class="signoAd" src="img/admiracion.png" alt="">`;

validar.addEventListener('click', (e) => {
    e.preventDefault(); // FUNCION
    if (number.value !== '') {
        const response = isValid(number.value);
        const modal = document.querySelector('.modal-body');
        openModal();
        if (response === true) {
            modal.innerHTML = validaTarjeta;

        } else {
            modal.innerHTML = noValida;
        }
    } else {
        message.innerHTML = 'Ingrese un número de tarjeta';
    }

    number.value = '';

});
