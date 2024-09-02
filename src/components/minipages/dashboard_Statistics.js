// src/components/minipages/dashboard_statistics.js
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from 'recharts';

const Statistics = () => {
  // Sample data for charts
  const cropData = [
    { name: 'Jan', growth: 4000, yield: 2400 },
    { name: 'Feb', growth: 3000, yield: 1398 },
    { name: 'Mar', growth: 2000, yield: 9800 },
    { name: 'Apr', growth: 2780, yield: 3908 },
    { name: 'May', growth: 1890, yield: 4800 },
    { name: 'Jun', growth: 2390, yield: 3800 },
    { name: 'Jul', growth: 3490, yield: 4300 },
  ];

  const inventoryData = [
    { name: 'Seeds', quantity: 300 },
    { name: 'Fertilizers', quantity: 100 },
    { name: 'Pesticides', quantity: 200 },
    { name: 'Tools', quantity: 80 },
  ];

  const automationData = [
    { name: 'Watering', value: 400 },
    { name: 'Fertilizing', value: 300 },
    { name: 'Temperature Control', value: 300 },
    { name: 'Humidity Control', value: 200 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-700">System Statistics</h1>
          <p className="text-gray-500">A comprehensive overview of all key metrics and performance indicators.</p>
        </div>

        {/* KPI Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700">Total Crops</h2>
            <p className="text-3xl font-bold text-green-500">124</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700">Inventory Value</h2>
            <p className="text-3xl font-bold text-blue-500">$32,450</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700">Automation Tasks</h2>
            <p className="text-3xl font-bold text-yellow-500">52</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700">Crop Yield</h2>
            <p className="text-3xl font-bold text-red-500">78%</p>
          </div>
        </div>

        {/* Graphical Representation Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Line Chart for Crop Growth Over Time */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Crop Growth Over Time</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={cropData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="growth" stroke="#8884d8" />
                <Line type="monotone" dataKey="yield" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart for Inventory Levels */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Inventory Levels</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={inventoryData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="quantity" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pie Chart for Automation Task Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Automation Task Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={automationData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {automationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Detailed Statistics Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Detailed Statistics</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-sm leading-4 text-gray-700">Category</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-sm leading-4 text-gray-700">Details</th>
                <th className="py-2 px-4 border-b border-gray-200 text-left text-sm leading-4 text-gray-700">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">Crop Management</td>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">Regular monitoring and updates</td>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-green-500">Active</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">Inventory Management</td>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">Sufficient stock levels</td>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-blue-500">Healthy</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">Automation Processes</td>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">Efficient task execution</td>
                <td className="py-2 px-4 border-b border-gray-200 text-sm text-yellow-500">Moderate</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
