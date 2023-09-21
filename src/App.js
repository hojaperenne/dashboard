import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import PlayerOptions from '/workspace/practico3/src/sub/PlayerOptions';
import Options from '/workspace/practico3/src/sub/Options'; // Importa el componente Options
import ScoreBoard from '/workspace/practico3/src/sub/ScoreBoard'; // Importa el componente ScoreBoard
import Result from '/workspace/practico3/src/sub/Result'; // Importa el componente Result

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #ffea00;
`;

const InnerContainer = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #ffea00;
  padding: 20px;
  max-width: 600px; /* Ancho máximo para evitar que el contenido se extienda demasiado en pantallas grandes */
  width: 90%; /* Porcentaje de ancho en pantallas medianas y grandes */
`;

const Title = styled.h1`
  color: #333;
`;

const Button = styled.button`
  background-color: #38761d;
  color: white;
  font-size: 16px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin: 10px 10px;
`;

function App() {
  const [showTitle, setShowTitle] = useState(true);
  const [playerName, setPlayerName] = useState('');
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [round, setRound] = useState(1);
  const [winner, setWinner] = useState(null);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (playerScore === 3 || computerScore === 3) {
      let winner;
      if (playerScore > computerScore) {
        winner = playerName;
      } else if (computerScore > playerScore) {
        winner = 'La PC';
      } else {
        winner = 'Empate';
      }
      setWinner(winner);
    }
  }, [playerScore, computerScore, round, playerName]);

  const resetGame = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setRound(1);
    setPlayerChoice(null);
    setComputerChoice(null);
    setWinner(null);
    setShowResults(false);
  };

  const goToNameInput = () => {
    setPlayerName('');
    setPlayerChoice(null);
    setComputerChoice(null);
    setPlayerScore(0);
    setComputerScore(0);
    setRound(1);
    setWinner(null);
    setShowTitle(true);
    setShowResults(false);
  };

  const handleNameConfirmed = (name) => {
    setPlayerName(name.toUpperCase()); // Almacena el nombre en mayúsculas
    setShowTitle(false); // Ocultar el título al confirmar el nombre
  };

  const handleOptionSelection = (playerOption, computerOption) => {
    setPlayerChoice(playerOption);
    setComputerChoice(computerOption);

    const result = determineWinner(playerOption, computerOption);
    if (result === 'Ganaste') {
      setPlayerScore(playerScore + 1);
    } else if (result === 'La PC ganó') {
      setComputerScore(computerScore + 1);
    }

    setRound(round + 1);
    setShowResults(true);
  };

  const determineWinner = (playerOption, computerOption) => {
    if (
      (playerOption === 'rock' && computerOption === 'scissors') ||
      (playerOption === 'scissors' && computerOption === 'paper') ||
      (playerOption === 'paper' && computerOption === 'rock')
    ) {
      return 'Ganaste';
    } else if (playerOption === computerOption) {
      return 'Empate';
    } else {
      return 'La PC ganó';
    }
  };

  return (
    <AppContainer>
      <InnerContainer>
        {showTitle && !winner && <Title>Juego de Piedra, Papel o Tijera</Title>}
        {playerName ? (
          <div>
            {winner ? (
              <div>
                <h2>
                  {winner === playerName ? '¡Has ganado!' : 'La PC ha ganado.'}
                </h2>
                <Button onClick={resetGame}>Reiniciar Partida</Button>
                <Button onClick={goToNameInput}>Reiniciar Juego</Button>
              </div>
            ) : (
              <div>
                {playerName && !winner && <Title>¡Hola, {playerName}!</Title>}
                <ScoreBoard
                  roundNumber={round}
                  playerScore={playerScore}
                  computerScore={computerScore}
                  playerChoice={playerChoice}
                  computerChoice={computerChoice}
                />
                {showResults && (
                  <Result
                    playerChoice={playerChoice}
                    computerChoice={computerChoice}
                    round={round}
                  />
                )}
                <Options onSelectOption={handleOptionSelection} />
              </div>
            )}
          </div>
        ) : (
          <PlayerOptions onNameConfirmed={handleNameConfirmed} />
        )}
      </InnerContainer>
    </AppContainer>
  );
}

export default App;
