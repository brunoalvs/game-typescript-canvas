import { Player, player } from './Characters'
import { canvas, ctx, gameSettings } from './settings'
import TestDrawInfo from './TestDrawInfo'

export default class Game {
  public static canvas: HTMLCanvasElement
  public static ctx: CanvasRenderingContext2D
  public static lastTime: number = Date.now()
  public static paused: boolean = false

  constructor() {
    Game.canvas = canvas
    Game.ctx = ctx
  }

  public static deltaTime() {
    const now = Date.now()
    const dt = (now - Game.lastTime) / 1000
    Game.lastTime = now
    return dt
  }

  public static draw() {
    // Clear canvas
    Game.ctx.clearRect(0, 0, Game.canvas.width, Game.canvas.height)

    // Draw player
    player.update()

    // Draw background
    Game.ctx.fillStyle = 'rgb(0, 0, 0)'
    Game.ctx.fillRect(0, 0, Game.canvas.width, Game.canvas.height)

    const isDeveloperMode = true
    if (isDeveloperMode) {
      new TestDrawInfo().draw()
    }
    // Draw player
    player.draw()

    requestAnimationFrame(Game.draw)
  }

  public start() {
    Game.draw()
  }
}

// Listen Keyboard Events
window.addEventListener('keydown', (event: KeyboardEvent) => {
  player.velocity.x = 0

  switch (event.code) {
    case gameSettings.control_config.left:
      player.move('left')
      // Game.keysPressed[0].left = true
      break
    case gameSettings.control_config.right:
      player.move('right')
      // Game.keysPressed[1].right = true
      break
    case gameSettings.control_config.down:
      player.crouch()

      break
    case gameSettings.control_config.jump:
      player.jump()

      break
    case gameSettings.control_config.shoot:
      player.shoot()
      break
    default:
      break
  }
})

window.addEventListener('keyup', (event: KeyboardEvent) => {
  switch (event.code) {
    case gameSettings.control_config.down:
      player.idle()
      Player.status.isCrouching = false
      break
    case gameSettings.control_config.shoot:
      Player.status.isShooting = false
      break
    case gameSettings.control_config.left:
      Player.status.isWalkingLeft = false
      break
    case gameSettings.control_config.right:
      Player.status.isWalkingRight = false
      break

    default:
      break
  }
})
