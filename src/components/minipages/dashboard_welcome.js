import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardWelcome = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState({ lat: null, lon: null });
  const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your OpenWeatherMap API key

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }, []);

  useEffect(() => {
    if (location.lat && location.lon) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`
        )
        .then((response) => {
          setWeatherData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching weather data:', error);
        });
    }
  }, [location, API_KEY]);

  return (
    <div className=" bg-white min-h-screen rounded-md">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
          <p className="text-lg mt-2">
            Current Date and Time: {dateTime.toLocaleDateString()}{' '}
            {dateTime.toLocaleTimeString()}
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Current Weather</h2>
          {weatherData ? (
            <div className="mt-4 p-4 bg-white rounded shadow-md">
              <p>Location: {weatherData.name}, {weatherData.sys.country}</p>
              <p>Temperature: {weatherData.main.temp}°C</p>
              <p>Weather: {weatherData.weather[0].description}</p>
            </div>
          ) : (
            <p>Loading weather data...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardWelcome;