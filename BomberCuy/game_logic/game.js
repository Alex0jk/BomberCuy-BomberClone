//Declaracion de todas las variables de juego
var player;
var enemyGroup;
var WALL_THICKNESS = 30;
var plased_bomb = false;
var explosions;
var x_bomb;
var y_bomb;
var walls;
var has_powerup;
var enemy1;
var enemy2;
var enemy3;
var enemy4;
var map;
var score = 0;
var level = 1;
var enemy_count = 4;
var init_flag = true;

function preload() {
    //Para la carga de assets al juego

}

function setup() {
    //Para la inicializacion de todos los elementos del juego
    createCanvas(600, 600);
    map = new Map(12, 12)
    player = new Cuy();
    enemyGroup = new Group();
    explosions = new Group();
    enemy1 = new Enemy(100, 100);
    enemy2 = new Enemy(100, 100);
    enemy3 = new Enemy(100, 100);
    enemy4 = new Enemy(100, 100);

    enemyGroup.add(enemy1.enemy);
    enemyGroup.add(enemy2.enemy);
    enemyGroup.add(enemy3.enemy);
    enemyGroup.add(enemy4.enemy);

    //las paredes
    wallTop = createSprite(width / 2, -WALL_THICKNESS / 2, width + WALL_THICKNESS * 2, WALL_THICKNESS);
    wallTop.immovable = true;
    wallBottom = createSprite(width / 2, height + WALL_THICKNESS / 2, width + WALL_THICKNESS * 2, WALL_THICKNESS);
    wallBottom.immovable = true;
    wallLeft = createSprite(-WALL_THICKNESS / 2, height / 2, WALL_THICKNESS, height);
    wallLeft.immovable = true;
    wallRight = createSprite(width + WALL_THICKNESS / 2, height / 2, WALL_THICKNESS, height);
    wallRight.immovable = true;
    wallTopU = createSprite(width / 2, -WALL_THICKNESS / 4, width + WALL_THICKNESS * 2, WALL_THICKNESS);
    wallTopU.immovable = true;
    wallBottomU = createSprite(width / 2, height + WALL_THICKNESS / 4, width + WALL_THICKNESS * 2, WALL_THICKNESS);
    wallBottomU.immovable = true;
    wallLeftU = createSprite(-WALL_THICKNESS / 4, height / 2, WALL_THICKNESS, height);
    wallLeftU.immovable = true;
    wallRightU = createSprite(width + WALL_THICKNESS / 4, height / 2, WALL_THICKNESS, height);
    wallRightU.immovable = true;
}

function draw() {
    //Ciclo de juego/ aqui ocurre todo
    background(50);
    fill(255);
    noStroke();
    textSize(30);
    textAlign(CENTER, CENTER);
    text(score, width - 30, 20);
    player.check_movement();
    enemy1.enemy_movement();
    enemy2.enemy_movement();
    enemy3.enemy_movement();
    enemy4.enemy_movement();
    player.check_collision();
    if (explosions.length > 0) {
        player.check_explotion();
        enemy1.check_explotion();
        enemy2.check_explotion();
        enemy3.check_explotion();
        enemy4.check_explotion();
        wallTop.overlap(explosions, removeExp);
        wallBottom.overlap(explosions, removeExp);
        wallLeft.overlap(explosions, removeExp);
        wallRight.overlap(explosions, removeExp);
        map.blocks.overlap(explosions, removeExp);
    }
    if (player.player.overlap(enemyGroup)) {
        player.player.position.y = height - 50;
        player.player.position.x = width - 50;
        resetGame();

    }
    if (enemy_count <= 0) {
        level = level + 1;
        map = new Map(12, 12)
        player.player.remove();
        player = new Cuy();


        enemy1 = new Enemy(100, 100);
        enemy2 = new Enemy(100, 100);
        enemy3 = new Enemy(100, 100);
        enemy4 = new Enemy(100, 100);

        enemyGroup.add(enemy1.enemy);
        enemyGroup.add(enemy2.enemy);
        enemyGroup.add(enemy3.enemy);
        enemyGroup.add(enemy4.enemy);
        enemy_count = 4;
    }
    drawSprites();
}

function keyPressed() {
    player.player_movement();
    player.player_bomb();
}

function removeExp(wall, explosion) {
    explosion.remove();
}

function resetGame() {
    score = 0;
    level = 1;


}