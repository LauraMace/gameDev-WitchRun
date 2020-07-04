class Score {
  constructor() {
    this.points = 0;
  }
  
  show() {
    textSize(54);
    fill('fff');
    textAlign(RIGHT);
    text(parseInt(this.points), width -30, 60); 
  }
  
  score() {
      this.points = this.points + 0.2;
  }
}