import React, { useState } from 'react';

const AutomationPage = () => {
  // States for managing automation settings
  const [wateringSchedule, setWateringSchedule] = useState('');
  const [fertilizerFrequency, setFertilizerFrequency] = useState('');
  const [temperatureRange, setTemperatureRange] = useState({ min: '', max: '' });
  const [humidityLevel, setHumidityLevel] = useState('');

  // Handlers for automation settings
  const handleWateringChange = (e) => setWateringSchedule(e.target.value);
  const handleFertilizerChange = (e) => setFertilizerFrequency(e.target.value);
  const handleTemperatureChange = (field, value) => setTemperatureRange(prev => ({ ...prev, [field]: value }));
  const handleHumidityChange = (e) => setHumidityLevel(e.target.value);

  return (
    <div className="bg-white min-h-screen p-8 rounded-md shadow-lg">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Farm Automation Settings</h1>

        {/* Watering Automation */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Watering Automation</h2>
          <label className="block mb-2 text-gray-600">Schedule:</label>
          <input
            type="text"
            value={wateringSchedule}
            onChange={handleWateringChange}
            placeholder="e.g., Every 6 hours or at 6 AM"
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Fertilizer Automation */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Fertilizer Automation</h2>
          <label className="block mb-2 text-gray-600">Frequency:</label>
          <input
            type="text"
            value={fertilizerFrequency}
            onChange={handleFertilizerChange}
            placeholder="e.g., Weekly or Monthly"
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Temperature Control Automation */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Temperature Control</h2>
          <div className="flex space-x-4">
            <div>
              <label className="block mb-2 text-gray-600">Min Temperature (°C):</label>
              <input
                type="number"
                value={temperatureRange.min}
                onChange={(e) => handleTemperatureChange('min', e.target.value)}
                placeholder="Min Temp"
                className="border p-2 rounded w-full"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-600">Max Temperature (°C):</label>
              <input
                type="number"
                value={temperatureRange.max}
                onChange={(e) => handleTemperatureChange('max', e.target.value)}
                placeholder="Max Temp"
                className="border p-2 rounded w-full"
              />
            </div>
          </div>
        </div>

        {/* Humidity Control Automation */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Humidity Control</h2>
          <label className="block mb-2 text-gray-600">Humidity Level (%):</label>
          <input
            type="number"
            value={humidityLevel}
            onChange={handleHumidityChange}
            placeholder="e.g., 40-60"
            className="border p-2 rounded w-full"
          />
        </div>

        {/* Save Button */}
        <div className="mt-8">
          <button
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow hover:bg-blue-600"
            onClick={() => alert('Settings saved successfully!')}
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default AutomationPage;
