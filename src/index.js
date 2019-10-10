import { isValid } from './validator.js';

const numero = document.getElementById('numero');
const validar = document.getElementById('validar');
const cardTarje = document.getElementById('cardTarje');

// MODAL
const modal = document.getElementById('modal');
const flex = document.getElementById('flex');
const close = document.getElementById('close');

const openModal = ()=>{
    cardTarje.classList.add('hide');
    modal.classList.remove('hide');
}

close.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('hide');
    cardTarje.classList.remove('hide');
});
// const cerrarModal = ()=>{
//     cardTarje.classList.remove('hide');
//     close.classList.remove('hide');
//     modal.classList.remove('hide');    
// }

window.addEventListener('click', (e)=>{
    if(e.target == flex){
        modal.classList.add('hide');
        cardTarje.classList.remove('hide');
    }
});
// const resp = document.getElementById('#parrafo');
validar.addEventListener('click', (e) => {
    e.preventDefault(); // FUNCION
    const response = isValid(numero);
    // console.log(response);
    // document.getElementById('parrafo').innerHTML = response;
    document.querySelector('.modal-body').innerHTML = response;
    openModal();
    // cerrarModal();

    numero.value = "";
});
