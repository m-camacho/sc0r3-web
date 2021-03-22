import "./App.scss";

import React from "react";
import AddPlayer from "./components/AddPlayer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to sc0r3!</p>
        <AddPlayer />
      </header>
    </div>
  );
}

export default App;
