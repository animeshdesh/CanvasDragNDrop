import React, { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { useDrop } from "react-dnd";
import ItemTypes from "./ItemType";

const ResponsiveGridLayout = WidthProvider(Responsive);

const EditorCanvas = ({ components, setComponents }) => {
  const [layouts, setLayouts] = useState(
    components.map((_, index) => ({
      i: index.toString(),
      x: 0,
      y: index,
      w: 2,
      h: 1,
    }))
  );
  // useEffect(() => {
  //   const savedComponents = JSON.parse(localStorage.getItem("components"));
  //   console.log(savedComponents); // Check the retrieved components in the console
  //   if (savedComponents) {
  //     setComponents(savedComponents);
  //   }

  //   const savedLayouts = JSON.parse(localStorage.getItem("layouts"));
  //   if (savedLayouts) {
  //     setLayouts(savedLayouts);
  //   }
  // }, []);

  const [, drop] = useDrop({
    accept: ItemTypes.COMPONENT,
  });
  const handleLayoutChange = (layout) => {
    setLayouts(layout);
    localStorage.setItem("layouts", JSON.stringify(layout));
  };

  return (
    <div className="editor-canvas" ref={drop}>
      <ResponsiveGridLayout
        className="layout"
        layouts={{ lg: layouts }}
        breakpoints={{ lg: 1200 }}
        cols={{ lg: 8 }}
        rowHeight={60}
        onLayoutChange={handleLayoutChange}
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
