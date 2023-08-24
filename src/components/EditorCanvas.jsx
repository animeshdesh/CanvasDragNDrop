import React from "react";

const EditorCanvas = (props) => {
  const { components } = props;

  return (
    <div className="editor-canvas">
      <h4> Put the drag and drop interface over here! </h4>
      {components.map((component, index) => {
        return <div key={index}>{component}</div>;
      })}
      {/* {components} */}
    </div>
  );
};

export default EditorCanvas;
