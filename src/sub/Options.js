import React, { useState } from 'react';
import styled from 'styled-components';

import rockImage from '/workspace/practico3/src/resources/rock.png';
import paperImage from '/workspace/practico3/src/resources/paper.png';
import scissorsImage from '/workspace/practico3/src/resources/scissors.png';

const OptionsContainer = styled.div`
  text-align: center;
`;

const OptionImage = styled.img`
  width: 120px;
  margin: 10px 20px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
const ChoiseImage = styled.img`
  width: 100px;
  margin: 10px 120px; /* Ajusta el valor de margen según tu preferencia */
`;
const ChoicesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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