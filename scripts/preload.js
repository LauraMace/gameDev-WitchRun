function preload() {
  fontTitle = loadFont('pictures/assets/startScreen.otf');
  cartridge = loadJSON('fita/fita.json');
  
  imgStartScreen  = loadImage('pictures/assets/startScreen.png');
  imgScenario = loadImage('pictures/scenario/forest.png');
  imgGameOver = loadImage('pictures/assets/gameOver.png');
  imgLife = loadImage('pictures/assets/life.png');
  
  imgWitch = loadImage('pictures/character/witch.png');
  imgPoring = loadImage('pictures/enemies/poring.png');
  imgTroll = loadImage('pictures/enemies/troll.png');
  imgWinged = loadImage('pictures/enemies/winged.png');
  
  soundtrack = loadSound('sounds/soundtrack.mp3');
  jumpSound = loadSound('sounds/jump.mp3');
  successSound = loadSound('sounds/success.mp3');
  loseLifeSound = loadSound('sounds/loseLife.mp3');
  gameOverSound = loadSound('sounds/gameOver.mp3');
}