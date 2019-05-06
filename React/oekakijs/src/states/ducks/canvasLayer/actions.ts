import {
  ActionTypes,
  InitType,
  AddLayerType,
  DrawStartType,
  DrawingType,
  DrawEndType
} from './types'

export const init = (): InitType => ({
  type: ActionTypes.INIT,
  payload: {}
})
export const addLayer = (): AddLayerType => ({
  type: ActionTypes.ADD,
  payload: {}
})
export const drawStart = (
  ctx: CanvasRenderingContext2D,
  address: { x: number; y: number }
): DrawStartType => ({
  type: ActionTypes.DRAW_START,
  payload: { ctx, address }
})
export const drawing = (address: { x: number; y: number }): DrawingType => ({
  type: ActionTypes.DRAWING,
  payload: { address }
})
export const drawEnd = (): DrawEndType => ({
  type: ActionTypes.DRAW_END,
  payload: {}
})

export type CanvasLayerActionTypes =
  | InitType
  | AddLayerType
  | DrawStartType
  | DrawEndType
  | DrawingType

export default {
  init,
  addLayer,
  drawStart,
  drawing,
  drawEnd
}
