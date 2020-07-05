class Manager {
  constructor(text, x, y) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.manager = createButton(this.text);
    this.manager.addClass('startButton');
    this.manager.mousePressed(() => this._changeStatus());
  }
  
  draw() {
    this.manager.position(this.x, this.y);
    this.manager.center('horizontal');
  }
  
  _changeStatus() {
    this.manager.remove();
    currentStatus = 'gameplay';
  }
}