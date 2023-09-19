import React, { useState, useEffect } from 'react';
import styled from 'styled-components'; // Importa la librería Styled Components

// Subcomponentes
import PlayerOptions from '/workspace/practico3/src/sub/PlayerOptions';
import Options from '/workspace/practico3/src/sub/Options'; // Importa el componente Options
import ScoreBoard from '/workspace/practico3/src/sub/ScoreBoard'; // Importa el componente ScoreBoard
import Result from '/workspace/practico3/src/sub/Result'; // Importa el componente Result

// Define estilos para el contenedor principal
const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150vh;
  width: auto;
  background-color: #ffea00;
  border: 5px solid black; /* Borde negro de 5px */
`;

const InnerContainer = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #ffea00;
  padding: 20px;
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
  const [showTitle, setShowTitle] = useState(true); // Nuevo estado para mostrar/ocultar el título
  const [playerName, setPlayerName] = useState('');
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [round, setRound] = useState(1);
  const [winner, setWinner] = useState(null);
  const [showResults, setShowResults] = useState(false); // Nuevo estado para mostrar/ocultar la sección de resultados

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
    setShowResults(false); // Ocultar la sección de resultados al reiniciar el juego
  };

  const goToNameInput = () => {
    setPlayerName('');
    setPlayerChoice(null);
    setComputerChoice(null);
    setPlayerScore(0);
    setComputerScore(0);
    setRound(1);
    //setGameOver(false);
    setWinner(null);
    setShowTitle(true); // Mostrar el título nuevamente al reiniciar el juego
    setShowResults(false); // Ocultar la sección de resultados al reiniciar el juego
  };

  const handleNameConfirmed = (name) => {
    setPlayerName(name);
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
    // Mostrar la sección de resultados después de la primera jugada
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
        {showTitle && <Title>Juego de Piedra, Papel o Tijera</Title>}
        {playerName ? (
          <div>
            <Title>¡Hola, {playerName}!</Title>
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