const ocultar = document.getElementById('oculto');
const boton = document.getElementById('boton-oculto');

boton.addEventListener('click',(e)=>{
    ocultar.remove();
})