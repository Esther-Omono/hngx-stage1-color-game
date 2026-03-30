export class gameState {
  constructor() {
    this.score = 0;
    this.colors = [];
    this.targetColor = '';
  }

  incrementScore() {
    this.score++;
    return this.score;
  }

  resetScore() {
    this.score = 0;
    return this.score;
  }

  setColors(colors) {
    this.colors = colors;
  }

  setTargetColor(color) {
    this.targetColor = color;
  }

  isCorrectGuess(color) {
    return color === this.targetColor;
  }

  getScore() {
    return this.score;
  }

  getColors() {
    return this.colors;
  }

  getTargetColor() {
    return this.targetColor;
  }
}
