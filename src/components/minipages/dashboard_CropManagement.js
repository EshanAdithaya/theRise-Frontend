import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../miniComponents/card';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

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
    <div className="grid grid-cols-2 gap-4 bg-white rounded-md">
      {/* Stocks Component */}  
        <Card>
          <CardHeader>Stocks</CardHeader>
          <CardContent>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left">Item</th>
                  <th className="text-right">Quantity</th>
                  <th className="text-right">Unit</th>
                </tr>
              </thead>
              <tbody>
                {stocks.map((item, index) => (
                  <tr key={index}>
                    <td className="text-left">{item.name}</td>
                    <td className="text-right">{item.quantity}</td>
                    <td className="text-right">{item.unit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      

      {/* Analytics Component */}
      <Card>
        <CardHeader>Analytics</CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Bar dataKey="yield" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default CropManagement;
