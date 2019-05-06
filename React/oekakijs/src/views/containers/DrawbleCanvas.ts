import { connect } from 'react-redux'

import {
  CanvasLayerState,
  canvasLayerOperations
} from '../../states/ducks/canvasLayer'

import { CanvasLayers } from 'canvasLayers'
import Component from '../components/DrawbleCanvas'
import { Dispatch } from 'redux'

interface Params {
  canvasLayer: CanvasLayerState
}

interface State {
  canvasContents: CanvasLayers
}

const mapStateToProps = (state: State): CanvasLayers | undefined => {
  return {
    ...state.canvasContents
  }
}
const mapDispatchToProps = (
  dispatch: Dispatch
): {
  drawStart: (
    ctx: CanvasRenderingContext2D,
    address: { x: number; y: number }
  ) => void
  drawing: (address: { x: number; y: number }) => void
  drawEnd: () => void
} => {
  return {
    drawStart: (
      ctx: CanvasRenderingContext2D,
      address: { x: number; y: number }
    ): void => {
      dispatch(canvasLayerOperations.drawStart(ctx, address))
    },
    drawing: (address: { x: number; y: number }): void => {
      dispatch(canvasLayerOperations.drawing(address))
    },
    drawEnd: (): void => {
      dispatch(canvasLayerOperations.drawEnd())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
