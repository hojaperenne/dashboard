import React from 'react';
import styled from 'styled-components';

const ResultContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const ResultText = styled.h2`
  color: #333;
  font-size: 24px;
`;

function Result({ playerChoice, computerChoice }) {
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
    <ResultContainer>
      <ResultText>{result}</ResultText>
    </ResultContainer>
  );
}

export default Result;
