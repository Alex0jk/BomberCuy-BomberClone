function explotion(power_up, x, y) {
    var rows = 2;
    var exp = createSprite(x, y, 35, 35);
    exp.addAnimation('normal', 'assets/bomb_sprites/tile000.png');
    exp.onLiveIsOver = new function(){ has_powerup =false; on_overlaping=true;}
    exp.life = 30;
    if (power_up) rows = 3;
    explosions = new Group();
    explosions.add(exp);
    console.log(x, y);
    for (var r = 1; r < rows; r++) {
        var exp1 = createSprite(x, y - 35 * r, 35, 35);
        exp1.addAnimation('normal', 'assets/bomb_sprites/tile001.png');
        exp1.onLiveIsOver = new function(){ has_powerup =false;}
        exp1.life = 30;
        var exp2 = createSprite(x, y + 35 * r, 35, 35);
        exp2.addAnimation('normal', 'assets/bomb_sprites/tile001.png');
        exp2.onLiveIsOver = new function(){ has_powerup =false;}
        exp2.life = 30;
        var exp3 = createSprite(x - 35 * r, y, 35, 35);
        exp3.addAnimation('normal', 'assets/bomb_sprites/tile002.png');
        exp3.onLiveIsOver = new function(){ has_powerup =false;}
        exp3.life = 30;
        var exp4 = createSprite(x + 35 * r, y, 35, 35);
        exp4.addAnimation('normal', 'assets/bomb_sprites/tile002.png');
        exp4.onLiveIsOver = new function(){ has_powerup =false;}
        exp4.life = 30;
        explosions.add(exp1);
        explosions.add(exp2);
        explosions.add(exp3);
        explosions.add(exp4);
    }
}

