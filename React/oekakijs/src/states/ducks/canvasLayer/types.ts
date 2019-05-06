import { CanvasLayers } from 'canvasLayers'

export enum ActionTypes {
  INIT = 'canvasLayer/INIT',
  ADD = 'canvasLayer/ADD',
  DRAW_START = 'canvasLayer/DRAW_START',
  DRAW_END = 'canvasLayer/DRAW_END',
  DRAWING = 'canvasLayer/DRAWING'
}

export interface CanvasLayerState {
  layers: CanvasLayers[]
  ctx?: CanvasRenderingContext2D
  drawing: boolean
}

export type CanvasLayerActionTypes = InitType

export interface InitType {
  type: ActionTypes.INIT
  payload: {}
}
export interface AddLayerType {
  type: ActionTypes.ADD
  payload: {}
}
export interface DrawStartType {
  type: ActionTypes.DRAW_START
  payload: { ctx: CanvasRenderingContext2D; address: { x: number; y: number } }
}
export interface DrawingType {
  type: ActionTypes.DRAWING
  payload: { address: { x: number; y: number } }
}
export interface DrawEndType {
  type: ActionTypes.DRAW_END
  payload: {}
}
