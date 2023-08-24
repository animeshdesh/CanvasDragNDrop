import { Typography } from "@mui/material";
import React from "react";

const EditorCanvas = (props) => {
  const { components } = props;

  return (
    <div className="editor-canvas">
      <Typography variant="h3" className="editor-canvas-heading">
        Drag & drop components here.
      </Typography>
      {components.map((component, index) => {
        return <div key={index}>{component}</div>;
      })}
      {/* {components} */}
    </div>
  );
};

export default EditorCanvas;
