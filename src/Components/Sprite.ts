import { ctx } from "../Game/settings";

export default class Sprite implements ISprite {
  width: number;
  height: number;
  position: IPosition;

  constructor({ ...props }: ISprite) {
    this.width = props.width || 10;
    this.height = props.height || 10;
    this.position = props.position || { x: 0, y: 0 };
  }

  draw() {
    ctx.fillStyle = "slateblue";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    this.draw();

    this.position.y += 1;
  }
}
