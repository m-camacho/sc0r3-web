import React, { useState } from "react";
import { useGameContext } from "../context/GameContext";

function AddPlayer() {
  const gameContext = useGameContext();

  return (
    <div className="mc-game-grid">
      <table>
        <thead>
          <tr>
            {gameContext.players.map((player) => (
              <td key={player}>{player}</td>
            ))}
            <td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            {gameContext.players.map((player) => (
              <td key={player}>
                <input></input>
              </td>
            ))}
            <td>
              <button>Submit</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default AddPlayer;
