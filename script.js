const container = document.querySelector('#container');

for (let i = 1; i <= 256; i++) {
    square = document.createElement('div');
    square.textContent = '';
    container.appendChild(square);
}

