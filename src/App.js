import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Importación de los componentes necesarios
import PlayerOptions from '/workspace/practico3/src/sub/PlayerOptions'; // Importa el componente PlayerOptions
import Options from '/workspace/practico3/src/sub/Options'; // Importa el componente Options
import ScoreBoard from '/workspace/practico3/src/sub/ScoreBoard'; // Importa el componente ScoreBoard
import Result from '/workspace/practico3/src/sub/Result'; // Importa el componente Result

// Estilización del contenedor principal de la aplicación
const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background-color: #ffea00;
`;

// Estilización del contenedor interior que contiene el contenido central
const InnerContainer = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #ffea00;
  padding: 20px;
  max-width: 600px; /* Ancho máximo para evitar que el contenido se extienda demasiado en pantallas grandes */
  width: 90%; /* Porcentaje de ancho en pantallas medianas y grandes */
`;

// Estilización del título principal
const Title = styled.h1`
  color: #333;
`;

// Estilización de los botones
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
  const [showTitle, setShowTitle] = useState(true); // Estado para mostrar u ocultar el título
  const [playerName, setPlayerName] = useState(''); // Estado para almacenar el nombre del jugador
  const [playerChoice, setPlayerChoice] = useState(null); // Estado para la elección del jugador
  const [computerChoice, setComputerChoice] = useState(null); // Estado para la elección de la PC
  const [playerScore, setPlayerScore] = useState(0); // Estado para el puntaje del jugador
  const [computerScore, setComputerScore] = useState(0); // Estado para el puntaje de la PC
  const [round, setRound] = useState(1); // Estado para el número de ronda
  const [winner, setWinner] = useState(null); // Estado para el ganador
  const [showResults, setShowResults] = useState(false); // Estado para mostrar u ocultar los resultados

  useEffect(() => {
    // Efecto que se ejecuta cuando cambia el puntaje del jugador, el puntaje de la PC, la ronda o el nombre del jugador
    if (playerScore === 3 || computerScore === 3) {
      let winner;
      if (playerScore > computerScore) {
        winner = playerName; // El jugador gana
      } else if (computerScore > playerScore) {
        winner = 'La PC'; // La PC gana
      } else {
        winner = 'Empate'; // Empate
      }
      setWinner(winner); // Establece el ganador
    }
  }, [playerScore, computerScore, round, playerName]);

  const resetGame = () => {
    // Función para reiniciar el juego
    setPlayerScore(0);
    setComputerScore(0);
    setRound(1);
    setPlayerChoice(null);
    setComputerChoice(null);
    setWinner(null);
    setShowResults(false);
  };

  const goToNameInput = () => {
    // Función para volver a la pantalla de ingreso de nombre
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
    // Función para confirmar el nombre del jugador
    setPlayerName(name.toUpperCase()); // Almacena el nombre en mayúsculas
    setShowTitle(false); // Oculta el título al confirmar el nombre
  };

  const handleOptionSelection = (playerOption, computerOption) => {
    // Función para manejar la selección de opciones (piedra, papel o tijeras)
    setPlayerChoice(playerOption);
    setComputerChoice(computerOption);

    const result = determineWinner(playerOption, computerOption);
    if (result === 'Ganaste') {
      setPlayerScore(playerScore + 1); // Incrementa el puntaje del jugador
    } else if (result === 'La PC ganó') {
      setComputerScore(computerScore + 1); // Incrementa el puntaje de la PC
    }

    setRound(round + 1); // Incrementa el número de ronda
    setShowResults(true); // Muestra los resultados
  };

  const determineWinner = (playerOption, computerOption) => {
    // Función para determinar al ganador de una ronda
    if (
      (playerOption === 'rock' && computerOption === 'scissors') ||
      (playerOption === 'scissors' && computerOption === 'paper') ||
      (playerOption === 'paper' && computerOption === 'rock')
    ) {
      return 'Ganaste'; // El jugador gana
    } else if (playerOption === computerOption) {
      return 'Empate'; // Empate
    } else {
      return 'La PC ganó'; // La PC gana
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
