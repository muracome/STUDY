import { Dispatch } from 'redux'
import { connect } from 'react-redux'

import Component from '../pages/App'
import { CanvasLayers } from 'canvasLayers'
import { canvasLayerOperations } from '../../states/ducks/canvasLayer'

interface State {
  canvasContents: CanvasLayers
}

const mapStateToProps = (state: State): CanvasLayers | undefined => {
  return {
    ...state.canvasContents
  }
}

const mapDispatchToProps = (dispatch: Dispatch): { onLoaded: () => void } => {
  return {
    onLoaded: (): void => {
      dispatch(canvasLayerOperations.init())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
