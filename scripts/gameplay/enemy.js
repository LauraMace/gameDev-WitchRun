class Enemy extends Animation {
  constructor(matrix, sprites, x, deltaY, largura, altura, larguraSprite, alturaSprite, speedX, delay) {
    super(matrix, sprites, x, deltaY, largura, altura, larguraSprite, alturaSprite)
  
    this.speedX = speedX;
    this.delay = delay;
    this.x = width + this.delay;
  }
  
  move() {
    this.x = this.x - this.speedX;
    
    if(this.x < -this.largura - this.delay){
      this.x = width;
    }
  }
}