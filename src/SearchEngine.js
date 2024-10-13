import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [weather, setWeather] = useState({});
  let [search, setSearch] = useState(false);

  function weatherSearch(response) {
    setSearch(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=eb9542c65e739e0fb25ade97c749e2aa&units=metric`;
    axios.get(apiUrl).then(weatherSearch);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSearch}>
      <input type="search" placeholder="Enter a city.." onChange={updateCity} />
      <button type="Submit">Search</button>
    </form>
  );

  if (search) {
    return (
      <div>
        {form}
        <ul className="dots">
          <li>Temperature:{Math.round(weather.temperature)}°C</li>
          <li>Description:{weather.description}</li>
          <li>Humidity:{weather.humidity}%</li>
          <li>Wind:{weather.wind}km/h</li>

          <img src={weather.icon} alt={weather.description} />
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
