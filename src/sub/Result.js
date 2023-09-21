import React from 'react';
import styled from 'styled-components';

const ResultContainer = styled.div`
  text-align: center;
  margin-top: 20px; /* Margen superior para separar el resultado de las opciones de juego */
`;

const ResultText = styled.h2`
  color: #333;
  font-size: 24px;
`;

function Result({ playerChoice, computerChoice }) {
  // Función para determinar el ganador de la ronda
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

  const result = determineWinner(); // Determina el resultado de la ronda

  return (
    <ResultContainer>
      <ResultText>{result}</ResultText> {/* Muestra el resultado de la ronda en pantalla */}
    </ResultContainer>
  );
}

export default Result;
