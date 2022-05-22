export const canvas = document.querySelector<HTMLCanvasElement>('#canvas')!
export const ctx = canvas.getContext('2d')!

canvas.width = 512
canvas.height = 512 * 0.5625

export const gameSettings: IGameSettings = {
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
    left: 'KeyA',
    up: 'KeyW',
    right: 'KeyD',
    down: 'KeyS',
  },
}
