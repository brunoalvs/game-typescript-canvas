import { ctx } from './settings'

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
  constructor(props: ICharacter) {
    super(props)
    this.width = 20
    this.height = 20
    this.speed = 5
  }

  draw() {
    // console.log('drawing player')
    ctx.fillStyle = 'rgb(176, 255, 82)'
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  update() {
    // console.log('updating player')
    this.draw()
  }

  move(direction: 'left' | 'right' | 'up' | 'down') {
    console.log('moving player', direction)
    switch (direction) {
      case 'left':
        this.position.x += -this.speed
        break
      case 'right':
        this.position.x += this.speed
        break
      case 'up':
        this.position.y += -this.speed
        break
      case 'down':
        this.position.y += this.speed
        break
      default:
        break
    }
  }

  jump() {
    console.log('jumping player')
  }
}
