import { Dispatch, Action } from 'redux'
// import { push } from 'react-router-redux'
import actions from './actions'

const init = (): any => {
  return (dispath: Dispatch<Action>): void => {
    dispath(actions.init())
  }
}
const addLayer = (): any => {
  return (dispath: Dispatch<Action>): void => {
    dispath(actions.addLayer())
  }
}
const drawStart = (
  ctx: CanvasRenderingContext2D,
  address: { x: number; y: number }
): any => {
  return (dispath: Dispatch<Action>): void => {
    dispath(actions.drawStart(ctx, address))
  }
}
const drawing = (address: { x: number; y: number }): any => {
  return (dispath: Dispatch<Action>): void => {
    dispath(actions.drawing(address))
  }
}
const drawEnd = (): any => {
  return (dispath: Dispatch<Action>): void => {
    dispath(actions.drawEnd())
  }
}
export default {
  init,
  addLayer,
  drawStart,
  drawing,
  drawEnd
}
