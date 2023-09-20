import React, { useState } from 'react';
import styled from 'styled-components';

const PlayerOptionsContainer = styled.div`
  text-align: center;
  font-family: Arial, sans-serif;
  background-color: #ffea00;
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
`;

const NameInput = styled.input`
  height: 24px;
  width: 80%; /* Utiliza un ancho relativo para adaptarse a diferentes tamaños de pantalla */
  max-width: 300px; /* Establece un ancho máximo para evitar que el input sea demasiado ancho */
  padding: 5px;
  font-size: 16px;
  margin: 10px auto; /* Centra el input horizontalmente */
  display: block; /* Hace que el input ocupe todo el ancho disponible */
  text-transform: uppercase; /* Convierte el texto a mayúsculas */
`;

const Button = styled.button`
  background-color: #38761d;
  color: white;
  font-size: 16px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin: 10px auto; /* Centra los botones horizontalmente */
  display: block; /* Hace que los botones ocupen todo el ancho disponible */
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
  font-weight: bolder;
  margin-top: 10px;
`;

function PlayerOptions({ onNameConfirmed }) {
  const [nameInput, setNameInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameConfirmation = () => {
    if (nameInput.trim() === '') {
      setErrorMessage('Por favor, ingresa tu nombre antes de jugar.');
    } else {
      onNameConfirmed(nameInput);
    }
  };

  return (
    <PlayerOptionsContainer>
      <Title>Ingresa tu nombre:</Title>
      <NameInput
        type="text"
        placeholder="Tu nombre"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
      <Button onClick={handleNameConfirmation}>Confirmar</Button>
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </PlayerOptionsContainer>
  );
}

export default PlayerOptions;
