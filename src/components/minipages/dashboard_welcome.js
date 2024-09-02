import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardWelcome = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = 'YOUR_API_KEY_HERE'; // Replace with your OpenWeatherMap API key

  useEffect(() => {
    // Update the date and time every second
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Get user's current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          });
          setError(null);
        },
        (error) => {
          setError('Unable to retrieve your location.');
          setLoading(false);
        }
      );
    } else {
      setError('Geolocation is not supported by this browser.');
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Fetch weather data based on user's location
    if (location.lat && location.lon) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric`
        )
        .then((response) => {
          setWeatherData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          setError('Error fetching weather data.');
          setLoading(false);
        });
    }
  }, [location, API_KEY]);

  return (
    <div className="bg-white min-h-screen p-8 rounded-md shadow-lg">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
          <p className="text-lg mt-2">
            Current Date and Time: {dateTime.toLocaleDateString()}{' '}
            {dateTime.toLocaleTimeString()}
          </p>
        </div>

        {/* Weather Information */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold">Current Weather</h2>
          {loading ? (
            <div className="mt-4 p-4 bg-gray-100 rounded shadow-md">
              <p>Loading weather data...</p>
            </div>
          ) : error ? (
            <div className="mt-4 p-4 bg-red-100 rounded shadow-md text-red-600">
              <p>{error}</p>
            </div>
          ) : weatherData ? (
            <div className="mt-4 p-4 bg-blue-50 rounded shadow-md flex items-center space-x-4">
              <div>
                <img
                  src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                  alt="Weather Icon"
                  className="w-12 h-12"
                />
              </div>
              <div>
                <p className="text-xl font-medium">{weatherData.name}, {weatherData.sys.country}</p>
                <p className="text-lg">Temperature: {weatherData.main.temp}°C</p>
                <p className="text-lg">Weather: {weatherData.weather[0].description}</p>
                <p className="text-sm text-gray-500">Humidity: {weatherData.main.humidity}%</p>
                <p className="text-sm text-gray-500">Wind Speed: {weatherData.wind.speed} m/s</p>
              </div>
            </div>
          ) : (
            <div className="mt-4 p-4 bg-gray-100 rounded shadow-md">
              <p>No weather data available.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardWelcome;
