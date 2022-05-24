import { player } from './Characters'
import { canvas, ctx, gameSettings, gravityValue } from './settings'
import TestDrawInfo from './TestDrawInfo'
// import { Movement } from './systems/Movement'

// class Camera {
//   constructor(public position: { x: number; y: number }) {}

//   update(deltaTime: number) {
//     this.position.x += player.velocity.x * deltaTime
//     this.position.y += player.velocity.y * deltaTime
//   }
// }

export default class Game {
  public static canvas: HTMLCanvasElement
  public static ctx: CanvasRenderingContext2D
  public static lastTime: number = Date.now()
  public static paused: boolean = false

  public static keysPressed = [
    { left: false },
    { right: false },
    { up: false },
    { down: false },
    { shoot: false },
    { jump: false },
  ]

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
    new TestDrawInfo().draw()

    // Clear canvas
    Game.ctx.clearRect(0, 0, Game.canvas.width, Game.canvas.height)

    // Draw player
    player.update()

    // Draw background
    Game.ctx.fillStyle = 'rgb(0, 0, 0)'
    Game.ctx.fillRect(0, 0, Game.canvas.width, Game.canvas.height)

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

  console.log(Game.keysPressed)

  switch (event.code) {
    case gameSettings.control_config.left:
      player.move('left')
      Game.keysPressed[0].left = true
      break
    case gameSettings.control_config.right:
      player.move('right')
      Game.keysPressed[1].right = true
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
      break
    case gameSettings.control_config.left:
      break
    case gameSettings.control_config.right:
      break
    case gameSettings.control_config.jump:
      break
    case gameSettings.control_config.shoot:
      break

    default:
      break
  }
})
