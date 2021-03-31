import "./App.scss";

import React from "react";
import AddPlayer from "./components/AddPlayer";
import GameGrid from "./components/GameGrid";
import { useGameContext } from "./context/GameContext";

function App() {
  const gameContext = useGameContext();

  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to sc0r3!</p>
        {gameContext.isGameInProgress ? <GameGrid /> : <AddPlayer />}
      </header>
    </div>
  );
}

export default App;
