import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import {
  CanvasLayerState,
  canvasLayerOperations
} from '../../states/ducks/canvasLayer'

import Component from '../pages/Atelier'
import { CanvasLayers } from 'canvasLayers'

export interface State {
  canvasLayer: CanvasLayers
}

const mapStateToProps = (state: State): CanvasLayers | undefined => {
  return {
    ...state.canvasLayer
  }
}

const mapDispatchToProps = (dispatch: Dispatch): { onClick: () => void } => {
  return {
    onClick: (): void => {
      dispatch(canvasLayerOperations.addLayer())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
