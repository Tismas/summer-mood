class Player {
    constructor() {
        let playerData = JSON.parse(localStorage['player'] || '{}')
        this.x = playerData.x || 0;
        this.y = playerData.y || 0;
    }
}