import "./AddPlayer.scss";

import React, { useState } from "react";
import { KEYCODE } from "./constants";
import { useGameContext } from "../context/GameContext";

function AddPlayer() {
  const [inputValue, setInputValue] = useState("");
  const gameContext = useGameContext();

  const handleKeyUp = (event: any) => {
    if (event && event.keyCode === KEYCODE.ENTER) {
      addPlayer();
    }
    if (event && event.keyCode === KEYCODE.ESCAPE) {
      setInputValue("");
    }
  };

  const addPlayer = () => {
    const newPlayer = inputValue.trim();
    if (newPlayer.length > 0) {
      gameContext.addPlayers([newPlayer]);
    }
    setInputValue("");
  };

  return (
    <div className="mc-add-player">
      <p>Add a player</p>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={({ target }) => setInputValue(target.value)}
          onKeyUp={handleKeyUp}
        />
        <button onClick={addPlayer}>Add</button>
      </div>
      {gameContext.players.length > 0 && (
        <div>
          <code>{gameContext.players.join(", ")}</code>
        </div>
      )}
      <div>
        <button
          className="start-game-button"
          onClick={() => {
            gameContext.setIsGameInProgress(true);
          }}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}

export default AddPlayer;
