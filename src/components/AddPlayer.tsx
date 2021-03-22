import "./AddPlayer.scss";

import React, { useState } from "react";

function AddPlayer() {
  const [inputValue, setInputValue] = useState("");
  const [players, setPlayers] = useState<string[]>([]);

  return (
    <div className="mc-add-player">
      <p>Add a player</p>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={({ target }) => setInputValue(target.value)}
        />
        <button
          onClick={() => {
            setPlayers([...players, inputValue]);
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
