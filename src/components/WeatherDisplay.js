import React from 'react';
import { motion } from 'framer-motion';

const getBackgroundImage = (description) => {
  // Add more conditions based on your preferred backgrounds
  if (description.includes('rain')) {
    return 'rainy-background.jpg';
  } else if (description.includes('cloud')) {
    return 'cloudy-background.jpg';
  } else {
    return 'default-background.jpg';
  }
};

const WeatherDisplay = ({ weather }) => {
  const backgroundImage = getBackgroundImage(weather?.description);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', // Adjust text color for better contrast
        padding: '20px',
        borderRadius: '10px',
      }}
    >
      {weather && (
        <div id="weatherInfo">
          <p>{weather.city}: {weather.temperature}C, {weather.description}</p>
        </div>
      )}
    </motion.div>
  );
};

export default WeatherDisplay;
