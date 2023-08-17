 const boton = document.getElementById('boton');
 const lista = document.getElementById('lista');


 function agregarItem(){
     const li = document.createElement('li');
     li.textContent = 'item';
     lista.appendChild(li);
    
 }

 boton.addEventListener('click',agregarItem);


