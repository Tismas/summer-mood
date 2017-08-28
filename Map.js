class Map {
    constructor() {
        this.w = 5; 
        this.h = 5;   
        this.map = [];
        for (var i = 0; i < this.w; i++){
                let row = [];
                for (var j = 0; j < this.h; j++){
                    row[j] = 0;
                }
                this.map.push(row);
            }
    };

}