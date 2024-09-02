import React, { useState, useEffect } from 'react';
import { FaBell, FaQuestionCircle, FaSeedling, FaThermometerHalf, FaTint, FaWind } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Custom Alert component
const Alert = ({ children, variant = "warning" }) => {
  const bgColor = variant === "warning" ? "bg-yellow-100" : "bg-red-100";
  const textColor = variant === "warning" ? "text-yellow-800" : "text-red-800";
  
  return (
    <div className={`p-4 rounded-md ${bgColor} ${textColor}`}>
      {children}
    </div>
  );
};

// Mock data for charts
const mockChartData = [
  { name: 'Mon', height: 5, soilMoisture: 60, temperature: 22 },
  { name: 'Tue', height: 7, soilMoisture: 58, temperature: 23 },
  { name: 'Wed', height: 10, soilMoisture: 55, temperature: 24 },
  { name: 'Thu', height: 15, soilMoisture: 57, temperature: 22 },
  { name: 'Fri', height: 18, soilMoisture: 59, temperature: 23 },
  { name: 'Sat', height: 22, soilMoisture: 56, temperature: 25 },
  { name: 'Sun', height: 25, soilMoisture: 58, temperature: 24 },
];

const CropManagement = () => {
  const [alerts, setAlerts] = useState([]);
  const [crops, setCrops] = useState({
    totalCrops: 5,
    growthStages: { germination: 10, vegetative: 70, flowering: 20, harvest: 0 },
    healthStatus: { healthy: 80, warning: 15, critical: 5 },
  });

  const [sensorData, setSensorData] = useState({
    soilMoisture: 58,
    temperature: 23,
    humidity: 45,
  });

  useEffect(() => {
    // Simulating real-time alerts
    const interval = setInterval(() => {
      const newAlert = {
        id: Date.now(),
        title: 'Low Soil Moisture Detected',
        description: 'Field A soil moisture has dropped below 50%. Consider adjusting irrigation.',
      };
      setAlerts(prevAlerts => [...prevAlerts, newAlert]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleSaveSettings = () => {
    console.log('Saving all settings');
    alert('All crop management settings saved successfully!');
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Crop Management Dashboard</h1>
          <p className="text-gray-600 mt-2">Monitor and manage your crops in real-time</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Crop Overview */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Crop Overview</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <FaSeedling className="text-green-500 mr-2" />
                <span>Total Crops: {crops.totalCrops}</span>
              </div>
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-600 h-2.5 rounded-full" style={{width: `${crops.growthStages.vegetative}%`}}></div>
                </div>
                <span className="ml-2">{crops.growthStages.vegetative}% Vegetative</span>
              </div>
              <div className="flex items-center">
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{width: `${crops.healthStatus.healthy}%`}}></div>
                </div>
                <span className="ml-2">{crops.healthStatus.healthy}% Healthy</span>
              </div>
            </div>
          </div>

          {/* Alerts */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaBell className="mr-2 text-yellow-500" />
              Alerts
            </h2>
            <div className="space-y-4 max-h-60 overflow-y-auto">
              {alerts.map(alert => (
                <Alert key={alert.id}>
                  <h3 className="font-semibold">{alert.title}</h3>
                  <p>{alert.description}</p>
                </Alert>
              ))}
            </div>
          </div>

          {/* Sensor Data */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Sensor Data</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <FaTint className="text-blue-500 text-3xl mb-2 mx-auto" />
                <div className="text-2xl font-bold">{sensorData.soilMoisture}%</div>
                <div className="text-sm text-gray-600">Soil Moisture</div>
              </div>
              <div className="text-center">
                <FaThermometerHalf className="text-red-500 text-3xl mb-2 mx-auto" />
                <div className="text-2xl font-bold">{sensorData.temperature}°C</div>
                <div className="text-sm text-gray-600">Temperature</div>
              </div>
              <div className="text-center">
                <FaWind className="text-green-500 text-3xl mb-2 mx-auto" />
                <div className="text-2xl font-bold">{sensorData.humidity}%</div>
                <div className="text-sm text-gray-600">Humidity</div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Add New Crop
              </button>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                Update Crop Details
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
                Generate Report
              </button>
              <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded">
                Schedule Task
              </button>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Crop Growth Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip />
              <Line yAxisId="left" type="monotone" dataKey="height" stroke="#22c55e" name="Height (cm)" />
              <Line yAxisId="right" type="monotone" dataKey="soilMoisture" stroke="#3b82f6" name="Soil Moisture (%)" />
              <Line yAxisId="right" type="monotone" dataKey="temperature" stroke="#ef4444" name="Temperature (°C)" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Save Settings Button */}
        <div className="text-center">
          <button
            onClick={handleSaveSettings}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
          >
            Save All Settings
          </button>
        </div>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <button className="text-blue-600 hover:text-blue-700 flex items-center justify-center mx-auto">
            <FaQuestionCircle className="mr-2" />
            View User Guide
          </button>
        </div>
      </div>
    </div>
  );
};

export default CropManagement;