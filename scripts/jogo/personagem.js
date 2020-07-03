class Personagem extends Animacao {
  constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
    super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
    this.yChao = height - this.altura - this.variacaoY;
    this.y = this.yChao;
    
    this.velocidadeDoPulo = 0;
    this.gravidade = 5;
    this.alturaDoPulo = -45;
    this.pulos = 0;
  }
  
  pula() {
    if(this.pulos < 3) {
      this.velocidadeDoPulo = this.alturaDoPulo;
      this.pulos++;
    }
  }
  
  cai() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
    if(this.y > this.yChao) {
      this.y = this.yChao;
      this.pulos = 0;
    }
  }
  
  colide(inimigo) {
    const bordaX = .65;
    const bordaY = .64;
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * bordaX, 
      this.altura * bordaY,
      inimigo.x,
      inimigo.y,
      inimigo.largura * bordaX,
      inimigo.altura * bordaY
    );
    return colisao;
  }
}