class Enemy extends Animation {
  constructor(matrix, spritesheet, x, deltaY, largura, altura, larguraSprite, alturaSprite, speedX) {
    super(matrix, spritesheet, x, deltaY, largura, altura, larguraSprite, alturaSprite)
    
    this.speedX = speedX;
    this.x = width;
  }
  
  move() {
    this.x = this.x - this.speedX;
  }
  
  spawn() {
    this.x = width;
  }
}