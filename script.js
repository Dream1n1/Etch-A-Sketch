const container = document.querySelector('#container');
const btn = document.querySelector('#reset');
const newColor = document.querySelector('#color');

let square;

//Create the grid
function create(num = 16, color='black') {
    for (let i = 0; i < num*num; i++) {
        square = document.createElement('div');
        square.textContent = '';
        square.classList.add('hover');
        measure = 400/num;
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
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0])
    }
    create(num);
}


function resetColor() {
    color = prompt('What color do you want?');
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener('mouseout', function(e) {
            e.target.style.background = color;
        })
    }
}

//listens for the button click to run the resetNum function
btn.addEventListener('click', () => resetNum());

//listens for the button click to run the resetColor function
newColor.addEventListener('click', () => resetColor());
