class Gameplay {
  constructor() {
    this.index = 1;
    this.map = cartridge.map;
  }

  setup() {
    scenario1 = new Scenario(imgSky, 1.5);
    scenario2 = new Scenario(imgBack, 1.8);
    scenario3 = new Scenario(imgMiddle, 2.2);
    scenario4 = new Scenario(imgFront, 2.7);
    scenario5 = new Scenario(imgGround, 3);

    score = new Score();
    lives = new Lives(cartridge.config.maximumLives, cartridge.config.starterLives);

    witch = new Witch(matrixWitch, imgWitch, 24, 42, 110, 135, 220, 270);
    wolf = new Enemy(matrixWolf, imgWolf, width, 39, 125, 100, 250, 200, 3.2);
    
    poring = new Enemy(matrixPoring, imgPoring, width - 52, 39, 52, 52, 104, 104, 10);
    winged = new Enemy(matrixWinged, imgWinged, width - 60, 200, 100, 75, 200, 150, 18);
    troll = new Enemy(matrixTroll, imgTroll, width - 90, 3, 180, 200, 400, 400, 9);

    enemies.push(wolf);
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
    scenario1.show();
    scenario1.move();
    scenario2.show();
    scenario2.move();
    scenario3.show();
    scenario3.move();
    scenario4.show();
    scenario4.move();
    scenario5.show();
    scenario5.move();

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

    if (currentVisible) {
      if (enemy.spritesheet == imgWinged) {
        enemy.y = parseInt(random(3*height/5 - 12 * lives.milestone, 3*height/5 + 12 * lives.milestone));
        console.log("minY", 3*height/5 - 12 * lives.milestone, "maxY", 3*height/5 + 12 * lives.milestone, "y", enemy.y);
      } 
      else {console.log("y", enemy.y);}

      this.index++;
      if (lives.milestone == 8) {
        this.index = 0;
      }
      if (this.index >= this.map.length) {
        this.index = 1;
      }
      
      enemy.spawn();

      enemy.speedX = parseInt(random(currentLine.speedX - 3 + lives.milestone, currentLine.speedX + 3 + lives.milestone));
      console.log("min", currentLine.speedX - 3 + lives.milestone, "max", currentLine.speedX + 3 + lives.milestone, "speedX", enemy.speedX);
    }

    if (witch.collision(enemy)) {
      if (this.index == 0) {
        currentStatus = 'theEndScreen';
        soundtrack.stop();
        victorySound.play();
      } 
      else {
        lives.loseLife();
        loseLifeSound.play();
        witch.isImmune();

        if (lives.lives === 0) {
          currentStatus = 'gameOverScreen';
          soundtrack.stop();
          gameOverSound.play();
          enemy.x = -enemy.largura;
          this.index = 1;
          againButton = new Again('Try again', width/2, 3.7*height/5);
        }
      }
    }
  }
}
