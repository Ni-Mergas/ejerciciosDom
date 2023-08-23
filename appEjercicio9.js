const boton = document.getElementById('boton');
const elemento = document.getElementById('elemento');

boton.addEventListener('click',() =>{
    const resultado = window.confirm('¿Estas seguro de eliminar elemento?');
    if(resultado === true){
        elemento.textContent = '';
    }else{
        elemento.textContent = 'Elemento';
    }
});