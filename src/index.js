import isValid  from './validator.js';

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

const validaTarjeta = `<p id="parrafo" class="parrafo">El N° de tarjeta es válida.</p>
<img class="check" src="img/check.gif" alt="">`

const noValida = `<p class="parrafo">El N° de tarjeta no es válida</p>
  <img class="signoAd" src="img/admiracion.png" alt="">`;

// const resp = document.getElementById('#parrafo');
validar.addEventListener('click', (e) => {
    e.preventDefault(); // FUNCION
    const response = isValid(numero.value);
    const modal = document.querySelector('.modal-body');
    openModal();
    if(response === true){
        modal.innerHTML = validaTarjeta;
       
    }else {
        modal.innerHTML = noValida;
      
    }
    // const response = isValid(numero);
    // // console.log(response);
    // document.getElementById('parrafo').innerHTML = response;
    // // document.querySelector('.modal-body').innerHTML = response;

    // cerrarModal();

    numero.value = "";
});
