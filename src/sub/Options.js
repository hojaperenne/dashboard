import React, { useState } from 'react';
import styled from 'styled-components';

import rockImage from '/workspace/practico3/src/resources/rock.png';
import paperImage from '/workspace/practico3/src/resources/paper.png';
import scissorsImage from '/workspace/practico3/src/resources/scissors.png';

const OptionsContainer = styled.div`
  text-align: center;
  margin-top: 20px; /* Añade margen superior para separar de otros elementos */
`;

const OptionImage = styled.img`
  width: 120px;
  margin: 10px; /* Ajusta el margen para un diseño más compacto */
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const ChoicesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; /* Permite que las opciones se envuelvan en pantallas pequeñas */
  margin: 20px 0; /* Ajusta el margen superior e inferior */
`;

const ChoiseImage = styled.img`
  width: 80px; /* Ajusta el tamaño de las imágenes de elección */
  margin: 10px; /* Ajusta el margen para un diseño más compacto */
`;

function Options(props) {
  const options = ["rock", "paper", "scissors"];
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);

  const handleOptionClick = (option) => {
    const computerOption = options[Math.floor(Math.random() * options.length)];
    setPlayerChoice(option);
    setComputerChoice(computerOption);
    props.onSelectOption(option, computerOption); // Llama a la función pasada como prop
  };

  return (
    <OptionsContainer>
      {playerChoice && computerChoice && (
        <div>
          <ChoicesContainer>
            <div>
              <ChoiseImage
                src={playerChoice === "rock" ? rockImage : playerChoice === "paper" ? paperImage : scissorsImage}
                alt={playerChoice}
              />
              <ChoiseImage
                src={computerChoice === "rock" ? rockImage : computerChoice === "paper" ? paperImage : scissorsImage}
                alt={computerChoice}
              />
            </div>
          </ChoicesContainer>
        </div>
      )}
      <h2>Elige una opción:</h2>
      <div className="options-container">
        {options.map((option) => (
          <OptionImage
            key={option}
            src={option === "rock" ? rockImage : option === "paper" ? paperImage : scissorsImage}
            alt={option}
            className={`option ${playerChoice === option && "selected"}`}
            onClick={() => handleOptionClick(option)}
          />
        ))}
      </div>
    </OptionsContainer>
  );
}

export default Options;