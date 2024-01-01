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
        <p className="text-black">
        {weather.city}, {weather.dCountry}: {weather.temperature}°C, {weather.description}
        </p>
      </div>
    </motion.div>
  );
};

export default WeatherDisplay;
