class Enemy {

    constructor(range_x, range_y) {
        this.enemy = createSprite(random(range_x),
            random(range_y), 40, 40);
        this.enemy.addAnimation('normal', 'assets/snake_sprites/tile_idle_f.png');
        this.enemy.addAnimation('idle_left', 'assets/snake_sprites/tile_idle_l.png');
        this.enemy.addAnimation('idle_right', 'assets/snake_sprites/tile_idle_r.png');
        this.enemy.addAnimation('idle_up', 'assets/snake_sprites/tile_idle_b.png');

        this.enemy.addAnimation('down', 'assets/snake_sprites/tile003.png', 'assets/snake_sprites/tile004.png', 'assets/snake_sprites/tile005.png');
        this.enemy.addAnimation('left', 'assets/snake_sprites/tile015.png', 'assets/snake_sprites/tile016.png', 'assets/snake_sprites/tile017.png');
        this.enemy.addAnimation('right', 'assets/snake_sprites/tile027.png', 'assets/snake_sprites/tile028.png', 'assets/snake_sprites/tile029.png');
        this.enemy.addAnimation('up', 'assets/snake_sprites/tile039.png', 'assets/snake_sprites/tile040.png', 'assets/snake_sprites/tile041.png');

        this.current_angle = 0;
        this.speed = (0.6 + level/3);
        this.health = 3;
        this.damage = 1;
    }

    enemy_movement() {

        if (this.enemy.collide(wallRightU)) {
            let posible_angles = [90, 180, 270];
            this.current_angle =
                posible_angles[posible_angles.length * Math.random() | 0]
        } else if (this.enemy.collide(wallBottomU)) {
            let posible_angles = [0, 180, 270];
            this.current_angle =
                posible_angles[posible_angles.length * Math.random() | 0]
        } else if (this.enemy.collide(wallLeftU)) {
            let posible_angles = [0, 90, 270];
            this.current_angle =
                posible_angles[posible_angles.length * Math.random() | 0]
        } else if (this.enemy.collide(wallTopU)) {
            let posible_angles = [90, 180, 0];
            this.current_angle =
                posible_angles[posible_angles.length * Math.random() | 0]
        }
        if (this.enemy.collide(map.blocks)) {
            let posible_angles = [270, 90, 180, 0];
            this.current_angle =
                posible_angles[posible_angles.length * Math.random() | 0]
        }
        if (random() > 0.995) {
            this.current_angle = (this.current_angle + 90) % 360;
        }
        if (this.current_angle === 0) {
            this.enemy.changeAnimation('right');
        } else if (this.current_angle === 90) {
            this.enemy.changeAnimation('down');
        } else if (this.current_angle === 180) {
            this.enemy.changeAnimation('left');
        } else if (this.current_angle === 270) {
            this.enemy.changeAnimation('up');
        }
        this.enemy.setSpeed(this.speed, this.current_angle);
    }
    check_explotion() {
        if (this.enemy.overlap(explosions)) {
            this.enemy.remove();
            score = score + level * 100
            enemy_count = enemy_count - 1;
        }
    }
}