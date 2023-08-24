import React from "react";

const EditorPicker = (props) => {
  const { onComponentCreation, onClearCanvas } = props;

  const handelCreateButton = () => {
    const newButton = <button key={Date.now()}>New Button</button>;
    onComponentCreation(newButton);
  };
  const handelCreateText = () => {
    const newText = <input key={Date.now()} type="text" />;
    onComponentCreation(newText);
  };
  const handleCreateDropdown = () => {
    const newDropdown = (
      <select key={Date.now()}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    );
    onComponentCreation(newDropdown);
  };
  const handleCreateTable = () => {
    const newTable = (
      <table key={Date.now()}>
        <tbody>
          <tr>
            <td>Row 1 - Column 1</td>
            <td>Row 1 - Column 2</td>
            <td>Row 1 - Column 3</td>
            <td>Row 1 - Column 4</td>
          </tr>
          <tr>
            <td>Row 2 - Column 1</td>
            <td>Row 2 - Column 2</td>
            <td>Row 2 - Column 3</td>
            <td>Row 2 - Column 4</td>
          </tr>
          <tr>
            <td>Row 3 - Column 1</td>
            <td>Row 3 - Column 2</td>
            <td>Row 3 - Column 3</td>
            <td>Row 3 - Column 4</td>
          </tr>
        </tbody>
      </table>
    );
    onComponentCreation(newTable);
  };

  return (
    <div className="editor-picker">
      <h4>
        {" "}
        Clicking these buttons should create new components on the canvas{" "}
      </h4>
      <button onClick={handelCreateButton}> Create a button </button>
      <button onClick={handelCreateText}> Create a text input </button>
      <button onClick={handleCreateDropdown}> Create a dropdown </button>
      <button onClick={handleCreateTable}> Create a table </button>
      <button onClick={onClearCanvas}>
        <h3>Clear Canvas</h3>
      </button>
    </div>
  );
};

export default EditorPicker;
