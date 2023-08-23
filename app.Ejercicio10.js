
window.addEventListener('load',iniciarEvento,false);

function iniciarEvento(){
    let dato = document.getElementById('nombre');
    dato.addEventListener('change',alertaEvento, false);
    dato = document.getElementById('apellido');
    dato.addEventListener('change',alertaEvento, false);
    dato = document.getElementById('direccion');
    dato.addEventListener('change', alertaEvento, false);
    dato = document.getElementById('correo');
    dato.addEventListener('change', alertaEvento, false);
    dato = document.getElementById('select');
    dato.addEventListener('change', alertaEvento,false);
    
}

function alertaEvento(e){
    let dato = e.target;
    let valor = dato.value;
    alert('Se modifico el evento: ' + dato.getAttribute('id') + ' ' + valor);
}


