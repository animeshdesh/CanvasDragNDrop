import React from "react";
import "./App.css";

// You can split your components
import Editor from "./Editor";

const App = () => {
  return (
    <div className="App">
      {/* Feel free to delete the header */}
      <header className="App-header">
        <p></p>
      </header>
      <Editor />
    </div>
  );
};

export default App;
