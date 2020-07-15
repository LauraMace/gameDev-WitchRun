class StartScreen {
  constructor() {
    startButton = new Start("Let's go", width/2, height/2);
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

    textSize(60)
    text('The Great', width/2, 1.6*height/8);
    
    textSize(120)
    text('Rescue', width/2, 3*height/8);
  }
  
  _introButton() {
      introButton.y = 3.5*height/5;
      introButton.draw();
  }
}

class IntroScreen {
  constructor() {
  }
  
  draw() {
    this._bgImage();
    image(imgWitchIntro, 1.9*width/5 - imgWitchVictory.width, 0.1*height/8);
    image(imgWolfIntro, 3*width/5, 2.75*height/5);
    this._context();
    this._startButton();
  }
  
  _bgImage() {
    image(imgStartScreen, 0, 0, width, height);
  }
  
  _context() {
    textFont(fontTitle);
    textAlign(CENTER);

    textSize(31)
    fill('black');
    text('The young Wolf Cub', 3.5*width/5, 0.9*height/8)
    text('is lost in the Forest!', 3.5*width/5, 1.35*height/8);
    
    textSize(27)
    text('Help the Witch', 3.5*width/5, 1.6*height/6);
    text('rescue her Familiar', 3.5*width/5, 1.9*height/6);
    
    textSize(27)
    fill('white');
    text('Use the ArrowUp key to jump and', 1.7*width/5, 3.7*height/6);
    text('avoid the Creatures of the Forest', 1.7*width/5, 4*height/6);
  }
    
  _startButton() {
      startButton.y = 3.85*height/5;
      startButton.x = 1.35*width/5;
      startButton.draw();
  }
}