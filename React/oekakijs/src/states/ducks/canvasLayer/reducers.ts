import { CanvasLayerActionTypes } from './actions'
import { ActionTypes, CanvasLayerState } from './types'
import Konva from 'konva'

const initialState: CanvasLayerState = {
  layers: [{ contents: [{ layers: new Konva.Layer() }] }],
  drawing: false
}
const reducer = (
  state = initialState,
  action: CanvasLayerActionTypes
): CanvasLayerState => {
  switch (action.type) {
    case ActionTypes.INIT: {
      return Object.assign({}, state, {})
    }
    case ActionTypes.ADD: {
      return Object.assign({}, state, {})
    }
    case ActionTypes.DRAW_START: {
      if (state.ctx === undefined) {
        action.payload.ctx.moveTo(
          action.payload.address.x,
          action.payload.address.y
        )
        return Object.assign({}, state, {
          ctx: action.payload.ctx,
          drawing: true
        })
      } else {
        // action.payload.ctx.beginPath()
        action.payload.ctx.moveTo(
          action.payload.address.x,
          action.payload.address.y
        )
        // action.payload.ctx.stroke()

        return Object.assign({}, state, { drawing: true })
      }
    }
    case ActionTypes.DRAW_END: {
      return Object.assign({}, state, { drawing: false })
    }
    case ActionTypes.DRAWING: {
      if (!state.drawing || state.ctx === undefined) {
        return Object.assign(state)
      }
      state.ctx.lineTo(action.payload.address.x, action.payload.address.y)
      state.ctx.stroke()
      return Object.assign({}, state, {})
    }
    default: {
      return state
    }
  }
}

export default reducer
