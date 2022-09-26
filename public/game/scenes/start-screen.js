export class StartScreen extends Phaser.Scene {
  constructor() {
    super({
      key: "StartScreen",
    });
  }
  preload() {
    this.load.image("minwageneutral", "assets/minwageneutral.png");
  }
  create() {
    const x = this.add.sprite(
      this.scale.width / 2,
      this.scale.height / 2,
      "minwageneutral"
    );
    const subtext = this.add
      .text(this.scale.width / 2, 620, "-click to start-", {
        fontSize: "5em",
        fontFamily: "'Play', sans-serif",
      })
      .setOrigin(0.5);
    this.input.on("pointerdown", () => {
      this.scene.start("GameScene");
    });
  }
}
