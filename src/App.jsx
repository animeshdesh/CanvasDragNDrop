import React from "react";
import AppHeader from "./components/Header/AppHeader";
import "./App.css";

// You can split your components
import Editor from "./Editor";

const App = () => {
  return (
    <div className="App">
      {/* Feel free to delete the header */}
      <AppHeader />
      <Editor />
    </div>
  );
};

export default App;
