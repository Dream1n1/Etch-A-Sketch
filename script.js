const container = document.querySelector('#container');

let square;
c = prompt('number of squares: ')
for (let i = 1; i <= c; i++) {
    square = document.createElement('div');
    square.textContent = '';
    square.classList.add('hover');
    container.appendChild(square);
    square.addEventListener('mouseover', function(e) {
        e.target.style.background = 'blue'
    })
    square.addEventListener('mouseout', function(e) {
        e.target.style.background = ''
    })
}
