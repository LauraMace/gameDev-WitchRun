class Gameplay {
  constructor() {
    this.index = 0;
    this.map = [
      {
        enemy:0, speedX:10
      },
      {
        enemy:2, speedX:15
      },
      {
        enemy:2, speedX:36
      },
      {
        enemy:1, speedX:15
      }
    ];
  }

  setup() {
    scenario = new Scenario(imgScenario, 3);
    //soundtrack.loop();
    score = new Score();
    lives = new Lives(4, 3);

    witch = new Witch(matrixWitch, imgWitch, 2, 30, 110, 135, 220, 270);

    poring = new Enemy(matrixPoring, imgPoring, width - 52, 30, 52, 52, 104, 104, 10);
    winged = new Enemy(matrixWinged, imgWinged, width - 52, 210, 100, 75, 200, 150, 18);
    troll = new Enemy(matrixTroll, imgTroll, width - 26, 9, 180, 200, 400, 400, 9);

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
    lives.gainLife(score.points);

    witch.show();
    witch.drop();
    
    const currentLine = this.map[this.index];
    const enemy = enemies[currentLine.enemy];
    const currentVisible = enemy.x < -enemy.largura;

    enemy.show();
    enemy.move();

    if(currentVisible){
      this.index++;
      enemy.spawn();
      enemy.speedX = currentLine.speedX;
      
      if(this.index >= this.map.length) {
        this.index = 0;
      }
    }
    
    if(witch.collision(enemy)) {
      lives.loseLife();
      loseLifeSound.play();
      witch.isImmune();
      
      if(lives.lives === 0) {
        currentStatus = 'gameOverScreen';
        enemy.x = -enemy.largura;
        this.index = 0;
        againButton = new Again('Try again', width/2, height/2);
      }
    }
  }
}