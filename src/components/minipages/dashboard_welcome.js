import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Lottie from 'react-lottie';
import animationData from '../../asset/animations/planter.json';

const DashboardWelcome = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState({ lat: null, lon: null });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = 'a43601355f4281bddc9506c3fd3583a9'; 

  // Update the date and time every second
  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // Get user's current location
  useEffect(() => {
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

  // Fetch weather data based on user's location
  useEffect(() => {
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

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="bg-white min-h-screen p-8 rounded-md shadow-lg">
      <div className="container mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>
          <div className="animation-container">
          <Lottie options={defaultOptions} height={100} width={100} />
        </div>
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
                <p className="text-xl font-medium">
                  {weatherData.name}, {weatherData.sys.country}
                </p>
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

        {/* Lottie Animation after the dashboard content */}
       
      </div>
    </div>
  );
};

export default DashboardWelcome;