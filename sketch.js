function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(36);
  startScreen = new StartScreen();
  gameplay = new Gameplay();
  gameOverScreen = new GameOver();
  gameplay.setup();
  
  status = {
    startScreen,
    gameplay,
    gameOverScreen,
  };
  
  startButton = new Start('Start', width/2, height/2);
}

function keyPressed() {
  gameplay.keyPressed(key);
}

function draw() {
  status[currentStatus].draw();
}