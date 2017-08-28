class Graphics {
    constructor() {
        this.sourceTileSize = 64;
        this.outputTileSize = 64;
        this.tilesColumnsCount = 0;
        this.tilesRowsCount = 0;
        this.images = {
            tileset: new Image(),
            player: new Image()
        };

        this.images.tileset.onload = this.initSizes.bind(this);

        this.images.tileset.src = 'assets/tileset.png';
        this.images.player.src = 'assets/player.png';
    
        this.tiles = {
            grass: 0,
            bigGrass: 1,
            sand: 2
        }
    }

    initSizes() {
        this.tilesColumnsCount = this.images.tileset.width / this.sourceTileSize;
        this.tilesRowsCount = this.images.tileset.height / this.sourceTileSize;
    }

    drawTile(ctx, tile, position) {
        let index;
        if (typeof tile == 'number')
            index = tile;
        else
            index = this.tiles[tile];
        let x = index % this.tilesColumnsCount,
            y = Math.floor(index / this.tilesRowsCount);
        
        ctx.drawImage(this.images.tileset, x * this.sourceTileSize, y * this.sourceTileSize, this.sourceTileSize, this.sourceTileSize,
                      position.x, position.y, this.outputTileSize, this.outputTileSize);
    }

    drawPlayer(canvas, ctx) {
        ctx.drawImage(this.images.player, this.sourceTileSize * 0, this.sourceTileSize * 3, this.sourceTileSize, this.sourceTileSize,
                      canvas.width/2, canvas.height/2 - 32, this.outputTileSize, this.outputTileSize);
    }
}