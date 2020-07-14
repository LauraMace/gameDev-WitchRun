class StartScreen {
  constructor() {
  }
  
  draw() {
    this._bgImage();
    this._title();
    this._startButton();
  }
  
  _bgImage() {
    image(imgStartScreen, 0, 0, width, height);
  }
  
  _title() {
    textFont(fontTitle);
    textAlign(CENTER);

    textSize(60)
    text('The Great', width/2, 1.5*height/8);
    
    textSize(120)
    text('Rescue', width/2, 3*height/8);
  }
  
  _startButton() {
      startButton.y = 3.5*height/5;
      startButton.draw();
  }
}