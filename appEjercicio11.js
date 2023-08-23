const elemento = document.getElementById('arrastrable');

elemento.addEventListener('dragstar', (e) => {
    e.target.classList.add('dragging');
});

elemento.addEventListener('dragend', (e) => {
    e.target.classList.remove('dragging');
});