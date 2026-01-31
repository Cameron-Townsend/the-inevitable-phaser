import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  width: 960,
  height: 540,
  backgroundColor: "#202433",
  pixelArt: true,
  scene: {
    create() {
      const g = this.add.graphics();
      g.fillStyle(0x44aa88);
      g.fillRect(448, 248, 64, 64);

      this.add.text(20, 20, "Gitpod Live Phaser", {
        fontSize: "16px",
        color: "#ffffff"
      });
    }
  }
};

new Phaser.Game(config);
