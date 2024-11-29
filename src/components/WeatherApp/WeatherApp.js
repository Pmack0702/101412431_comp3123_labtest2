import React, { useState } from "react";
import { Search } from "../Navbar/Search";
import { WeatherData } from "./WeatherData";
import { Box, Typography } from "@mui/material";

export const WeatherApp = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #4facfe, #00f2fe)", // Aesthetic gradient background
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: "bold",
          mb: 4,
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
        }}
      >
        Weather App
      </Typography>

      <Search
        setWeatherData={setWeatherData}
        setForecast={setForecast}
        setError={setError}
      />

      {error && (
        <Typography
          variant="body1"
          sx={{
            color: "red",
            fontWeight: "bold",
            mt: 3,
            textAlign: "center",
          }}
        >
          {error}
        </Typography>
      )}

      {weatherData && (
        <Box sx={{ mt: 4, width: "100%", maxWidth: "600px" }}>
          <WeatherData weatherData={weatherData} forecast={forecast} />
        </Box>
      )}
    </Box>
  );
};
