//codigo optimizado

const contenedores = [
    {element: document.querySelector('.contenedor-200px'),color:'#AFEBF3',threshold: 200},
    {element: document.querySelector('.contenedor-400px'),color:'#DDA0F5',threshold: 400},
    {element: document.querySelector('.contenedor-600px'),color:'#31BC98',threshold: 600},
    {element: document.querySelector('.contenedor-800px'),color:'#A9BC31',threshold: 800},
    {element: document.querySelector('.contenedor-1000px'),color:'#EE8957',threshold: 1000},
    {element: document.querySelector('.contenedor-1200px'),color:'#18168E',threshold: 1200}
];

window.addEventListener('scroll',() => {

    const scrolled = window.scrollY;
    console.log(scrolled);

    contenedores.forEach(contenedor =>{
        const {element, color, threshold} = contenedor;
        if(scrolled >= threshold && scrolled < threshold + 200){
            element.classList.add('colorFondo');
            element.style.backgroundColor = color;
        }else{
            element.classList.remove('colorFondo');
            element.style.backgroundColor = '';
        }
    });

});






// const contenedor200 = document.querySelector('.contenedor-200px');
// const contenedor400 = document.querySelector('.contenedor-400px');
// const contenedor600 = document.querySelector('.contenedor-600px');
// const contenedor800 = document.querySelector('.contenedor-800px');
// const contenedor1000 = document.querySelector('.contenedor-1000px');
// const contenedor1200 = document.querySelector('.contenedor-1200px');



// window.addEventListener('scroll',() =>{
  
//     const scrolled = window.scrollY;
//     console.log(scrolled);
//     if(scrolled < 200){
//         contenedor200.classList.add('colorFondo');
//         contenedor200.style.backgroundColor = '#AFEBF3';
//     }else{
//         contenedor200.classList.remove('colorFondo');
//         contenedor200.style.backgroundColor = '';
//     }
//     if(scrolled >= 200 && scrolled < 400 ){
//         contenedor400.classList.add('colorFondo');
//         contenedor400.style.backgroundColor = '#DDA0F5';
//     }else{
//         contenedor400.classList.remove('colorFOndo');
//         contenedor400.style.backgroundColor ='';
//     }
//     if(scrolled >= 400 && scrolled <600 ){
//         contenedor600.classList.add('colorFondo');
//         contenedor600.style.backgroundColor = '#31BC98';
//     }else{
//         contenedor600.classList.remove('colorFondo');
//         contenedor600.style.backgroundColor = "";
//     }
//     if(scrolled >= 600 && scrolled <800){
//         contenedor800.classList.add('colorFondo');
//         contenedor800.style.backgroundColor = '#A9BC31';
//     }else{
//         contenedor800.classList.remove('colorFondo');
//         contenedor800.style.backgroundColor ='';
//     }
//     if(scrolled >= 800 && scrolled < 1000){
//         contenedor1000.classList.add('colorFondo');
//         contenedor1000.style.backgroundColor = '#EE8957';
//     }else{
//         contenedor1000.classList.remove('colorFondo');
//         contenedor1000.style.backgroundColor = '';
//     }
//     if(scrolled >= 1000 && scrolled < 1200){
//         contenedor1200.classList.add('colorFondo');
//         contenedor1200.style.backgroundColor = '#18168E';
//     }else{
//         contenedor1200.classList.remove('colorFondo');
//         contenedor1200.style.backgroundColor = '';
//     }

// });