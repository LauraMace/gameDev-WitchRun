class StartScreen {
  constructor() {
  }
  
  draw() {
    this._bgImage();
    this._title();
    this._introButton();
  }
  
  _bgImage() {
    image(imgStartScreen, 0, 0, width, height);
  }
  
  _title() {
    textFont(fontTitle);
    textAlign(CENTER);

    textSize(55)
    text('The Great', width/2, 1.6*height/8);
    
    textSize(90)
    text('Rescue', width/2, 3*height/8);
  }
  
  _introButton() {
      introButton.draw();
  }
}

class IntroScreen {
  constructor() {
    startButton = new Start("Let's go", 1.25*width/5, 3.8*height/5);
  }
  
  draw() {
    this._bgImage();
    image(imgWitchIntro, 1.9*width/5 - imgWitchVictory.width, 0);
    image(imgWolfIntro, 3*width/5, 2.4*height/5);
    this._context();
    this._startButton();
  }
  
  _bgImage() {
    image(imgStartScreen, 0, 0, width, height);
  }
  
  _context() {
    textFont(fontTitle);
    textAlign(CENTER);

    textSize(30)
    fill('black');
    text('The young Wolf Cub', 3.5*width/5, 0.9*height/8)
    text('is lost in the Forest!', 3.5*width/5, 1.35*height/8);
    
    textSize(27)
    text('Help the Witch', 3.5*width/5, 1.6*height/6);
    text('rescue her Familiar', 3.5*width/5, 1.9*height/6);
    
    textSize(27)
    fill('white');
    text('Use the ArrowUp key to jump and', 1.7*width/5, 3.8*height/6);
    text('avoid the Creatures of the Forest', 1.7*width/5, 4.1*height/6);
  }
    
  _startButton() {
      startButton.draw();
  }
}