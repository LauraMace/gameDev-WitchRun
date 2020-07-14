function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(36);
  startScreen = new StartScreen();
  gameplay = new Gameplay();
  gameOverScreen = new GameOver();
  theEndScreen = new TheEnd();

  gameplay.setup();
  
  status = {
    startScreen,
    gameplay,
    gameOverScreen,
    theEndScreen
  };
  
  startButton = new Start('Start', width/2, height/2);
}

function keyPressed() {
  gameplay.keyPressed(key);
}

function draw() {
  status[currentStatus].draw();
}