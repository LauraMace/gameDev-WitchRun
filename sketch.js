function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(36);
  startScreen = new StartScreen();
  introScreen = new IntroScreen();
  gameplay = new Gameplay();
  gameOverScreen = new GameOver();
  theEndScreen = new TheEnd();

  gameplay.setup();
  
  status = {
    startScreen,
    introScreen,
    gameplay,
    gameOverScreen,
    theEndScreen
  };
  
  introButton = new Intro('Start', width/2, height/2);
}

function keyPressed() {
  gameplay.keyPressed(key);
}

function draw() {
  status[currentStatus].draw();
}