import React, { useRef, useState } from 'react'
import { ReactSketchCanvas, ReactSketchCanvasRef } from 'react-sketch-canvas';
import '../stlyes/Canvas.css'

const styles = {
  
};

export const Canvas = () =>{
  const sketchCanvas = useRef<ReactSketchCanvasRef>(null);
  const [SketchColor, setSketchColor] = useState('black');
  const changeStrokeColor = (color:string) => {
    setSketchColor(color);
  }
    return (
      <div className='canvas'>
        <ReactSketchCanvas 
                      ref={sketchCanvas}
                      style={styles}
                      width='100vw' 
                      height='90vh' 
                      strokeWidth={4}
                      strokeColor={SketchColor}
                      />
        <button
            style={{ backgroundColor: "blue" }}
            onClick={() => {
              changeStrokeColor("blue");
            }}
          >
            blue
          </button>
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => {
              changeStrokeColor("red");
            }}
          >
            red
          </button>
          <button
            style={{ backgroundColor: "white" }}
            onClick={() => {
              sketchCanvas.current?.undo();
            }}
          >
            undo
          </button>
          <button
            style={{ backgroundColor: "white" }}
            onClick={() => {
              sketchCanvas.current?.redo();
            }}
          >
            redo
          </button>
          <button
            style={{ backgroundColor: "white" }}
            onClick={() => {
              sketchCanvas.current?.eraseMode(false);
            }}
          >
            pen
          </button>
          <button
            style={{ backgroundColor: "white" }}
            onClick={() => {
              sketchCanvas.current?.eraseMode(true);
            }}
          >
            erase
          </button>
          <button
            style={{ backgroundColor: "white" }}
            onClick={() => {
              sketchCanvas.current?.clearCanvas();
            }}
          >
            clear
          </button>
          <button
            style={{ backgroundColor: "white" }}
            onClick={() => {
              sketchCanvas.current?.resetCanvas();
            }}
          >
            reset
          </button>
      </div>
    )
}