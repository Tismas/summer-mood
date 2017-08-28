let canvas = document.getElementById('game'),
    ctx = canvas.getContext('2d'),
    gfx = new Graphics();

let resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

let update = () => {

    render();
}

let render = () => {
    gfx.drawTile(ctx, 'grass', {x: 1, y: 1});
    gfx.drawTile(ctx, 'bigGrass', {x: 1, y: 2});
    setTimeout(update, 1000/60);
}

let init = () => {
    window.onresize = resize;
    resize();

    update();
}

init();