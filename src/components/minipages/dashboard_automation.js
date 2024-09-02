import React, { useState, useEffect } from 'react';
import { FaBell, FaQuestionCircle } from 'react-icons/fa';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import IrrigationControl from './IrrigationControl';
import FertilizerControl from './FertilizerControl';
import TemperatureControl from './TemperatureControl';
import HumidityControl from './HumidityControl';

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
  { name: '00:00', temperature: 22, humidity: 45, soilMoisture: 60 },
  { name: '04:00', temperature: 20, humidity: 50, soilMoisture: 55 },
  { name: '08:00', temperature: 23, humidity: 48, soilMoisture: 58 },
  { name: '12:00', temperature: 26, humidity: 42, soilMoisture: 52 },
  { name: '16:00', temperature: 25, humidity: 45, soilMoisture: 54 },
  { name: '20:00', temperature: 23, humidity: 47, soilMoisture: 56 },
];

const AutomationDashboard = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Simulating real-time alerts
    const interval = setInterval(() => {
      const newAlert = {
        id: Date.now(),
        title: 'Low Soil Moisture Detected',
        description: 'Zone A soil moisture has dropped below 40%. Consider adjusting irrigation.',
      };
      setAlerts(prevAlerts => [...prevAlerts, newAlert]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleSaveSettings = () => {
    console.log('Saving all settings');
    alert('All settings saved successfully!');
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Farm Automation Dashboard</h1>
          <p className="text-gray-600 mt-2">Monitor and control your farm's operations in real-time</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Status Overview */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">System Status</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span>Irrigation Active</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span>Temperature Control Active</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <span>Fertilizer System Standby</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                <span>Humidity Control Active</span>
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

          {/* Control Components */}
          <IrrigationControl />
          <FertilizerControl />
          <TemperatureControl />
          <HumidityControl />
        </div>

        {/* Charts */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Environmental Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={mockChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="temperature" stroke="#ef4444" />
              <Line type="monotone" dataKey="humidity" stroke="#0ea5e9" />
              <Line type="monotone" dataKey="soilMoisture" stroke="#22c55e" />
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

export default AutomationDashboard;