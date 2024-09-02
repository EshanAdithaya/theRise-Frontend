import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../miniComponents/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const CropManagement = () => {
  // State for Stocks
  const [stocks, setStocks] = useState([
    { name: 'Seeds', quantity: 500, unit: 'kg' },
    { name: 'Fertilizer', quantity: 200, unit: 'kg' },
    { name: 'Pesticides', quantity: 50, unit: 'L' },
  ]);

  // State for Analytics
  const [chartData, setChartData] = useState([
    { name: 'Jan', yield: 1500 },
    { name: 'Feb', yield: 1800 },
    { name: 'Mar', yield: 1700 },
    { name: 'Apr', yield: 2000 },
    { name: 'May', yield: 1900 },
    { name: 'Jun', yield: 2100 },
  ]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Stocks Component */}
        <Card>
          <CardHeader className="bg-green-600 text-white">
            <h2 className="text-xl font-semibold">Stocks</h2>
          </CardHeader>
          <CardContent>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Item</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Unit</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {stocks.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{item.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-right">{item.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        {/* Analytics Component */}
        <Card>
          <CardHeader className="bg-blue-600 text-white">
            <h2 className="text-xl font-semibold">Analytics</h2>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="yield" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CropManagement;
