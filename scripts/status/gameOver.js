class GameOver {
  constructor(){
  }
  
  draw(){
    background('black');
    image(imgGameOver, width/2 - 200, height/3 +24);
    this._againButton();
  }
  
  _againButton(){
    againButton.y = 3.5*height/5;
    againButton.draw();
  }
}