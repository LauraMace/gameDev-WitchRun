class Again {
  constructor(text, x, y) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.button = createButton(this.text);
    this.button.addClass('startButton');
    this.button.mousePressed(() => this._changeStatus());
  }
  
  draw() {
    this.button.position(this.x, this.y);
    this.button.center('horizontal');
  }
  
  _changeStatus() {
    this.button.remove();
    gameplay.setup();
    
    witch = new Witch(matrixWitch, imgWitch, 2, 30, 110, 135, 220, 270);
    currentStatus = 'gameplay';
  }
}