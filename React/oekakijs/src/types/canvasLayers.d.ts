declare module 'canvasLayers' {
  import Konva from 'konva'

  export interface CanvasContents {
    layers?: Konva.Layer
  }
  export interface CanvasLayers {
    contents: CanvasContents[]
    // ctx?: CanvasRenderingContext2D
  }
}
