import Sprite from "../Components/Sprite";
import { canvas, ctx } from "./settings";

const player = new Sprite({
  width: 25,
  height: 50,
  position: { x: canvas.width - 25, y: 10 },
});

export default class Game {
  draw() {
    requestAnimationFrame(this.draw.bind(this));
    ctx.fillStyle = "rgba(255, 255, 255, 1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    player.update();
  }

  start() {
    this.draw();
  }
}
