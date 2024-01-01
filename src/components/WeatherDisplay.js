import React from "react";
import { motion } from "framer-motion";

const WeatherDisplay = ({ weather, unit }) => {
  if (!weather) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-4"
      style={{
        backgroundColor: "#87CEEB",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <div id="weatherInfo">
        <div className="card shadow-0 border">
          <div className="card-body p-4 text-black text-left">
            <h4 className="mb-1 font-semibold">
              {weather.city}, {weather.dCountry}
            </h4>
            <p className="mb-2">
              Current temperature:{" "}
              <strong>
                {unit = "metric"
                  ? `${weather.temperature}°C`
                  : `${weather.temperature}°F`}
              </strong>
            </p>
            <p>
              Feels like:{" "}
              <strong>
                {unit = "metric"
                  ? `${weather.feels_like}°C`
                  : `${weather.feels_like}°F`}
              </strong>
            </p>
            <p>
              Max:{" "}
              <strong>
                {unit = "metric"
                  ? `${weather.temp_max}°C`
                  : `${weather.temp_max}°F`}
              </strong>
              , Min:{" "}
              <strong>
                {unit = "metric"
                  ? `${weather.temp_min}°C`
                  : `${weather.temp_min}°F`}
              </strong>
            </p>
            <div className="flex items-center">
              <p className="mb-0 mr-4 uppercase font-bold">
                {weather.mainDescription}  &rArr;  {weather.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WeatherDisplay;
