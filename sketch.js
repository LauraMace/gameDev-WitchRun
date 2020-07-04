let imgScenario;
let imgGameOver;
let imgWitch;

let imgPoring;
let imgWinged;
let imgTroll;

let scenario;
let witch;
let poring;
let winged;
let troll;

let score;
let soundtrack;
let jumpSound;

const matrixWitch = [
  [0, 0],
  [220, 0],
  [440, 0],
  [660, 0],
  [0, 270],
  [220, 270],
  [440, 270],
  [660, 270],
  [0, 540],
  [220, 540],
  [440, 540],
  [660, 540],
  [0, 810],
  [220, 810],
  [440, 810],
  [660, 810],
]
const matrixPoring = [
  [0, 0],
  [104, 0],
  [208, 0],
  [312, 0],
  [0, 104],
  [104, 104],
  [208, 104],
  [312, 104],
  [0, 208],
  [104, 208],
  [208, 208],
  [312, 208],
  [0, 312],
  [104, 312],
  [208, 312],
  [312, 312],
  [0, 418],
  [104, 418],
  [208, 418],
  [312, 418],
  [0, 522],
  [104, 522],
  [208, 522],
  [312, 522],
  [0, 626],
  [104, 626],
  [208, 626],
  [312, 626],
]
const matrixTroll = [
  [0,0],
  [400,0],
  [800,0],
  [1200,0],
  [1600,0],
  [0,400],
  [400,400],
  [800,400],
  [1200, 400],
  [1600, 400],
  [0,800],
  [400, 800],
  [800, 800],
  [1200, 800],
  [1600, 800],
  [0, 1200],
  [400, 1200],
  [800, 1200],
  [1200, 1200],
  [1600, 1200], 
  [0, 1600],
  [400, 1600],
  [800, 1600],
  [1200, 1600],
  [1600, 1600],
  [0, 2000],
  [400, 2000],
  [800, 2000],
]
const matrixWinged = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
]

const enemies = []

let currentEnemy = 0;

function preload() {
  imgScenario = loadImage('pictures/scenario/forest.png');
  imgGameOver = loadImage('pictures/assets/gameOver.png');
  imgWitch = loadImage('pictures/character/witch.png');
  imgPoring = loadImage('pictures/enemies/poring.png');
  imgTroll = loadImage('pictures/enemies/troll.png');
  imgWinged = loadImage('pictures/enemies/winged.png');
  soundtrack = loadSound('sounds/soundtrack.mp3');
  jumpSound = loadSound('sounds/jump.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario(imgScenario, 3);
  score = new Score();
  
  witch = new Witch(matrixWitch, imgWitch, 0, 24, 110, 135, 220, 270);
  
  poring = new Enemy(matrixPoring, imgPoring, width - 52, 22, 52, 52, 104, 104, 10, 30);
  winged = new Enemy(matrixWinged, imgWinged, width - 52, 180, 100, 75, 200, 150, 18, 30);
  troll = new Enemy(matrixTroll, imgTroll, width - 26, 20, 180, 200, 400, 400, 9, 30);
  
  enemies.push(poring);
  enemies.push(winged);
  enemies.push(troll);

  
  frameRate(36);
  //soundtrack.loop();
}

function keyPressed() {
  if(key === 'ArrowUp') {
    witch.jump();
  }
}

function draw() {
  scenario.show();
  scenario.move();
  
  score.show();
  score.score();

  witch.show();
  witch.drop();
  
  const enemy = enemies[currentEnemy];
  const currentVisible = enemy.x < -enemy.largura;

  enemy.show()
  enemy.move()
  
  if(currentVisible){
     currentEnemy++;
    if(currentEnemy > 2){
      currentEnemy = 0;
    }
    
    enemy.speedX = parseInt(random(9,27));
  }
    
  if (witch.collision(enemy)) {
    image(imgGameOver, width/2 - 200, height/3 +24);  
    noLoop();
  }
}
