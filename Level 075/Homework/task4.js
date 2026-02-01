const smallBox = document.getElementById('smallBox');
let x = 0;
let y = 0;
let direction = 'right';
const boxSize = 40;
const containerSize = 300;
const maxPosition = containerSize - boxSize;

setInterval(() => {
    if (direction === 'right') {
        x++;
        if (x >= maxPosition) direction = 'down';
    } else if (direction === 'down') {
        y++;
        if (y >= maxPosition) direction = 'left';
    } else if (direction === 'left') {
        x--;
        if (x <= 0) direction = 'up';
    } else if (direction === 'up') {
        y--;
        if (y <= 0) direction = 'right';
    }

    smallBox.style.left = x + 'px';
    smallBox.style.top = y + 'px';
}, 1);