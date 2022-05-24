import { ctx, gravityValue } from './settings'
import { player, Player } from './Characters'
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
      `Player status: ${Player.status.isJumping ? 'isJumping' : ''}
      ${Player.status.isCrouching ? 'isCrouching' : ''}
      ${Player.status.isShooting ? 'isShooting' : ''}
      ${Player.status.isWalkingLeft ? 'isWalkingLeft' : ''}
      ${Player.status.isWalkingRight ? 'isWalkingRight' : ''}
    `,
      10,
      80
    )
  }
}

export default TestDrawInfo
