import React from 'react';
import { FaThermometerHalf, FaTint, FaSun, FaWind, FaSeedling, FaRobot } from 'react-icons/fa';

const IoTDevices = () => {
  const devices = [
    { name: 'Temperature Sensor', icon: FaThermometerHalf, connected: true },
    { name: 'Soil Moisture Sensor', icon: FaTint, connected: true },
    { name: 'Light Sensor', icon: FaSun, connected: false },
    { name: 'Weather Station', icon: FaWind, connected: true },
    { name: 'Plant Growth Monitor', icon: FaSeedling, connected: false },
    { name: 'Automated Irrigation System', icon: FaRobot, connected: true },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">IoT Devices</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {devices.map((device) => (
          <div key={device.name} className="flex items-center space-x-2 p-4 border rounded-lg">
            <device.icon className={`w-8 h-8 ${device.connected ? 'text-green-500' : 'text-gray-400'}`} />
            <span className="flex-grow">{device.name}</span>
            <button className={`px-3 py-1 rounded text-white ${device.connected ? 'bg-red-500' : 'bg-green-500'}`}>
              {device.connected ? 'Disconnect' : 'Connect'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IoTDevices;