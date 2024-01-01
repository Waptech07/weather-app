import React, { useState } from 'react';
import WeatherDisplay from './WeatherDisplay';

const WeatherApp = () => {
  const [location, setLocation] = useState('');
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    // ... (unchanged)

    setWeather({
      temperature,
      description,
      city,
    });
  };

  return (
    <div className="container">
      <h1 className="text-4xl font-bold mb-8">Weather App (React)</h1>
      <form onSubmit={(e) => { e.preventDefault(); getWeather(); }}>
        <label htmlFor="locationInput" className="mb-2">Enter Location:</label>
        <input
          type="text"
          id="locationInput"
          placeholder="City"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="mb-2 p-2 border border-gray-300 rounded"
        />
        <button type="submit">Get Weather</button>
      </form>
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default WeatherApp;
