class PowerUp{
    constructor(q){
        this.pups=new Group();
        this.creation(q);
    }
    change_positions(q){
        console.log(this.pups.length);
        if(this.pups.length<=q) this.creation(q-this.pups.length);
        for(var i = 0; i < this.pups.length; i++){
            this.pups[i].position.x=random(width);
            this.pups[i].position.y=random(height);
        }
        
    }
    creation(q){
        for (var r  = 0; r < q; r++) {
            var b = createSprite(random(width),random(height), 10, 10);
            while(b.overlap(map.blocks)){
                b.remove();
                b = createSprite(random(width),random(height), 10, 10);
            }
            this.pups.add(b);
        } 
    }
    check_position(){
        this.pups.overlap(map.blocks,adjust_postion);
    }
    
}