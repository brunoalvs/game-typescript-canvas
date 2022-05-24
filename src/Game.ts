import { Player } from './Characters'
import { canvas, ctx, gameSettings, gravityValue } from './settings'
// import { Movement } from './systems/Movement'

const player = new Player({
  width: 10,
  height: 10,
  position: { x: 10, y: 10 },
  velocity: { x: 0, y: 0 },
  speed: 1,
})

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

  public static draw() {
    // // Limit FPS - 30
    const now = Date.now()
    let deltaTime = (now - Game.lastTime) / 1000
    Game.lastTime = now

    if (deltaTime > 1 / 30) {
      deltaTime = 1 / 30
    }

    // Clear canvas
    Game.ctx.clearRect(0, 0, Game.canvas.width, Game.canvas.height)

    // Draw player
    player.update()

    // Draw background
    Game.ctx.fillStyle = 'rgb(0, 0, 0)'
    Game.ctx.fillRect(0, 0, Game.canvas.width, Game.canvas.height)

    // Draw HUD
    Game.ctx.fillStyle = 'rgb(255, 255, 255)'
    Game.ctx.font = '16px Arial'
    Game.ctx.fillText(`FPS: ${Math.round(1 / deltaTime)}`, 10, 20)
    Game.ctx.fillText(`Gravity: ${gravityValue}`, 10, 40)
    Game.ctx.fillText(
      `Player position: ${player.position.x}, ${player.position.y}`,
      10,
      60
    )
    Game.ctx.fillText(
      `Player velocity: ${player.velocity.x}, ${player.velocity.y}`,
      10,
      80
    )
    Game.ctx.fillText(
      `Player Max height position: ${
        player.position.y + player.height + player.velocity.y
      }`,
      10,
      100
    )

    // Draw player
    player.draw()

    setTimeout(() => {
      requestAnimationFrame(Game.draw)
    }, 1000 / 30)
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
