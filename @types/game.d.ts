// aspect_ratio: ['16:9', '16:10', '4:3', '5:4', '1:1']
interface IGameSettings {
  display_config: {
    aspect_ratio: {
      name: string
      value: number
      active: boolean
    }[]
  }
  sound_config: {
    // TODO: add sound config
  }
  control_config: {
    left: string
    up: string
    right: string
    down: string
  }
}

interface IPlayerMovement {
  left: boolean
  up: boolean
  right: boolean
  down: boolean
}
