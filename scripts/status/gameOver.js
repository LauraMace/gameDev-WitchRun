class GameOver {
  constructor() {
  }
  
  draw() {
    background('black');
    image(imgWolfDefeat, width/2 - 150, 1.35*height/4);
    image(imgGameOver, width/2 - 200, 0.8*height/5);
    this._againButton();
  }
  
  _againButton() {
    againButton.draw();
  }
}