import "./AddPlayer.scss";

import React, { useState } from "react";
import { KEYCODE } from "./constants";

function AddPlayer() {
  const [inputValue, setInputValue] = useState("");
  const [players, setPlayers] = useState<string[]>([]);

  const handleKeyUp = (event: any) => {
    if (event && event.keyCode === KEYCODE.ENTER) {
      setPlayers([...players, inputValue]);
      setInputValue("");
    }
    if (event && event.keyCode === KEYCODE.ESCAPE) {
      setInputValue("");
    }
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
        <button
          onClick={() => {
            setPlayers([...players, inputValue]);
            setInputValue("");
          }}
        >
          Add
        </button>
      </div>
      {players.length > 0 && (
        <div>
          <code>{players.join(", ")}</code>
        </div>
      )}
      <div>
        <button
          className="start-game-button"
          onClick={() => {
            console.log(players);
          }}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}

export default AddPlayer;
