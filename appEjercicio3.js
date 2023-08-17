
const cambioColor = document.getElementById('cambio-color');
const colorActual = document.getElementById('color-actual');
const boton = document.getElementById('boton-color');

function generarColorAleatorio(){
    let digitos = '0123456789ABCDEF';
    let colorHexa = '#';
    for(let i = 0; i < 6 ; i ++){
        let indiceAleatorio =Math.floor(Math.random()*16);
        colorHexa += digitos[indiceAleatorio];

    }
    return colorHexa;
}

boton.addEventListener('click', function(){
    let colorAleatorio = generarColorAleatorio();
    colorActual.textContent = 'Color Actual: ' + colorAleatorio;
    cambioColor.style.backgroundColor = colorAleatorio;

})