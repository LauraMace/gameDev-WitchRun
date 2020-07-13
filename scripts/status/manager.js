class Start {
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
    gameplay = new Gameplay();
    gameplay.setup();
    this.button.remove();
    currentStatus = 'gameplay';
  }
}