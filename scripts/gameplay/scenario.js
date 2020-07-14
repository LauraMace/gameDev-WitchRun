class Scenario {
  constructor(backdrop, speedX) {
    this.backdrop = backdrop;
    this.speedX = speedX;
    this.x1 = 0;
    this.x2 = width;
  }
  
  show() {
    image(this.backdrop, this.x1, 0, width, height);
    image(this.backdrop, this.x2, 0, width, height);
  }
  
  move() {
    this.x1 = this.x1 - this.speedX;
    this.x2 = this.x2 - this.speedX;
    
    if (this.x1 < -width+this.speedX){
      this.x1 = width;
    }
    if (this.x2 < -width+this.speedX){
      this.x2 = width;
    }
  }
}