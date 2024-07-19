import React, { useState } from 'react';
import './App.css';

const paisesLatinos = [
  { pais: 'Argentina', capital: 'Buenos Aires' },
  { pais: 'Bolivia', capital: 'Sucre' },
  { pais: 'Brasil', capital: 'Brasilia' },
  { pais: 'Chile', capital: 'Santiago' },
  { pais: 'Colombia', capital: 'Bogotá' },
  { pais: 'Costa Rica', capital: 'San José' },
  { pais: 'Cuba', capital: 'La Habana' },
  { pais: 'Ecuador', capital: 'Quito' },
  { pais: 'El Salvador', capital: 'San Salvador' },
  { pais: 'Guatemala', capital: 'Ciudad de Guatemala' },
  { pais: 'Honduras', capital: 'Tegucigalpa' },
  { pais: 'México', capital: 'Ciudad de México' },
  { pais: 'Nicaragua', capital: 'Managua' },
  { pais: 'Panamá', capital: 'Ciudad de Panamá' },
  { pais: 'Paraguay', capital: 'Asunción' },
  { pais: 'Perú', capital: 'Lima' },
  { pais: 'República Dominicana', capital: 'Santo Domingo' },
  { pais: 'Uruguay', capital: 'Montevideo' },
  { pais: 'Venezuela', capital: 'Caracas' }
];

function App() {
  const [inputText, setInputText] = useState('');//el texto ingresado por el usuario
  const [capital, setCapital] = useState('');//actualiza la capital

  // atualiza el estado del imputtext
  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };


  const mostrarCapital = () => {
    const paisEncontrado = paisesLatinos.find(pais => pais.pais.toLowerCase() === inputText.toLowerCase());
    if (paisEncontrado) {
      setCapital(paisEncontrado.capital);
    } else {
      setCapital('Capital no encontrada');
    }
  };

  return (
    <div className='App'>
      <input
        className='input-seleccion'
        type="text"
        placeholder='Escribe el país que deseas mostrar su bandera'
        value={inputText}
        onChange={handleInputChange}
      />
      <button onClick={mostrarCapital}>Mostrar Capital</button>
      <h1 className='capital'>{capital}</h1>
    </div>
  );
}

export default App;
