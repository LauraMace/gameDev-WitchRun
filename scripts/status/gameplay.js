class Gameplay {
  constructor() {
    this.currentEnemy = 0;
  }

  setup() {
    scenario = new Scenario(imgScenario, 3);
    //soundtrack.loop();
    score = new Score();
    lives = new Lives(3, 3);

    witch = new Witch(matrixWitch, imgWitch, 2, 30, 110, 135, 220, 270);

    poring = new Enemy(matrixPoring, imgPoring, width - 52, 30, 52, 52, 104, 104, 10, 30);
    winged = new Enemy(matrixWinged, imgWinged, width - 52, 210, 100, 75, 200, 150, 18, 30);
    troll = new Enemy(matrixTroll, imgTroll, width - 26, 9, 180, 200, 400, 400, 9, 30);

    enemies.push(poring);
    enemies.push(winged);
    enemies.push(troll);
  }

  keyPressed(key) {
    if (key === 'ArrowUp') {
      witch.jump();
    }
  }
  
  draw() {
    scenario.show();
    scenario.move();
    
    lives.draw();
    score.show();
    score.score();

    witch.show();
    witch.drop();

    const enemy = enemies[this.currentEnemy];
    const currentVisible = enemy.x < -enemy.largura;

    enemy.show()
    enemy.move()

    if(currentVisible){
       this.currentEnemy++;
      
      if(this.currentEnemy > 2){
        this.currentEnemy = 0;
      }

      enemy.speedX = parseInt(random(9,27));
    }

    if (witch.collision(enemy)) {
      lives.loseLife();
      witch.isImmune();
      
      if(lives.lives === 0) {
        image(imgGameOver, width/2 - 200, height/3 +24);
        gameOverSound.play();
        noLoop();
      }
    }
  }
}