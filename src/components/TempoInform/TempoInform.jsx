import React from "react";
import "./TempoInform.css";

function TempoInform({ tempo }) {
  console.log(tempo);
  return (
    <div className="tempo-container">
      <h2>{tempo.name}</h2>
      <div className="tempo-info">
        <img
          src={`http://openweathermap.org/img/wn/${tempo.weather[0].icon}.png`}
        />
        <p className="temperatura">{Math.round(tempo.main.temp)}ºC</p>
      </div>
      <p className="description">{tempo.weather[0].description}</p>
      <div className="detalhes">
        <p>Sensação térmica:{Math.round(tempo.main.feels_like)}ºC</p>
        <p>Umidade:{tempo.main.humidity}%</p>
        <p>Pressão:{tempo.main.pressure}</p>
      </div>
    </div>
  );
}

export default TempoInform;
