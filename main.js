let canvas = document.getElementById('game'),
    ctx = canvas.getContext('2d'),
    gfx = new Graphics(),
    map = new Map(),
    player = new Player();

let resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
}

let update = () => {

    render();
}

let drawMap = () => {
    let renderWidth = Math.ceil(canvas.width / gfx.outputTileSize),
        renderHeight = Math.ceil(canvas.height / gfx.outputTileSize);
    
    for(let y = Math.floor(player.y / gfx.outputTileSize - renderHeight/2); y < Math.ceil(player.y / gfx.outputTileSize + renderHeight/2); y++) {
        for(let x = Math.floor(player.x / gfx.outputTileSize - renderWidth/2); x < Math.ceil(player.x / gfx.outputTileSize + renderWidth/2); x++) {
            gfx.drawTile(ctx, 'bigGrass', {x, y});
        }
    }
}

let render = () => {
    drawMap();
    setTimeout(update, 1000/60);
}

let init = () => {
    window.onresize = resize;
    resize();

    update();
}

init();