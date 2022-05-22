import { Player } from './Characters'
import { canvas, ctx, gameSettings } from './settings'
import { Movement } from './systems/Movement'

const player = new Player({
  width: 10,
  height: 10,
  position: { x: 10, y: 10 },
  velocity: { x: 0, y: 0 },
  speed: 1,
})

const Camera = {
  x: 0,
  y: 0,
  width: canvas.width,
  height: canvas.height,

  update() {
    this.x = player.position.x - this.width / 2
    this.y = player.position.y - this.height / 2
  },
}

export default class Game {
  public static canvas: HTMLCanvasElement
  public static ctx: CanvasRenderingContext2D

  constructor() {
    Game.canvas = canvas
    Game.ctx = ctx
  }

  public static draw() {
    requestAnimationFrame(Game.draw)
    ctx.fillStyle = 'rgba(255, 255, 255, 1)'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    player.update()
  }

  public start() {
    Game.draw()
  }
}

// Listen Keyboard Events
window.addEventListener('keydown', (event: KeyboardEvent) => {
  Movement({
    target: player,
    keyPressed: event.code,
  })

  player.velocity.x = 0

  // switch (event.code) {
  //   case gameSettings.control_config.left:
  //     player.move('left')
  //     break
  //   case gameSettings.control_config.right:
  //     player.move('right')
  //     break
  //   case gameSettings.control_config.up:
  //     player.move('up')
  //     break
  //   case gameSettings.control_config.down:
  //     player.move('down')
  //     break
  //   default:
  //     console.log('no movement', event.code)
  //     break
  // }
})
