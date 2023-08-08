import React, { useState } from "react";
import { SketchPicker } from "react-color";

export function Color() {
  const [color, setColor] = useState("");
  const [hidden, setHidden] = useState(false);
  const pickerStyle = {
    default: {
      picker: {
        position: "absolute",
        bottom: "400px",
        left: "190px",
      },
    },
  };
  return (
    <div>
      <div>
        {hidden && (
          <SketchPicker styles={pickerStyle} color={color} onChange={(updatedColor) => setColor(updatedColor.hex)} />
        )}

        <button onClick={() => setHidden(!hidden)} style={{ background: color }}>
          {hidden ? " Picke a Color" : "Picke a Color"}
        </button>
      </div>
    </div>
  );
}
