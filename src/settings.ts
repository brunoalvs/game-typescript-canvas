export const canvas = document.querySelector<HTMLCanvasElement>('#canvas')!
export const ctx = canvas.getContext('2d')!

canvas.width = 512
canvas.height = 512 * 0.5625

export const gravityValue = 0.25

export const gameSettings: IGameSettings = {
  fps: 30,
  display_config: {
    aspect_ratio: [
      {
        name: '16:9',
        value: 0.5625,
        active: true,
      },
      {
        name: '16:10',
        value: 0.625,
        active: false,
      },
      {
        name: '4:3',
        value: 0.75,
        active: false,
      },
      {
        name: '5:4',
        value: 0.8,
        active: false,
      },
      {
        name: '1:1',
        value: 1,
        active: false,
      },
    ],
  },
  sound_config: {},
  control_config: {
    left: 'ArrowLeft',
    up: 'ArrowUp',
    right: 'ArrowRight',
    down: 'ArrowDown',
    shoot: 'KeyX',
    jump: 'KeyZ',
  },
}
