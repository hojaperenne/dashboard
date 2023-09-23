import React, { Component } from 'react';
import styled from 'styled-components';

const WeatherMinMaxContainer = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const TemperatureLabel = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const TemperatureValues = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TemperatureValue = styled.div`
  flex: 1;
  text-align: center;
  font-size: 24px;
`;

class WeatherMinMax extends Component {
  // ... Tu lógica existente para obtener datos y establecer el estado

  render() {
    // Extrae los datos del estado o props
    //const { minTemperature, maxTemperature } = this.state;

    return (
      <WeatherMinMaxContainer>
        <TemperatureLabel>Temperature Min/Max</TemperatureLabel>
        <TemperatureValues>
          <TemperatureValue>Min: {/*{minTemperature}*/}11°C</TemperatureValue>
          <TemperatureValue>Max: {/*{maxTemperature}*/}22°C</TemperatureValue>
        </TemperatureValues>
      </WeatherMinMaxContainer>
    );
  }
}

export default WeatherMinMax;
