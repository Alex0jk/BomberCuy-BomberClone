class Enemy {

    constructor(range_x, range_y) {
        this.enemy = createSprite(random(range_x),
            random(range_y), 50, 50);
        this.enemy.shapeColor = color(255);
        this.current_angle = 0;
        this.speed = 0.9;
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
        if (random() > 0.995) {
            this.current_angle = this.current_angle + 90;
        }
        this.enemy.setSpeed(this.speed, this.current_angle);
    }
}