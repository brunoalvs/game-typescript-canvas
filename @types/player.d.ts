interface ICharacter {
  width: number
  height: number
  position: IPosition
  velocity: IVelocity
  speed: number
}

interface IControlConfig {
  left: string
  up: string
  right: string
  down: string
  shoot: string
  jump: string
}
