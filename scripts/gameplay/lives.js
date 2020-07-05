class Lives {
  constructor(maximum, starter) {
    this.maximum = maximum;
    this.starter = starter;
    this.lives = this.starter;
    
    this.largura = 30;
    this.altura = 30;
    this.spacingX = 21;
    this.y = 21;
  }
  
  draw() {
    for(let i=0; i < this.lives; i++) {
      const deltaX = i * 20;
      const tab = this.spacingX * (i+1);
      
      image(imgLife, tab + deltaX, this.y, this.largura, this.altura);
    }
  }
  
  gainLife() {
    if(this.lives < this.maximum) {
      this.lives++; 
    }
  }
  
  loseLife() {
    this.lives--;
  }
}
