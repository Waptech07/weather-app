// src/WeatherDisplay.js
import React from "react";
import { motion } from "framer-motion";

const getBackgroundImage = (description) => {
  if (!description) {
    // If description is not available, use a default background
    return "./assets/default.jpg";
  }

  // Add more conditions based on your preferred backgrounds
  if (description.includes("rain")) {
    return "./assets/rainy.jpg";
  } else if (description.includes("cloud")) {
    return "./assets/cloudy.jpg";
  } else {
    return "./assets/default.jpg";
  }
};

const WeatherDisplay = ({ weather }) => {
  // Check if weather is undefined or null
  if (!weather) {
    return null; // or display a loading message or a default component
  }

  const backgroundImage = getBackgroundImage(weather?.description);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white", // Adjust text color for better contrast
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <div id="weatherInfo">
        <div class="card shadow-0 border">
          <div class="card-body p-4 text-black text-left">
            <h4 class="mb-1 sfw-normal">
              {weather.city}, {weather.dCountry}
            </h4>
            <p class="mb-2">
              Current temperature: <strong>{weather.temperature}°C</strong>
            </p>
            <p>
              Feels like: <strong>{weather.feels_like}°C</strong>
            </p>
            <p>
              Max: <strong>{weather.temp_max}°C</strong>, Min:{" "}
              <strong>{weather.temp_min}°C</strong>
            </p>
            <div class="d-flex flex-row align-items-center">
              <p class="mb-0 me-4">{weather.description}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherDisplay;
