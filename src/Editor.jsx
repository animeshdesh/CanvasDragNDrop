import { useState } from "react";
import EditorCanvas from "./components/EditorCanvas";
import EditorPicker from "./components/EditorPicker";
import "./Editor.css";

const Editor = (props) => {
  const [components, setComponents] = useState([]);

  const handelComponentCreation = (newComponent) => {
    setComponents([...components, newComponent]);
  };
  const handelClearCanvas = () => {
    setComponents([]);
  };

  return (
    <div className="editor">
      <EditorCanvas components={components} />
      <EditorPicker
        onComponentCreation={handelComponentCreation}
        onClearCanvas={handelClearCanvas}
      />
    </div>
  );
};

export default Editor;
