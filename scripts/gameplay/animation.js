class Animation {
  constructor(matrix, sprites, x, deltaY, largura, altura, larguraSprite, alturaSprite){
    this.matrix = matrix;
    this.sprites = sprites;
    this.largura = largura;
    this.altura = altura;
    this.x = x;
    this.deltaY = deltaY;
    this.y = height - this.altura - this.deltaY;
    this.larguraSprite = larguraSprite;
    this.alturaSprite = alturaSprite;
    
    this.frameAtual = 0;
  }
  
  show() {
    image(this.sprites, this.x, this.y, this.largura, this.altura, this.matrix[this.frameAtual][0], this.matrix[this.frameAtual][1], this.larguraSprite, this.alturaSprite);
    
    this.animate();
  }
  
  animate() {
    this.frameAtual++;
    
    if(this.frameAtual >= this.matrix.length){
      this.frameAtual = 0;
    }
  }
}