class Cuy {
    constructor() {
        //la base
        this.player = createSprite(50, 50, 50, 50);
        //imagen estandar
        this.player.addAnimation('normal', 'assets/cuy_sprites/tile_idle_1.png');
        this.player.addAnimation('idle_left', 'assets/cuy_sprites/tile_idle_1.png');
        this.player.addAnimation('idle_right', 'assets/cuy_sprites/tile_idle_3.png');
        this.player.addAnimation('idle_up', 'assets/cuy_sprites/tile_idle_4.png');
        //las animaciones
        this.player.addAnimation('down', 'assets/cuy_sprites/tile000.png', 'assets/cuy_sprites/tile001.png', 'assets/cuy_sprites/tile002.png');
        this.player.addAnimation('left', 'assets/cuy_sprites/tile003.png', 'assets/cuy_sprites/tile004.png', 'assets/cuy_sprites/tile005.png');
        this.player.addAnimation('right', 'assets/cuy_sprites/tile006.png', 'assets/cuy_sprites/tile007.png', 'assets/cuy_sprites/tile008.png');
        this.player.addAnimation('up', 'assets/cuy_sprites/tile009.png', 'assets/cuy_sprites/tile010.png', 'assets/cuy_sprites/tile011.png');
        //power up
        has_powerup = false;

    }
    player_movement() {
        if (keyCode == RIGHT_ARROW) {
            this.player.setSpeed(1.5, 0);
            this.player.changeAnimation('right');
        } else if (keyCode == DOWN_ARROW) {
            this.player.setSpeed(1.5, 90);
            this.player.changeAnimation('down');
        } else if (keyCode == LEFT_ARROW) {
            this.player.setSpeed(1.5, 180);
            this.player.changeAnimation('left');
        } else if (keyCode == UP_ARROW) {
            this.player.setSpeed(1.5, 270);
            this.player.changeAnimation('up');
        }
    }
    player_bomb() {
        if (key === 'z' || key === 'Z') {
            if (plased_bomb == false) {
                this.bomb = new Bomb(this.player.position.x, this.player.position.y);
            }
        }
    }

    check_movement() {
        if ((keyWentUp(RIGHT_ARROW) || keyWentUp(DOWN_ARROW) || keyWentUp(LEFT_ARROW) || keyWentUp(UP_ARROW)) &&
            !(keyDown(RIGHT_ARROW) || keyDown(DOWN_ARROW) || keyDown(LEFT_ARROW) || keyDown(UP_ARROW))) {
            if (keyWentUp(RIGHT_ARROW)) {
                this.player.changeAnimation('idle_right');
            } else if (keyWentUp(DOWN_ARROW)) {
                this.player.changeAnimation('normal');
            } else if (keyWentUp(LEFT_ARROW)) {
                this.player.changeAnimation('idle_left');
            } else if (keyWentUp(UP_ARROW)) {
                this.player.changeAnimation('idle_up');
            }
            this.player.setSpeed(0, 0);
        }
    }
    check_collision() {
        this.player.collide(wallTopU);
        this.player.collide(wallBottomU);
        this.player.collide(wallLeftU);
        this.player.collide(wallRightU);
        if (this.player.overlap(enemyGroup)) {
            this.player.position.x = 50;
            this.player.position.y = 50;
        }
    }
    check_explotion() {
        if (this.player.overlap(explosions)) {
            this.player.position.x = 50;
            this.player.position.y = 50;
        }
    }

}