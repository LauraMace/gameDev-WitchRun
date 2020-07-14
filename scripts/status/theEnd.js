class TheEnd {
  constructor() {
  }
  
  draw() {
    this._bgImage();
    image(imgWitchVictory, width/2 - imgWitchVictory.width, 2*height/4);
    image(imgWolfVictory, width/2, 2*height/4+5);
    this._ending();
  }
  
  _bgImage() {
    image(imgStartScreen, 0, 0, width, height);
  }
  
  _ending() {
    textFont(fontTitle);
    textAlign(CENTER);
    fill('black');

    textSize(65)
    text('The End', width/2, 1.5*height/8);
    
    textSize(29)
    text('The Witch and her Familiar', width/2, 2.55*height/8);
    textSize(36)
    text('have been reunited!', width/2, 3.1*height/8);
  }
}