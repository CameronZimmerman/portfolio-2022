import { StartScreen } from "./scenes/start-screen.js";

const config = {
  title: "Portfolio Minigame",
  scale: {
    mode: Phaser.Scale.FIT,
    width: 1080,
    height: 720,
  },
  scene: [StartScreen],
  //phaser's default physics engine
  physics: {
    default: "arcade",
    arcade: {
      debug: false,
    },
  },
  pixelArt: true,
  autoCenter: true,
  parnet: "gameContainer",
  transparent: true,
};

export class PortfolioMinigame extends Phaser.Game {
  constructor(config) {
    super(config);
  }
}

window.onload = () => {
  new PortfolioMinigame(config);
};
