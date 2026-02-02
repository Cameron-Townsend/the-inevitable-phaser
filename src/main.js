import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  width: 960,
  height: 540,
  backgroundColor: "#202433",
  pixelArt: true,
  scene: {
    create() {
      // Draw a bouncing ball
      this.ball = this.add.graphics();
      this.ball.fillStyle(0xff6b6b);
      this.ball.fillCircle(0, 0, 20);
      this.ball.x = 480;
      this.ball.y = 270;
      this.ballVelocity = { x: 4, y: 3 };

      // Draw the green square
      const g = this.add.graphics();
      g.fillStyle(0x44aa88);
      g.fillRect(448, 248, 64, 64);

      this.add.text(20, 20, "Vibe Coding in Action!", {
        fontSize: "20px",
        color: "#ffffff"
      });
    },
    update() {
      // Move the ball
      this.ball.x += this.ballVelocity.x;
      this.ball.y += this.ballVelocity.y;

      // Bounce off walls
      if (this.ball.x <= 20 || this.ball.x >= 940) {
        this.ballVelocity.x *= -1;
      }
      if (this.ball.y <= 20 || this.ball.y >= 520) {
        this.ballVelocity.y *= -1;
      }
    }
  }
};

new Phaser.Game(config);
