import React from "react";
import "./days.css";

function TempoInform3day({ tempoDays }) {
  let dailyForecast = {};

  for (let forecast of tempoDays.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();

    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast;
    }
  }
  console.log(dailyForecast);

  const nextdays = Object.values(dailyForecast).slice(1, 6);

  function convertDate(date) {
    const newDate = new Date(date.dt * 1000).toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
    });
    return newDate;
  }

  return (
    <div className="tempo-container">
      <h3>Proximos Dias</h3>
      <div className="tempo-list">
        {nextdays.map((forecast) => (
          <div key={forecast.dt} className="tempo-item">
            <p className="day">{convertDate(forecast)}</p>
            <img
              src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
            />
            <p className="fordescription">{forecast.weather[0].description}</p>
            <p>{Math.round(forecast.main.temp)} ºC</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TempoInform3day;
