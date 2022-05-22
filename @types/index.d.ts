interface IPosition {
  x: number
  y: number
}

interface IVelocity {
  x: number
  y: number
}

interface ICharacter {
  width: number
  height: number
  position: IPosition
  velocity: IVelocity
  speed: number
}

interface Keyboard {
  key: string
  isDown: boolean
  isUp: boolean
  press: () => void
  release: () => void
  downHandler: (event: KeyboardEvent) => void
  upHandler: (event: KeyboardEvent) => void
}

interface IKeyboard {
  [key: string]: Keyboard
}
