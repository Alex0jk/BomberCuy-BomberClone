function explotion(power_up,x,y){
    var rows = 3;
    var exp = createSprite(x,y,50,50);
    exp.life=30;
    if(power_up) rows = 5;
    explosions=new Group();
    explosions.add(exp);
    console.log(x,y);
    for(var r = 1; r<rows; r++){
      var exp1 = createSprite(x,y-50*r,50,50);
      exp1.life=30;
      var exp2 = createSprite(x,y+50*r,50,50);
      exp2.life=30;
      var exp3 = createSprite(x-50*r,y,50,50);
      exp3.life=30;
      var exp4 = createSprite(x+50*r,y,50,50);
      exp4.life=30;
      explosions.add(exp1);
      explosions.add(exp2);
      explosions.add(exp3);
      explosions.add(exp4);
    }
    wallTop.overlap(explosions,removeExp);
    wallBottom.overlap(explosions,removeExp);
    wallLeft.overlap(explosions,removeExp);
    wallRight.overlap(explosions,removeExp);
    player.check_explotion();
}
function removeExp(wall,explosion){
    explosion.remove();
}