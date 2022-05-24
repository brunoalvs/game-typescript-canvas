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
    isIdle: false,
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
    this.speed = 3
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

    // IF Player status not have any value with true then set to false
    if (
      !Player.status.isJumping &&
      !Player.status.isCrouching &&
      !Player.status.isShooting &&
      !Player.status.isWalkingLeft &&
      !Player.status.isWalkingRight
    ) {
      Player.status.isIdle = true
      this.idle()
    } else {
      Player.status.isIdle = false
    }

    // var checkIfPlayerIsFalling: () => string = () => {
    //   if (this.velocity.y === 0) {
    //     // Player.status.isJumping = false
    //     this.velocity.y = 0
    //     // return 'isLanded'
    //   }

    //   if (this.velocity.y > 0) {
    //     this.velocity.y += gravityValue
    //     return 'IsFalling'
    //   }

    //   return 'checking'
    // }
    if (this.position.y + this.height > ctx.canvas.height) {
      this.position.y = ctx.canvas.height - this.height
      this.velocity.y = 0

      Player.status.isJumping = false
    }
    // console.log('landed', checkIfPlayerIsFalling())

    if (this.position.y + this.height < ctx.canvas.height) {
      this.velocity.y += gravityValue
      Player.status.isJumping = true
    }
  }

  move(direction: 'left' | 'right' | 'none') {
    switch (direction) {
      case 'left':
        this.velocity.x = -this.speed
        // Player.status.isWalkingLeft = true
        break
      case 'right':
        this.velocity.x = this.speed
        // Player.status.isWalkingRight = true
        break
      default:
        this.velocity.x = 0
        this.idle()

        break
    }
  }

  idle() {
    this.height = 20
  }

  jump() {
    if (Player.status.isJumping) {
      return
    }

    if (Player.status.isCrouching) {
      return
    }

    this.velocity.y = -this.speed
  }

  shoot() {
    // Player.status.isShooting = true
  }

  crouch() {
    // Player.status.isCrouching = true

    if (Player.status.isJumping) {
      return
    }

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
  position: { x: 0, y: 0 },
  velocity: { x: 0, y: 0 },
  speed: 1,
})
