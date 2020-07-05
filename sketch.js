function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(36);
  startScreen = new StartScreen();
  gameplay = new Gameplay();
  gameplay.setup();
  status = {
    startScreen,
    gameplay,
  };
  manager = new Manager('Start', width/2, height/2);
}

function keyPressed() {
  gameplay.keyPressed(key);
}

function draw() {
  status[currentStatus].draw();
}
