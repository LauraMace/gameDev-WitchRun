class Witch extends Animation {
  constructor(matrix, character, x, deltaY, largura, altura, larguraSprite, alturaSprite){
    super(matrix, character, x, deltaY, largura, altura, larguraSprite, alturaSprite);
    this.yChao = height - this.altura - this.deltaY;
    this.y = this.yChao;
    
    this.speedY = 0;
    this.gravidade = 4;
    this.impulseY = -45;
    this.jumps = 0;
  }
  
  jump() {
    if(this.jumps < 2) {
      this.speedY = this.impulseY;
	  jumpSound.play();
      this.jumps++;
    }
  }
  
  drop() {
    this.y = this.y + this.speedY;
    this.speedY = this.speedY + this.gravidade;
    
    if(this.y > this.yChao) {
      this.y = this.yChao;
      this.jumps = 0;
    }
  }
  
  collision(enemy) {
    const margemX = .65;
    const margemY = .64;
    const collide = collideRectRect(
      this.x, 
      this.y, 
      this.largura * margemX, 
      this.altura * margemY,
      enemy.x,
      enemy.y,
      enemy.largura * margemX,
      enemy.altura * margemY
    );
    return collide;
  }
}