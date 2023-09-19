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
  height: 24px; /* Altura igual a la del botón */
  width: 200px; /* Ancho proporcional al cambio de tamaño del botón */
  padding: 5px; /* Espacio interno para el contenido */
  font-size: 16px; /* Tamaño de fuente */
`;

const Button = styled.button`
  background-color: #38761d;
  color: white;
  font-size: 16px;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin: 0 10px;
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
  font-weight: bolder;
  margin-top: 10px;
`;

function PlayerOptions(props) {
  const [nameInput, setNameInput] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNameChange = (event) => {
    setNameInput(event.target.value);
    // Limpia el mensaje de error cuando el usuario comienza a escribir
    setErrorMessage('');
  };

  const handleNameConfirmation = () => {
    if (nameInput.trim() !== '') {
      props.onNameConfirmed(nameInput);
    } else {
      // Establece el mensaje de error si el nombre está vacío
      setErrorMessage('Por favor, ingresa tu nombre antes de jugar.');
    }
  };

  return (
    <PlayerOptionsContainer>
      <Title>Ingresa tu nombre:</Title>
      <NameInput
        type="text"
        placeholder="Tu nombre"
        value={nameInput}
        onChange={handleNameChange}
      />
      <Button onClick={handleNameConfirmation}>Confirmar</Button>
      {/* Muestra el mensaje de error si existe */}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </PlayerOptionsContainer>
  );
}

export default PlayerOptions;