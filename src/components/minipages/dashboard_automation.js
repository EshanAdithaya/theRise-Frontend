import React, { useState, useEffect } from 'react';
import { FaBell, FaQuestionCircle, FaBox, FaExclamationTriangle, FaHistory } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import InventoryOverview from './InventoryOverview';
import InventoryList from './InventoryList';
import AddItemForm from './AddItemForm';
import Alert from './Alert.js';

const mockChartData = [
  { category: 'Seeds', count: 50 },
  { category: 'Fertilizers', count: 30 },
  { category: 'Tools', count: 20 },
  { category: 'Pesticides', count: 15 },
  { category: 'Machinery', count: 5 },
];

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([]);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Fetch inventory data
    fetchInventory();

    // Simulate real-time alerts
    const interval = setInterval(() => {
      const newAlert = {
        id: Date.now(),
        title: 'Low Stock Alert',
        description: 'Fertilizer XYZ is running low. Consider restocking soon.',
      };
      setAlerts(prevAlerts => [...prevAlerts, newAlert]);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const fetchInventory = async () => {
    // Simulated API call
    const mockInventory = [
      { id: 1, name: 'Tomato Seeds', category: 'Seeds', quantity: 500, unitPrice: 0.5, expirationDate: '2024-12-31' },
      { id: 2, name: 'NPK Fertilizer', category: 'Fertilizers', quantity: 100, unitPrice: 25, expirationDate: '2025-06-30' },
      { id: 3, name: 'Pruning Shears', category: 'Tools', quantity: 50, unitPrice: 15, expirationDate: null },
    ];
    setInventory(mockInventory);
  };

  const handleAddItem = (newItem) => {
    setInventory(prevInventory => [...prevInventory, { ...newItem, id: Date.now() }]);
  };

  const handleUpdateItem = (updatedItem) => {
    setInventory(prevInventory => prevInventory.map(item => 
      item.id === updatedItem.id ? updatedItem : item
    ));
  };

  const handleDeleteItem = (itemId) => {
    setInventory(prevInventory => prevInventory.filter(item => item.id !== itemId));
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="container mx-auto max-w-6xl">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Inventory Management Dashboard</h1>
          <p className="text-gray-600 mt-2">Monitor and manage your farm's inventory in real-time</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <InventoryOverview inventory={inventory} />

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <FaBell className="mr-2 text-yellow-500" />
              Alerts
            </h2>
            <div className="space-y-4 max-h-60 overflow-y-auto">
              {alerts.map(alert => (
                <Alert key={alert.id} variant="warning">
                  <h3 className="font-semibold">{alert.title}</h3>
                  <p>{alert.description}</p>
                </Alert>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Inventory Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="category" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <InventoryList 
          inventory={inventory} 
          onUpdateItem={handleUpdateItem} 
          onDeleteItem={handleDeleteItem} 
        />

        <AddItemForm onAddItem={handleAddItem} />

        <div className="mt-8 text-center">
          <button className="text-blue-600 hover:text-blue-700 flex items-center justify-center mx-auto">
            <FaQuestionCircle className="mr-2" />
            View Inventory Guide
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryManagement;