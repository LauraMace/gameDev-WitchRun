class Witch extends Animation {
  constructor(matrix, character, x, deltaY, largura, altura, larguraSprite, alturaSprite){
    super(matrix, character, x, deltaY, largura, altura, larguraSprite, alturaSprite);
    this.yChao = height - this.altura - this.deltaY;
    this.y = this.yChao;
    
    this.character = character;
    this.original = character;
    this.speedY = 0;
    this.gravidade = 4;
    this.impulseY = -40;
    this.jumps = 0;
    this.immunity = false;
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
  
  isImmune() {
    this.immunity = true;
    this.character.filter(INVERT);
    setTimeout(() => {
      this.immunity = false;
      this.character.filter(INVERT);
    }, 1250);
  }
  
  collision(enemy) {
    if(this.immunity) {
      return false;
    }
    
    const margemX = 0.65;
    const margemY = 0.64;
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