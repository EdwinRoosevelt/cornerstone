import React from "react";
import Konva from "konva";
import { Stage, Layer, Rect, Text, Circle, Line, Shape } from "react-konva";


function Plot() {


  return (
    <Stage width={500} height={500}>
      <Layer>
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(10, 10);
            context.lineTo(480, 10);
            context.lineTo(480, 480);
            context.lineTo(10, 480);
            context.closePath();
            // (!) Konva specific method, it is very important
            context.fillStrokeShape(shape);
          }}
          // fillLinearGradientStartPoint={{ x: -50, y: -50 }}
          // fillLinearGradientEndPoint={{ x: 500, y: 50 }}
          // fillLinearGradientColorStops={[0, "red", 1, "yellow"]}
          // fill="#00D2FF"
          stroke="black"
          strokeWidth={2}
        />
      </Layer>
    </Stage>
  );
}

export default Plot;
