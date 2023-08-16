// SELECCIONAR LOS ELMENTOS NECESARIOS DEL HTML

const boton = document.getElementById('boton-enviar');
const nombre = document.getElementById('ingresar-nombre');
const apellido = document.getElementById('ingresar-apellido');
const direccion = document.getElementById('ingresar-direccion');
const correo = document.getElementById('ingresar-correo');


boton.addEventListener('click',(e) =>{
    e.preventDefault();//evita que el boton de submit del formulario, envie los datos por defecto al servidor
    //obtener el valor del input de nombre
    const nombreValor = nombre.value;
    const apellidoValor = apellido.value;
    const direccionValor = direccion.value;
    const correoValor = correo.value;
    
    //Mostrar el valor obtenido del nombre mediante el alert
    alert('Nombre ingresado: ' + nombreValor + ' Apellido Ingresado: ' + apellidoValor );
    alert('Dirección Ingresada: ' + direccionValor + ' Correo Ingresado: ' + correoValor);


 })