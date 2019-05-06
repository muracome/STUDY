import React, { PureComponent } from 'react'
import { Stage, Layer, Text } from 'react-konva'
import { CanvasLayers } from 'canvasLayers'

export interface Props {
  canvasLayers?: CanvasLayers[]
  drawStart: (
    ctx: CanvasRenderingContext2D,
    address: { x: number; y: number }
  ) => void
  drawing: (address: { x: number; y: number }) => void
  drawEnd: () => void
}

class DrawbleCanvas extends PureComponent<Props> {
  public render(): JSX.Element {
    const { canvasLayers } = this.props
    console.log(canvasLayers)

    return (
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        onMouseDown={(e: any) => {
          const target: any = e.currentTarget.children[0].canvas

          this.props.drawStart(target.context._context, {
            x: e.evt.clientX,
            y: e.evt.clientY
          })
        }}
        onTap={(e: any) => {
          const target: any = e.currentTarget.children[0].canvas
          this.props.drawStart(target.context._context, {
            x: e.evt.clientX,
            y: e.evt.clientY
          })
        }}
        onTouchStart={(e: any) => {
          const target: any = e.currentTarget.children[0].canvas
          this.props.drawStart(target.context._context, {
            x: e.evt.clientX,
            y: e.evt.clientY
          })
        }}
        onMouseUp={(e: any) => {
          console.log(e)
          const target: any = e.currentTarget.children[0].canvas
          this.props.drawEnd()
        }}
        onTouchEnd={(e: any) => {
          const target: any = e.currentTarget.children[0].canvas
          this.props.drawEnd()
        }}
        onMouseMove={(e: any) => {
          this.props.drawing({
            x: e.evt.clientX,
            y: e.evt.clientY
          })
        }}
        onTouchMove={(e: any) => {
          this.props.drawing({
            x: e.evt.clientX,
            y: e.evt.clientY
          })
        }}
        onMouseOut={(e: any) => {
          const target: any = e.currentTarget.children[0].canvas
          this.props.drawEnd()
        }}
      >
        {(canvasLayers ? canvasLayers : []).map(
          (canvas: CanvasLayers, index: number): JSX.Element => {
            return canvas ? <Layer key={index} /> : <div />
          }
        )}
      </Stage>
    )
  }
}

export default DrawbleCanvas
