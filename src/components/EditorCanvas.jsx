import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { useDrop } from "react-dnd";
import ItemTypes from "./ItemType"; // Import the ItemTypes object

const ResponsiveGridLayout = WidthProvider(Responsive);

const EditorCanvas = ({ components, setComponents }) => {
  const [layouts, setLayouts] = useState(
    components.map((_, index) => ({
      i: index.toString(),
      x: 0,
      y: index,
      w: 3,
      h: 1,
      minW: 2,
      minH: 1,
    }))
  );

  const [, drop] = useDrop({
    accept: ItemTypes.COMPONENT,
  });

  return (
    <div className="editor-canvas" ref={drop}>
      <ResponsiveGridLayout
        className="layout"
        layouts={{ lg: layouts }}
        breakpoints={{ lg: 1200 }}
        cols={{ lg: 8 }}
        onLayoutChange={(layout) => setLayouts(layout)}
      >
        {components.map((component, index) => (
          <div key={index.toString()}>{component.content}</div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default EditorCanvas;
//WORKING 1
