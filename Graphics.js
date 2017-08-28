class Graphics {
    constructor() {
        this.sourceTileSize = 64;
        this.outputTileSize = 64;
        this.tilesColumnsCount = 0;
        this.tilesRowsCount = 0;
        this.images = {
            tileset: new Image(),
            // player: new Image()
        };

        this.images.tileset.onload = this.initSizes.bind(this);

        this.images.tileset.src = 'assets/tileset.png';
        // this.images.player.src = 'assets/player.png';
    
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

    drawTile(ctx, tileName, position) {
        let index = this.tiles[tileName],
            x = index % this.tilesColumnsCount,
            y = Math.floor(index / this.tilesRowsCount);
        
        ctx.drawImage(this.images.tileset, x * this.sourceTileSize, y * this.sourceTileSize, this.sourceTileSize, this.sourceTileSize,
                      position.x * this.outputTileSize, position.y * this.outputTileSize, this.outputTileSize, this.outputTileSize);
    }
}