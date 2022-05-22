import { gameSettings } from '../settings'

interface IMovementProps {
  target: ICharacter
  keyPressed: string
}

export function Movement(props: IMovementProps) {
  props.target.velocity.x = 0

  switch (props.keyPressed) {
    case gameSettings.control_config.left:
      props.target.position.x += -props.target.speed
      break
    case gameSettings.control_config.right:
      props.target.position.x += props.target.speed
      break
    case gameSettings.control_config.up:
      props.target.position.y += -props.target.speed
      break
    case gameSettings.control_config.down:
      props.target.position.y += props.target.speed
      break
    default:
      console.log('no movement', props.keyPressed)
      break
  }
}
