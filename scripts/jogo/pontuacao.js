class Pontuacao {
  constructor() {
    this.pontos = 0;
  }
  
  exibe() {
    textSize(54);
    fill('fff');
    textAlign(RIGHT);
    text(parseInt(this.pontos), width -30, 60); 
  }
  
  pontua() {
      this.pontos = this.pontos + 0.2;
  }
}