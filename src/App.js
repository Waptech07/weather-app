import React, { useState } from "react";
import WeatherDisplay from "./components/WeatherDisplay";
import Helmet from "react-helmet";

const WeatherApp = () => {
  const [location, setLocation] = useState("");
  const [unit, setUnit] = useState("metric"); // Default to Celsius
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    setLoading(true);

    try {
      const apiKey = "a42e83f776f4b933ddcf8f29816cdcbc";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=${unit}`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      const {
        main,
        weather: weatherDetails,
        name,
        sys: { country },
      } = data;
      const temperature = main.temp;
      const feels_like = main.feels_like;
      const temp_min = main.temp_min;
      const temp_max = main.temp_max;
      const mainDescription = weatherDetails[0].main;
      const description = weatherDetails[0].description;
      const city = name;
      const dCountry = country;

      setWeather({
        temperature,
        mainDescription,
        description,
        city,
        dCountry,
        feels_like,
        temp_max,
        temp_min,
      });
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container mx-auto mt-10 max-w-md p-8 bg-white bg-opacity-60 shadow-md rounded-md flex items-center justify-center"
      id="container"
    >
      <Helmet>
        <title>WeatherApp☁️</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="w-full">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Weather App</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getWeather();
          }}
          className="space-y-4"
        >
          <div className="flex flex-wrap -mx-2">
            <div className="w-full px-2">
              <label
                htmlFor="locationInput"
                className="block text-sm font-medium text-gray-600 mb-1"
              >
                City
              </label>
              <input
                type="text"
                id="locationInput"
                placeholder="Enter City"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="unitSelect"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Temperature Unit
            </label>
            <select
              id="unitSelect"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="metric">Celsius</option>
              <option value="imperial">Fahrenheit</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Get Weather
          </button>
        </form>
        <div>
          {loading ? (
            <p className="mt-4 text-gray-600">Loading...</p>
          ) : (
            <WeatherDisplay weather={weather} />
          )}
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
