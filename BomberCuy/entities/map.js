class Map {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.blocks = new Group();
        var offsetX = 100;
        var offsetY = 100;
        var rand = 1;
        for (var r = 0; r < this.rows; r++) {
            offsetY = 100;
            for (var c = 0; c < this.columns; c++) {
                if (offsetX < 500 && offsetY < 500) {
                    var block = createSprite(offsetX, offsetY, 50, 50);
                    this.blocks.add(block);
                    rand = Math.floor(Math.random() * (+4 - +1)) + +1;
                    offsetY = offsetY + 50 * rand;
                }

            }
            rand = Math.floor(Math.random() * (+4 - +1)) + +1;
            offsetX = offsetX + 50 * rand;
            
        }
    }
}