//Declaracion de todas las variables de juego
var player;
var WALL_THICKNESS = 30;
function preload(){
//Para la carga de assets al juego

}
function setup(){
    //Para la inicializacion de todos los elementos del juego
    createCanvas(600, 600);
    player = new Cuy();
    //las paredes
    wallTop = createSprite(width/2, -WALL_THICKNESS/2, width+WALL_THICKNESS*2, WALL_THICKNESS);
    wallTop.immovable = true;

    wallBottom = createSprite(width/2, height+WALL_THICKNESS/2, width+WALL_THICKNESS*2, WALL_THICKNESS);
    wallBottom.immovable = true;

    wallLeft = createSprite(-WALL_THICKNESS/2, height/2, WALL_THICKNESS, height);
    wallLeft.immovable = true;

    wallRight = createSprite(width+WALL_THICKNESS/2, height/2, WALL_THICKNESS, height);
    wallRight.immovable = true;
}
function draw(){
    //Ciclo de juego/ aqui ocurre todo
    background(50);
    player.check_movement();
    player.check_collision();
    drawSprites();
}
function keyPressed(){
    player.player_movement()
}