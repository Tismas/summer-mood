let canvas = document.getElementById('game'),
    ctx = canvas.getContext('2d'),
    gfx = Graphics();

let resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

let update = () => {

    render();
}

let render = () => {
    gfx.drawTile(ctx, 'grass', {x: 1, y: 1});
    setTimeout(update, 1000/60);
}

let init = () => {
    window.onresize = resize;
    resize();

    update();
}

init();