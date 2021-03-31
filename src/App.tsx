import "./App.scss";

import React from "react";
import AddPlayer from "./components/AddPlayer";
import { useGameContext } from "./context/GameContext";

function App() {
  const gameContext = useGameContext();

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to sc0r3!</p>
        {gameContext.isGameInProgress ? (
          <code>{gameContext.players.join(", ")}</code>
        ) : (
          <AddPlayer />
        )}
      </header>
    </div>
  );
}

export default App;
