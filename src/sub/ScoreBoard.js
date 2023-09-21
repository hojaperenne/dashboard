import React from 'react';
import styled, { keyframes } from 'styled-components';

// Definición de una animación llamada 'changeBorderColor' utilizando keyframes
const changeBorderColor = keyframes`
  0% {
    border-image-slice: 1;
    border-image-source: linear-gradient(to right, #00ff00, #008000);
  }
  50% {
    border-image-slice: 1;
    border-image-source: linear-gradient(to right, #008000, #00ff00);
  }
  100% {
    border-image-slice: 1;
    border-image-source: linear-gradient(to right, #00ff00, #008000);
  }
`;

// Estilización del contenedor principal del marcador
const ScoreContainer = styled.div`
  text-align: center;
  background-color: #333;
  color: #fff;
  padding: 1px 10px 10px 10px;
  border-radius: 10px;
  font-family: QuiverItal;
  font-size: 30px;
  color: #00ff00; /* Establece el color de texto en verde */
`;

// Estilización del contenedor que alberga los puntajes de jugador y PC
const Scores = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap; /* Permite que los elementos se envuelvan en pantallas pequeñas */
  margin-bottom: 10px;
`;

// Estilización de los cuadros de puntaje individuales
const ScoreBox = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px;
  min-width: 150px; /* Ancho mínimo para los ScoreBoxes */
  background-color: #444;
  border-radius: 5px;
  border: 5px solid transparent;
  animation: ${changeBorderColor} 3s infinite alternate; /* Aplica la animación 'changeBorderColor' */
`;

// Estilización del texto de puntaje
const ScoreText = styled.p`
  margin: 1px 0; /* Ajusta el margen superior e inferior aquí */
`;

function ScoreBoard({ roundNumber, playerScore, computerScore }) {
  return (
    <ScoreContainer>
      <ScoreText>ROUND 0{roundNumber}</ScoreText>
      <Scores>
        <ScoreBox>
          <ScoreText>JUGADOR: {playerScore}</ScoreText>
        </ScoreBox>
        <ScoreBox>
          <ScoreText>PC: {computerScore}</ScoreText>
        </ScoreBox>
      </Scores>
    </ScoreContainer>
  );
}

export default ScoreBoard;
