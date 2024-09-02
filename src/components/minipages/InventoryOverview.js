import React from 'react';
import { FaBox, FaExclamationTriangle, FaHistory } from 'react-icons/fa';

const InventoryOverview = ({ inventory }) => {
  const totalItems = inventory.reduce((sum, item) => sum + item.quantity, 0);
  const lowStockItems = inventory.filter(item => item.quantity < 10).length;
  const categories = new Set(inventory.map(item => item.category)).size;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Inventory Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center">
          <FaBox className="text-blue-500 mr-2 text-2xl" />
          <div>
            <p className="text-sm text-gray-600">Total Items</p>
            <p className="text-lg font-semibold">{totalItems}</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaExclamationTriangle className="text-yellow-500 mr-2 text-2xl" />
          <div>
            <p className="text-sm text-gray-600">Low Stock Items</p>
            <p className="text-lg font-semibold">{lowStockItems}</p>
          </div>
        </div>
        <div className="flex items-center">
          <FaHistory className="text-green-500 mr-2 text-2xl" />
          <div>
            <p className="text-sm text-gray-600">Categories</p>
            <p className="text-lg font-semibold">{categories}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InventoryOverview;