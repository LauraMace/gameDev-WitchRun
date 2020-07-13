class Lives {
  constructor(maximum, starter) {
    this.maximum = maximum;
    this.starter = starter;
    this.lives = this.starter;
    this.milestone = 1;
    this.mark = 100;
    
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
  
  gainLife(points) {
    this.points = points;
        
    if(this.points - this.mark > 0){
      if(this.lives < this.maximum) {
        this.lives++;
      }
      successSound.play();
      this.milestone++;
      this.mark = 75 * this.milestone;
      console.log(this.milestone, this.mark);
    }    
  }
  
  loseLife() {
    this.lives--;
  }
}
