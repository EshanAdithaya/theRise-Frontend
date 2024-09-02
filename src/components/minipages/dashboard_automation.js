import React, { useState } from 'react';
import { FaWater, FaTemperatureHigh, FaThermometerHalf, FaLeaf } from 'react-icons/fa';

const AutomationPage = () => {
  // States for managing automation settings
  const [wateringSchedule, setWateringSchedule] = useState('');
  const [fertilizerFrequency, setFertilizerFrequency] = useState('');
  const [temperatureRange, setTemperatureRange] = useState({ min: '', max: '' });
  const [humidityLevel, setHumidityLevel] = useState('');

  // Handlers for automation settings
  const handleWateringChange = (e) => setWateringSchedule(e.target.value);
  const handleFertilizerChange = (e) => setFertilizerFrequency(e.target.value);
  const handleTemperatureChange = (field, value) =>
    setTemperatureRange((prev) => ({ ...prev, [field]: value }));
  const handleHumidityChange = (e) => setHumidityLevel(e.target.value);

  // Save settings function
  const handleSaveSettings = () => {
    alert('Settings saved successfully!');
  };

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="container mx-auto">
        {/* Page Header */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-700">Farm Automation Settings</h1>
          <p className="text-gray-600 mt-2">Configure and optimize your farm's automation systems</p>
        </header>

        {/* Automation Settings Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Watering Automation Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaWater className="text-blue-500 text-2xl mr-2" />
              <h2 className="text-xl font-semibold text-gray-700">Watering Automation</h2>
            </div>
            <label className="block mb-2 text-gray-600">Schedule:</label>
            <input
              type="text"
              value={wateringSchedule}
              onChange={handleWateringChange}
              placeholder="e.g., Every 6 hours or at 6 AM"
              className="border p-2 rounded w-full focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Fertilizer Automation Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaLeaf className="text-green-500 text-2xl mr-2" />
              <h2 className="text-xl font-semibold text-gray-700">Fertilizer Automation</h2>
            </div>
            <label className="block mb-2 text-gray-600">Frequency:</label>
            <input
              type="text"
              value={fertilizerFrequency}
              onChange={handleFertilizerChange}
              placeholder="e.g., Weekly or Monthly"
              className="border p-2 rounded w-full focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Temperature Control Automation Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaThermometerHalf className="text-red-500 text-2xl mr-2" />
              <h2 className="text-xl font-semibold text-gray-700">Temperature Control</h2>
            </div>
            <div className="flex space-x-4 mb-4">
              <div className="flex-1">
                <label className="block mb-2 text-gray-600">Min Temperature (°C):</label>
                <input
                  type="number"
                  value={temperatureRange.min}
                  onChange={(e) => handleTemperatureChange('min', e.target.value)}
                  placeholder="Min Temp"
                  className="border p-2 rounded w-full focus:ring-2 focus:ring-red-400"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-2 text-gray-600">Max Temperature (°C):</label>
                <input
                  type="number"
                  value={temperatureRange.max}
                  onChange={(e) => handleTemperatureChange('max', e.target.value)}
                  placeholder="Max Temp"
                  className="border p-2 rounded w-full focus:ring-2 focus:ring-red-400"
                />
              </div>
            </div>
          </div>

          {/* Humidity Control Automation Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <FaTemperatureHigh className="text-yellow-500 text-2xl mr-2" />
              <h2 className="text-xl font-semibold text-gray-700">Humidity Control</h2>
            </div>
            <label className="block mb-2 text-gray-600">Humidity Level (%):</label>
            <input
              type="number"
              value={humidityLevel}
              onChange={handleHumidityChange}
              placeholder="e.g., 40-60"
              className="border p-2 rounded w-full focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>

        {/* Save Settings Button */}
        <div className="mt-12 text-center">
          <button
            className="bg-blue-600 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
            onClick={handleSaveSettings}
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutomationPage;
