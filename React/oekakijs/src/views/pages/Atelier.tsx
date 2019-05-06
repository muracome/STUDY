import React, { PureComponent } from 'react'
import DrawbleCanvas from '../containers/DrawbleCanvas'
import { CanvasLayers } from 'canvasLayers'

export interface Props {
  layers?: CanvasLayers[]
  onClick: () => void
}

class Atelier extends PureComponent<Props, {}> {
  public render(): JSX.Element {
    return (
      <div className="Atelier">
        <button onClick={this.props.onClick}>レイヤー追加</button>
        <button onClick={this.props.onClick}>画像読み込み</button>
        <button onClick={this.props.onClick}>UnDo</button>
        <button onClick={this.props.onClick}>ReDo</button>
        <DrawbleCanvas canvasLayers={this.props.layers} />
      </div>
    )
  }
}

export default Atelier
