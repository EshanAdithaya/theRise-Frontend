import React, { useState } from 'react';
import { FaSearch, FaEdit, FaTrash } from 'react-icons/fa';

const InventoryList = ({ inventory, onUpdateItem, onDeleteItem }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [editingItem, setEditingItem] = useState(null);

  const filteredInventory = inventory.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  const handleSave = () => {
    onUpdateItem(editingItem);
    setEditingItem(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Inventory List</h2>
      <div className="mb-4 flex">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search inventory..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Quantity</th>
              <th className="px-4 py-2 text-left">Unit Price</th>
              <th className="px-4 py-2 text-left">Expiration Date</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredInventory.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="px-4 py-2">
                  {editingItem && editingItem.id === item.id ? (
                    <input
                      type="text"
                      value={editingItem.name}
                      onChange={(e) => setEditingItem({...editingItem, name: e.target.value})}
                      className="w-full border rounded px-2 py-1"
                    />
                  ) : (
                    item.name
                  )}
                </td>
                <td className="px-4 py-2">{item.category}</td>
                <td className="px-4 py-2">
                  {editingItem && editingItem.id === item.id ? (
                    <input
                      type="number"
                      value={editingItem.quantity}
                      onChange={(e) => setEditingItem({...editingItem, quantity: parseInt(e.target.value)})}
                      className="w-full border rounded px-2 py-1"
                    />
                  ) : (
                    item.quantity
                  )}
                </td>
                <td className="px-4 py-2">${item.unitPrice.toFixed(2)}</td>
                <td className="px-4 py-2">{item.expirationDate || 'N/A'}</td>
                <td className="px-4 py-2">
                  {editingItem && editingItem.id === item.id ? (
                    <button 
                      onClick={handleSave}
                      className="text-green-600 hover:text-green-800 mr-2"
                    >
                      Save
                    </button>
                  ) : (
                    <button 
                      onClick={() => handleEdit(item)}
                      className="text-blue-600 hover:text-blue-800 mr-2"
                    >
                      <FaEdit />
                    </button>
                  )}
                  <button 
                    onClick={() => onDeleteItem(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryList;