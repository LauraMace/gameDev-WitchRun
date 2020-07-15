function preload() {
  fontTitle = loadFont('pictures/assets/startScreen.otf');
  cartridge = loadJSON('fita/fita.json');
  //cartridge = loadJSON('fita/fitaTeste.json');
  
  imgGround = loadImage('pictures/scenario/ground.png');
  imgFront = loadImage('pictures/scenario/forest.png');
  imgMiddle = loadImage('pictures/scenario/middle.png');
  imgBack = loadImage('pictures/scenario/back.png');
  imgSky = loadImage('pictures/scenario/sky.png');
  
  
  imgStartScreen  = loadImage('pictures/assets/startScreen.png');
  imgGameOver = loadImage('pictures/assets/gameOver.png');
  imgLife = loadImage('pictures/assets/life.png');
  
  imgWitch = loadImage('pictures/character/witch.png');
  imgWitchIntro  = loadImage('pictures/character/witchIntro.png');  
  imgWitchVictory = loadImage('pictures/character/witchVictory.png');
  
  imgWolf = loadImage('pictures/character/wolf.png');
  imgWolfIntro = loadImage('pictures/character/wolfIntro.png');
  imgWolfVictory = loadImage('pictures/character/wolfVictory.png');
  imgWolfDefeat = loadImage('pictures/character/wolfDefeat.png');
  
  imgPoring = loadImage('pictures/enemies/poring.png');
  imgTroll = loadImage('pictures/enemies/troll.png');
  imgWinged = loadImage('pictures/enemies/winged.png');
  
  soundtrack = loadSound('sounds/soundtrack.mp3');
  jumpSound = loadSound('sounds/jump.mp3');
  successSound = loadSound('sounds/success.mp3');
  loseLifeSound = loadSound('sounds/loseLife.mp3');
  victorySound = loadSound('sounds/victory.mp3');
  gameOverSound = loadSound('sounds/gameOver.mp3');
}