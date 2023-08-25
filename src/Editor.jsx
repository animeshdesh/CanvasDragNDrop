// import { useState } from "react";
// import EditorCanvas from "./components/EditorCanvas";
// import EditorPicker from "./components/EditorPicker";
// import "./Editor.css";

// const Editor = (props) => {
//   const [components, setComponents] = useState([]);

//   const handelComponentCreation = (newComponent) => {
//     setComponents([...components, newComponent]);
//   };
//   const handelClearCanvas = () => {
//     setComponents([]);
//   };

//   return (
//     <div className="editor">
//       <EditorCanvas components={components} />
//       <EditorPicker
//         onComponentCreation={handelComponentCreation}
//         onClearCanvas={handelClearCanvas}
//       />
//     </div>
//   );
// };

// export default Editor;

import React, { useState } from "react";
import EditorCanvas from "./components/Canvas/EditorCanvas";
import EditorPicker from "./components/Picker/EditorPicker";
import { DragDropContext } from "react-beautiful-dnd"; // Import DragDropContext
import "./Editor.css";

const Editor = (props) => {
  const [components, setComponents] = useState([]);
  console.log(components);

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
