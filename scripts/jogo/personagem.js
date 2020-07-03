class Personagem extends Animacao {
  constructor(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite) {
    super(matriz, imagem, x, largura, altura, larguraSprite, alturaSprite);
    
    this.yChao = height - this.altura;
    this.y = this.yChao;
    
    this.velocidadeDoPulo = 0;
    this.gravidade = 3;
  }
  
  pula() {
    this.velocidadeDoPulo = - 30;
    /*if(this.y < 0) {
      this.y = 0;
    }*/
  }
  
  cai() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    
    if(this.y > this.yChao) {
      this.y = this.yChao;
    }
  }
  
  colide(inimigo) {
    const margem = .68;
    const colisao = collideRectRect(
      this.x, 
      this.y, 
      this.largura * margem, 
      this.altura * margem,
      inimigo.x,
      inimigo.y,
      inimigo.largura * margem,
      inimigo.altura * margem
    );
    
    return colisao;
  }
}