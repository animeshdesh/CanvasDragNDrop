import React from "react";
import PickerButtons from "./PickerButtons";
import { Button, TextField } from "@mui/material";
import Textimg from "../Assets/Text.png";
import Buttonimg from "../Assets/Button.png";
import Dropdownimg from "../Assets/Dropdown.png";
import Tableimg from "../Assets/Table.png";
import PickerSearch from "./PickerSearch";

const EditorPicker = (props) => {
  const { onComponentCreation, onClearCanvas } = props;

  const createComponent = (type, content) => {
    const newComponent = {
      type: type,
      id: Date.now(),
      content: content,
    };
    onComponentCreation(newComponent);
  };

  const handleCreateButton = () => {
    createComponent(
      "Button",
      <Button key={Date.now()} variant="contained">
        New Button
      </Button>
    );
  };

  const handleCreateText = () => {
    createComponent(
      "Text",
      <TextField
        variant="outlined"
        key={Date.now()}
        placeholder="New Input Field"
        sx={{ backgroundColor: "white" }}
      />
    );
  };

  const handleCreateDropdown = () => {
    createComponent(
      "Dropdown",
      <select key={Date.now()}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    );
  };

  const handleCreateTable = () => {
    createComponent(
      "Table",
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
  };

  return (
    <div className="editor-picker">
      <PickerSearch />
      <PickerButtons
        onClick={handleCreateButton}
        Heading={"Button"}
        subHeading={"Trigger actions like run queries.."}
        imgURL={Buttonimg}
      />
      <PickerButtons
        onClick={handleCreateText}
        Heading={"Text Input"}
        subHeading={"Supports Markdown or HTML"}
        imgURL={Textimg}
      />
      <PickerButtons
        onClick={handleCreateDropdown}
        Heading={"Dropdown"}
        subHeading={"Select from a set of options, with a dropdown."}
        imgURL={Dropdownimg}
      />
      <PickerButtons
        onClick={handleCreateTable}
        Heading={"Table"}
        subHeading={"Display tabular data with pagination."}
        imgURL={Tableimg}
      />
      <Button onClick={onClearCanvas}>Clear Canvas</Button>
    </div>
  );
};

export default EditorPicker;
