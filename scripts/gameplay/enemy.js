class Enemy extends Animation {
  constructor(matrix, sprites, x, deltaY, largura, altura, larguraSprite, alturaSprite, speedX) {
    super(matrix, sprites, x, deltaY, largura, altura, larguraSprite, alturaSprite)
  
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