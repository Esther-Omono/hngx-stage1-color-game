export class gameUI {
  constructor() {
    // Check if all required elements exist
    const elements = {
      'game-status': null,
      score: null,
      'color-box': null,
      'color-options': null,
      'new-game-btn': null,
    };

    // Try to get all elements and track missing ones
    const missingElements = [];
    for (const [id, _] of Object.entries(elements)) {
      const element = document.getElementById(id);
      if (!element) {
        missingElements.push(id);
      }
      elements[id] = element;
    }

    // If any elements are missing, throw a descriptive error
    if (missingElements.length > 0) {
      throw new Error(
        `Missing required DOM elements: ${missingElements.join(', ')}`,
      );
    }

    this.gameStatus = document.getElementById('game-status');
    this.scoreElement = document.getElementById('score');
    this.colorBox = document.getElementById('color-box');
    this.colorOptions = document.getElementById('color-options');
    this.newGameButton = document.getElementById('new-game-btn');
  }

  updateColorBox(color) {
    this.colorBox.style.backgroundColor = color;
  }

  updateScore(score) {
    this.scoreElement.textContent = score;
  }

  showGameStatus(message, isCorrect = false) {
    this.gameStatus.textContent = message;
    this.gameStatus.classList.add('fade-in');

    if (isCorrect) {
      this.colorBox.classList.add('celebrate');
      setTimeout(() => {
        this.colorBox.classList.remove('celebrate');
      }, 1000);
    }

    setTimeout(() => {
      this.gameStatus.classList.remove('fade-in');
    }, 300);
  }

  createColorButtons(colors, onColorClick) {
    this.colorOptions.innerHTML = '';
    colors.forEach((color) => {
      const button = document.createElement('button');
      button.setAttribute('data-testid', 'colorOption');
      button.className = 'color-option fade-in';
      button.style.backgroundColor = color;
      button.addEventListener('click', () => onColorClick(color));
      this.colorOptions.appendChild(button);
    });
  }

  setNewGameHandler(handler) {
    this.newGameButton.addEventListener('click', handler);
  }

  clearGameStatus() {
    this.gameStatus.textContent = '';
  }
}
