import "./App.css";
import React, { useRef, useState } from "react";
import TempoInform from "./components/TempoInform/TempoInform.jsx";
import TempoInform3day from "./components/Tempo3days/TempoInform3day.jsx";
import axios from "axios";

// API usada no projeto : https://openweathermap.org/
function App() {
  const inputRef = useRef();
  const [tempo, setTempo] = useState();
  const [tempoDays, setTempoDays] = useState();

  async function searchCity() {
    const city = inputRef.current.value; // variavel que guarda o nome da cidade escrita

    const key = "0b2963266a347001ef7c72c0cf76237f"; // variavel que guarda a chave da API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`; // API
    const urlNextDays = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;

    const apiInfo = await axios.get(url); // chamada da API
    const apiInfoDays = await axios.get(urlNextDays);

    setTempo(apiInfo.data);
    setTempoDays(apiInfoDays.data);
  }
  return (
    <div className="container">
      <p>By : Felipe Movio</p>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite a cidade" />
      <button onClick={searchCity}>Buscar</button>

      {tempo && <TempoInform tempo={tempo} />}
      {tempoDays && <TempoInform3day tempoDays={tempoDays} />}
    </div>
  );
}

export default App;
