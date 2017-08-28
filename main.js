let canvas = document.getElementById('game'),
    ctx = canvas.getContext('2d');

let resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

let init = () => {
    window.onresize = resize;
    resize();
}

init();