import "./App.scss";

import React from "react";
import GameContextProvider from "./context/GameContext";
import AddPlayer from "./components/AddPlayer";

function App() {
  return (
    <GameContextProvider>
      <div className="App">
        <header className="App-header">
          <p>Welcome to sc0r3!</p>
          <AddPlayer />
        </header>
      </div>
    </GameContextProvider>
  );
}

export default App;
