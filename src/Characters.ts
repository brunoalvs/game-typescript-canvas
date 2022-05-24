import { ctx, gravityValue } from './settings'

class Character implements ICharacter {
  width: number
  height: number
  position: IPosition
  velocity: IVelocity
  speed: number

  constructor({ ...props }: ICharacter) {
    this.width = props.width || 10
    this.height = props.height || 10
    this.position = props.position || { x: 0, y: 0 }
    this.velocity = props.velocity || { x: 0, y: 0 }
    this.speed = props.speed || 1
  }
}

export class Player extends Character {
  static status: IPlayerStatus = {
    isJumping: false,
    isCrouching: false,
    isShooting: false,
    isWalkingLeft: false,
    isWalkingRight: false,
  }

  constructor(props: ICharacter) {
    super(props)
    this.width = 20
    this.height = 20
    this.speed = 5
  }

  draw() {
    ctx.fillStyle = 'rgb(176, 255, 82)'
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  update() {
    this.draw()

    // Gravity
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y

    if (this.position.y + this.height > ctx.canvas.height) {
      this.position.y = ctx.canvas.height - this.height
      this.velocity.y = 0
      console.log('landed')
      Player.status.isJumping = false
    }

    if (this.position.y + this.height < ctx.canvas.height) {
      this.velocity.y += gravityValue
      Player.status.isJumping = true
    }
  }

  move(direction: 'left' | 'right') {
    console.log('moving player', direction)

    switch (direction) {
      case 'left':
        this.position.x += -this.speed
        Player.status.isWalkingLeft = true
        break
      case 'right':
        this.position.x += this.speed
        Player.status.isWalkingRight = true
        break
      default:
        this.idle()

        break
    }
  }

  idle() {
    this.height = 20
  }

  jump() {
    console.log('jumping player', this.velocity.y, this.speed)
    if (Player.status.isJumping) {
      return
    }

    this.velocity.y = -this.speed
  }

  shoot() {
    Player.status.isShooting = true
    console.log('shooting player')
  }

  crouch() {
    Player.status.isCrouching = true

    if (this.height <= 10) {
      return
    }

    this.height = 10
    this.position.y += 10
  }
}

export const player = new Player({
  width: 10,
  height: 10,
  position: { x: 10, y: 10 },
  velocity: { x: 0, y: 0 },
  speed: 1,
})
