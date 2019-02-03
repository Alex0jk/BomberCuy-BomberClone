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
                if (offsetX <= 530 && offsetY <= 530) {
                    var block = createSprite(offsetX, offsetY, 40, 40);
                    block.addAnimation('normal', 'assets/map_sprites/block.png');
                    this.blocks.add(block);
                    rand = Math.floor(Math.random() * (+4 - +1)) + +1;
                    offsetY = offsetY + 50 * rand;
                }

            }
            rand = Math.floor(Math.random() * (+4 - +1)) + +1;
            offsetX = offsetX + 50 * rand;
            
        }
    }
    change_positions(){
        var offsetX = 100;
        var offsetY = 100;
        var rand = 1;
        for(var i = 0; i < this.blocks.length; i++){
            for (var r = 0; r < this.rows; r++) {
                offsetY = 100;
                for (var c = 0; c < this.columns; c++) {
                    if (offsetX < 500 && offsetY < 500) {
                        if(i>=this.blocks.length) return;
                        this.blocks[i].position.x=offsetX;
                        this.blocks[i].position.y=offsetY;
                        rand = Math.floor(Math.random() * (+4 - +1)) + +1;
                        offsetY = offsetY + 50 * rand;
                        i++;
                    }    
                }
                rand = Math.floor(Math.random() * (+4 - +1)) + +1;
                offsetX = offsetX + 50 * rand;              
            }
        }
    }
}