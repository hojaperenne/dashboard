import React from 'react';

function Result(props) {
  const { playerChoice, computerChoice } = props;

  // Implementa la lógica para determinar el resultado del juego
  const determineWinner = () => {
    if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'scissors' && computerChoice === 'paper') ||
      (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
      return 'Ganaste esta ronda';
    } else if (
      (computerChoice === 'rock' && playerChoice === 'scissors') ||
      (computerChoice === 'scissors' && playerChoice === 'paper') ||
      (computerChoice === 'paper' && playerChoice === 'rock')
    ) {
      return 'PC ganó esta ronda';
    } else {
      return 'Empate en esta ronda';
    }
  };

  const result = determineWinner();

  return (
    <div>
      <h2>{result}</h2>
    </div>
  );
}

export default Result;