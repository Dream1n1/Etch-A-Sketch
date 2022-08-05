const container = document.querySelector('#container');
const btn = document.querySelector('#reset');
const color = document.querySelector('#color');
const randomClr = document.querySelector('#randomClr');
const ers = document.querySelector('#eraser');
const  clear= document.querySelector('#clear');

let square;

//Create the grid
function create(num = 16, color='black') {
    for (let i = 0; i < num*num; i++) {
        square = document.createElement('div');
        square.classList.add('hover');
        measure = 500/num;
        square.style.height = measure.toString()+'px';
        square.style.width = measure.toString()+'px';
        container.appendChild(square);
        square.addEventListener('mouseover', function(e) {
            e.target.style.background = 'rgb(216, 216, 216)';
        })
        square.addEventListener('mouseout', function(e) {
            e.target.style.background = color;
        })
    }
}
create();


//remove and recreate the grid with the number given by the user
let elements = document.getElementsByClassName('hover');
function resetNum() {
    num = prompt('How many squares per side do you want?');
    while (isNaN(num) || num == 0) {
        num = prompt('We need a positive number.')
    }
    while (num > 100) {
        num = prompt('It should be less than 100.')
    }
    if (num == null || num == '') return;
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0])
    }
    create(num);
}

//change color
function resetColor() {
    Clr = document.getElementById("color").value;
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('mouseout', function(e) {
            e.target.style.background = Clr;
        })
    }
}

//random colors
function randomColor() {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('mouseout', function(e) {
            rdm1 = Math.floor(Math.random()*255);
            rdm2 = Math.floor(Math.random()*255);
            rdm3 = Math.floor(Math.random()*255);
            rdmClr = 'rgb(' + rdm1.toString()+ ', ' + rdm2.toString()+ ', ' + rdm3.toString() + ')';
            e.target.style.background = rdmClr;
        })
    }
}

//erase on click
function eraser() {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('mouseout', function(e) {
            e.target.style.background = '';
        })
    }
}

//clear the board
function clearer() {
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.background = '';
    }
}



//listens for the button click and a click away to run the resetColor function
color.addEventListener('change', () => clickAway())
function clickAway() {
    document.addEventListener('click', (event) => {
        const isClickInside = container.contains(event.target);
        if (isClickInside) resetColor();
    });
}

//listens for the button click to run the radomColor function
randomClr.addEventListener('click', () => randomColor());
document.addEventListener('keypress', (event) => {
    if (event.key == 'w' ) randomColor();
});

//listens for the button click to run the resetNum function
btn.addEventListener('click', () => resetNum());
document.addEventListener('keypress', (event) => {
    if (event.key == 'r' ) resetNum();
});

//listens for the button click to run the eraser function
ers.addEventListener('click', () => eraser());
document.addEventListener('keypress', (event) => {
    if (event.key == 'e' ) eraser();
});

//listens for the button click to run the clearer function
clear.addEventListener('click', () => clearer());
document.addEventListener('keypress', (event) => {
    if (event.key == 'c' ) clearer();
});