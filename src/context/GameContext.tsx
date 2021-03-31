import React, { createContext, useContext, useState } from "react";

interface GameContextProps {
  players: string[];
  addPlayers: Function;
  resetPlayers: Function;
  isGameInProgress: boolean;
  setIsGameInProgress: Function;
}

export const GameContext = createContext<GameContextProps>({
  players: [],
  addPlayers: () => {},
  resetPlayers: () => {},
  isGameInProgress: false,
  setIsGameInProgress: () => {},
});

interface GameContextProviderProps {}

export const GameContextProvider: React.FC<GameContextProviderProps> = ({
  children,
}) => {
  const [players, setPlayers] = useState<string[]>([]);
  const [isGameInProgress, setIsGameInProgress] = useState(false);

  const addPlayers = (newPlayers: string[]) => {
    setPlayers([...players, ...newPlayers]);
  };

  const resetPlayers = () => {
    setPlayers([]);
  };

  return (
    <GameContext.Provider
      value={{
        players,
        addPlayers,
        resetPlayers,
        isGameInProgress,
        setIsGameInProgress,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => useContext(GameContext);
