const btn = document.querySelector('button');


let square;

//Create the grid
function create(num = 16) {
    for (let i = 0; i < num*num; i++) {
        container = document.querySelector('#container');
        square = document.createElement('div');
        square.textContent = '';
        square.classList.add('hover');
        measure = 500/num;
        square.style.height = measure.toString()+'px';
        square.style.width = measure.toString()+'px';
        container.appendChild(square);
        square.addEventListener('mouseover', function(e) {
            e.target.style.background = 'blue';
        })
        square.addEventListener('mouseout', function(e) {
            e.target.style.background = 'yellow';
        })
    }
}

let elements = document.getElementsByClassName('hover');
//remove and recreate the grid with the number given by the user
function resetNum() {
    num = prompt('How many squares per side do you want?');
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0])
    }
    create(num);
}

//listens for the button click to run the resetNum function
btn.addEventListener('click', () => resetNum());

create();