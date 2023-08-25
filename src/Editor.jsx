import React, { useState, useEffect } from "react";
import EditorCanvas from "./components/Canvas/EditorCanvas";
import EditorPicker from "./components/Picker/EditorPicker";
import { DragDropContext } from "react-beautiful-dnd"; // Import DragDropContext
import "./Editor.css";

const Editor = (props) => {
  const [components, setComponents] = useState([]);

  const handleComponentCreation = (newComponent) => {
    setComponents([...components, newComponent]);
  };

  const handleClearCanvas = () => {
    setComponents([]);
  };

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedComponents = Array.from(components);
    const [movedComponent] = reorderedComponents.splice(result.source.index, 1);
    reorderedComponents.splice(result.destination.index, 0, movedComponent);

    setComponents(reorderedComponents);
  };

  useEffect(() => {
    localStorage.setItem("components", JSON.stringify(components));
  }, [components]);
  return (
    <div className="editor">
      <DragDropContext onDragEnd={handleDragEnd}>
        <EditorCanvas components={components} setComponents={setComponents} />
        <EditorPicker
          onComponentCreation={handleComponentCreation}
          onClearCanvas={handleClearCanvas}
        />
      </DragDropContext>
    </div>
  );
};

export default Editor;
