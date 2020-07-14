class Lives {
  constructor(maximum, starter) {
    this.maximum = maximum;
    this.starter = starter;
    this.lives = this.starter;
    this.milestone = 1;
    this.mark = 100;
    
    this.largura = 45;
    this.altura = 40;
    this.spacingX = 24;
    this.y = 24;
  }
  
  draw() {
    for(let i=0; i < this.lives; i++) {
      const deltaX = i * 20;
      const tab = this.spacingX * (i+1);
      
      image(imgLife, tab + deltaX, this.y, this.largura, this.altura);
    }
    
    //this.spritesheet, this.x, this.y, this.largura, this.altura, this.matrix[this.frameAtual][0], this.matrix[this.frameAtual][1], this.larguraSprite, this.alturaSprite
  }
  
  gainLife(points) {
    this.points = points;
        
    if(this.points - this.mark > 0){
      if(this.lives < this.maximum) {
        this.lives++;
      }
      successSound.play();
      this.milestone++;
      this.mark = 100 * this.milestone;
      console.log("milestone",this.milestone, "next mark",this.mark);
    }    
  }
  
  loseLife() {
    this.lives--;
  }
}
