const botonUno = document.getElementById('elemento-activo-uno');
const botonDos = document.getElementById('elemento-activo-dos');

botonUno.addEventListener('click',() => {
    botonUno.classList.toggle('btn-active');
    botonDos.classList.remove('btn-active');
})

botonDos.addEventListener('click', () =>{
    botonUno.classList.remove('btn-active');
    botonDos.classList.toggle('btn-active');
})