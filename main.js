const square = document.getElementById('square');
const triangle = document.getElementById('triangle');
const circle = document.getElementById('circle');
const body = document.getElementById('body');


function createSquare() {
    const addSquare = document.createElement('div');
    addSquare.classList.add('square');

    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 200;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    const randomSize = Math.floor(Math.random() * 200);

    addSquare.style.width = `${randomSize}px`;
    addSquare.style.height = `${randomSize}px`;
    addSquare.style.left = `${randomX}px`;
    addSquare.style.top = `${randomY}px`;
        
    addSquare.addEventListener('dblclick', function(){
        addSquare.remove();
    })

    document.body.appendChild(addSquare);
}

function createTriangle() {
    const addTriangle = document.createElement('div');
    addTriangle.classList.add('triangle');

    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 200;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    addTriangle.style.left = `${randomX}px`;
    addTriangle.style.top = `${randomY}px`;
        
    addTriangle.addEventListener('dblclick', function(){
        addTriangle.remove();
    })

    document.body.appendChild(addTriangle);
}

function createCircle() {
    const addCircle = document.createElement('div');
    addCircle.classList.add('circle');

    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 200;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    const randomSize = Math.floor(Math.random() * 200);

    addCircle.style.width = `${randomSize}px`;
    addCircle.style.height = `${randomSize}px`;

    addCircle.style.left = `${randomX}px`;
    addCircle.style.top = `${randomY}px`;
        
    addCircle.addEventListener('dblclick', function(){
        addCircle.remove();
    })

    document.body.appendChild(addCircle);
}

circle.addEventListener('click', function(){
    const count = document.getElementById('input').value;
    if (count && count > 0){
        for(let i = 0; i < count; i++){
            createCircle();
        }
    }
    else{
        createCircle();
    }
})

triangle.addEventListener('click', function(){
    const count = document.getElementById('input').value;
    if (count && count > 0){
        for(let i = 0; i < count; i++){
            createTriangle();
        }
    }
    else{
        createTriangle();
    }
})

square.addEventListener('click', function(){
    const count = document.getElementById('input').value;
    if (count && count > 0){
        for(let i = 0; i < count; i++){
            createSquare();
        }
    }
    else{
        createSquare();
    }
})