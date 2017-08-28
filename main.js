let canvas = document.getElementById('game'),
    ctx = canvas.getContext('2d'),
    gfx = new Graphics(),
    map = new Map(),
    player = new Player(),
    keyboard = new Keyboard();

let resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
}

let update = () => {
    if (keyboard.keys[keyboard.DOWN] || keyboard.keys[keyboard.S]) {
        player.y++;
    }
    else if (keyboard.keys[keyboard.UP] || keyboard.keys[keyboard.W]) {
        player.y--;
    }
    if (keyboard.keys[keyboard.LEFT] || keyboard.keys[keyboard.A]) {
        player.x--;
    }
    else if (keyboard.keys[keyboard.RIGHT] || keyboard.keys[keyboard.D]) {
        player.x++;
    }
    if (player.x < 0) player.x = 0;
    if (player.x > map.width * gfx.outputTileSize) player.x = map.width * gfx.outputTileSize;
    if (player.y < 0) player.y = 0;
    if (player.y > map.height * gfx.outputTileSize) player.y = map.height * gfx.outputTileSize;
    render();
}

let drawMap = () => {
    let renderWidth = Math.ceil(canvas.width / gfx.outputTileSize),
        renderHeight = Math.ceil(canvas.height / gfx.outputTileSize);

    let playerTileY = Math.floor(player.y / gfx.outputTileSize);
        playerTileX = Math.floor(player.x / gfx.outputTileSize);
    for(let y = 0; y < renderHeight + 1; y++) {
        for(let x = 0; x < renderWidth + 1; x++) {
            let tx = player.x/64 + x - Math.floor(renderWidth/2),
                ty = player.y/64 + y - Math.floor(renderHeight/2),
                tileX = Math.floor(tx / gfx.outputTileSize),
                tileY = Math.floor(ty / gfx.outputTileSize);
            if (map.map[tileY] && map.map[tileY][tileX] != undefined) {
                gfx.drawTile(ctx, map.map[tileY][tileX], {x: x * gfx.outputTileSize - player.x % gfx.outputTileSize, y: y * gfx.outputTileSize - player.y % gfx.outputTileSize});
            }
            else
                gfx.drawTile(ctx, 'sand', {x: x * gfx.outputTileSize, y: y * gfx.outputTileSize})
        }
    }
    gfx.drawPlayer(canvas, ctx);
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