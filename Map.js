class Map {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.map = [];
        for (var i = 0; i < this.width; i++){
            let row = [];
            for (var j = 0; j < this.height; j++){
                row[j] = 'bigGrass';
            }
            this.map.push(row);
        }
    };

}