import { ctx, gravityValue } from './settings'
import { player } from './Characters'
import Game from './Game'

class TestDrawInfo {
  ctx: CanvasRenderingContext2D

  constructor() {
    this.ctx = ctx
  }

  draw() {
    this.ctx.fillStyle = 'rgb(255, 255, 55)'
    this.ctx.font = '16px Arial'
    this.ctx.fillText(`FPS: ${Math.round(1 / Game.deltaTime())}`, 10, 20)
    this.ctx.fillText(`Gravity: ${gravityValue}`, 10, 40)
    this.ctx.fillText(
      `Player position: ${player.position.x}, ${player.position.y}`,
      10,
      60
    )
    this.ctx.fillText(
      `Player velocity: ${player.velocity.x}, ${player.velocity.y}`,
      10,
      80
    )
    this.ctx.fillText(
      `Player Max height position: ${
        player.position.y + player.height + player.velocity.y
      }`,
      10,
      100
    )
  }
}

export default TestDrawInfo
