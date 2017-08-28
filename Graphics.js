class Graphics {
    constructor() {
        this.tileSize = 64;
        this.tilesColumnsCount = 0;
        this.tilesRowsCount = 0;
        this.images = {
            tileset: new Image(),
            player: new Image()
        };

        this.images.tileset.onload = this.initSizes;

        this.images.tileset.src = 'assets/tileset.png';
        this.images.player.src = 'assets/player.png';
    
        this.tiles = {
            grass: 0,
            bigGrass: 1
        }
    }

    initSizes() {
        this.tilesColumnsCount = this.images.tileset.width / this.tileSize;
        this.tilesRowsCount = this.images.tileset.height / this.tileSize;
    }

    drawTile(ctx, tileName, position) {
        let index = this.tiles[tileName],
            x = index % this.tilesColumnsCount,
            y = Math.floor(index / this.tilesRowsCount);
        
        ctx.drawImage(this.images.tileset, x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize,
                      position.x * this.tileSize, position.y * this.tileSize, this.tileSize, this.tileSize);
    }
}