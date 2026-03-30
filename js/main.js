import { colorGame } from './game.js';

// Initialize the game when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  try {
    const game = new colorGame();
  } catch (error) {
    console.error('Failed to initialize game:', error);
  }
});
