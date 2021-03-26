import React, { createContext, useState } from "react";

interface GameContextProps {
  players: string[];
  isGameInProgress: boolean;
  addPlayers: Function;
  setIsGameInProgress: Function;
}

export const GameContext = createContext<GameContextProps>({
  players: [],
  isGameInProgress: false,
  addPlayers: () => {},
  setIsGameInProgress: () => {},
});

interface GameContextProviderProps {}

const GameContextProvider: React.FC<GameContextProviderProps> = ({
  children,
}) => {
  const [players, setPlayers] = useState<string[]>([]);
  const [isGameInProgress, setIsGameInProgress] = useState(false);

  const addPlayers = (newPlayers: string[]) => {
    setPlayers([...players, ...newPlayers]);
  };

  return (
    <GameContext.Provider
      value={{ players, isGameInProgress, addPlayers, setIsGameInProgress }}
    >
      {children}
    </GameContext.Provider>
  );
};

export default GameContextProvider;
