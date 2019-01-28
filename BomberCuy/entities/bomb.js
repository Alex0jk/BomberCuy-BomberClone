class Bomb {
    constructor(x, y) {
        //bomb setup
        plased_bomb = true;
        this.bomb = createSprite(width / 2, height / 2, 50, 50);
        this.bomb.addAnimation('normal', 'assets/bomb_sprites/bomb.gif');
        this.bomb.position.x = x;
        this.bomb.position.y = y;
        this.bomb.depth = 0;
        this.bomb.onLiveIsOver = this.reset_plased_bomb;
        this.bomb.life = 120;
        x_bomb = x;
        y_bomb = y;
    }
    reset_plased_bomb() {
        plased_bomb = false;
        //make explosion
        console.log(x_bomb, y_bomb);
        explotion(has_powerup, x_bomb, y_bomb);
    }
}