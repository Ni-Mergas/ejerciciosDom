const descripcion = document.getElementById('descripcion');
const descripcionImg = document.getElementById('descripcion-img');

function mouseOver(){
    
    descripcionImg.textContent = 'Millonarios campeón Liga 2023 I'
    descripcionImg.style.display = 'block';
}

function mouseOut(){
   descripcion.textContent = '';
   descripcionImg.style.display = 'none';
}