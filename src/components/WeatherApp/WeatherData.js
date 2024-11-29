import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Avatar,
  Divider,
} from "@mui/material";

export const WeatherData = ({ weatherData, forecast }) => {
  if (!weatherData || !forecast) return null;

  const { name, main, weather, wind } = weatherData;
  const currentDay = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <Card
      sx={{
        maxWidth: 600,
        margin: "auto",
        mt: 4,
        background: "linear-gradient(to right, #4facfe, #00f2fe)",
        color: "#fff",
        borderRadius: "16px",
        boxShadow: 3,
      }}
    >
      <CardContent>
        {/* Current Weather Section */}
        <Box textAlign="center" mb={3}>
          <Typography variant="h4">{currentDay}</Typography>
          <Typography variant="h5">{name}</Typography>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            {Math.round(main.temp)}°C
          </Typography>
          <Typography variant="subtitle1" sx={{ fontStyle: "italic" }}>
            {weather[0].description}
          </Typography>
        </Box>

        <Divider sx={{ bgcolor: "#ffffff80", mb: 2 }} />

        {/* Detailed Info Section */}
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={6} sm={4}>
            <Typography variant="body1">HUMIDITY:</Typography>
            <Typography variant="h6">{main.humidity}%</Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="body1">WIND:</Typography>
            <Typography variant="h6">{wind.speed} km/h</Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="body1">PRESSURE:</Typography>
            <Typography variant="h6">{main.pressure} mb</Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="body1">MAX TEMP:</Typography>
            <Typography variant="h6">{Math.round(main.temp_max)}°C</Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="body1">MIN TEMP:</Typography>
            <Typography variant="h6">{Math.round(main.temp_min)}°C</Typography>
          </Grid>
        </Grid>

        <Divider sx={{ bgcolor: "#ffffff80", mt: 3, mb: 2 }} />

        {/* Forecast Section */}
        <Box>
          <Typography variant="h5" textAlign="center" mb={2}>
            Weekly Forecast
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {forecast.map((day, index) => (
              <Grid
                item
                key={index}
                xs={6}
                sm={4}
                md={2}
                textAlign="center"
                sx={{ color: "#fff" }}
              >
                <Typography variant="body1">{day.day}</Typography>
                <Avatar
                  src={`http://openweathermap.org/img/wn/${day.icon}@2x.png`}
                  alt={day.description}
                  sx={{ width: 60, height: 60, margin: "auto" }}
                />
                <Typography variant="h6">{Math.round(day.temp)}°C</Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </CardContent>
    </Card>
  );
};
