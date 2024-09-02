import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([]);
  const [newItem, setNewItem] = useState({
    name: '',
    quantity: 0,
    category: '',
  });

  useEffect(() => {
    // Fetch initial inventory data from the server
    fetchInventory();
  }, []);

  const fetchInventory = async () => {
    try {
      const response = await axios.get('/api/inventory');
      setInventory(response.data);
    } catch (error) {
      console.error('Error fetching inventory:', error);
    }
  };

  const handleInputChange = (e) => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  };

  const addToInventory = async () => {
    try {
      await axios.post('/api/inventory', newItem);
      setInventory([...inventory, newItem]);
      setNewItem({
        name: '',
        quantity: 0,
        category: '',
      });
    } catch (error) {
      console.error('Error adding item to inventory:', error);
    }
  };

  const updateInventory = async (item) => {
    try {
      await axios.put(`/api/inventory/${item.id}`, item);
      const updatedInventory = inventory.map((i) =>
        i.id === item.id ? item : i
      );
      setInventory(updatedInventory);
    } catch (error) {
      console.error('Error updating inventory:', error);
    }
  };

  const deleteFromInventory = async (item) => {
    try {
      await axios.delete(`/api/inventory/${item.id}`);
      const updatedInventory = inventory.filter((i) => i.id !== item.id);
      setInventory(updatedInventory);
    } catch (error) {
      console.error('Error deleting item from inventory:', error);
    }
  };

  return (
    <div className="p-6 bg-white min-h-screen rounded-md">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-6">Inventory Management</h1>

        <div className="bg-white p-4 rounded shadow-md mb-6">
          <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
          <form onSubmit={(e) => {
            e.preventDefault();
            addToInventory();
          }}>
            <div className="mb-4">
              <label htmlFor="name" className="block font-medium mb-2">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={newItem.name}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="quantity" className="block font-medium mb-2">
                Quantity:
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={newItem.quantity}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="category" className="block font-medium mb-2">
                Category:
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={newItem.category}
                onChange={handleInputChange}
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to Inventory
            </button>
          </form>
        </div>

        <div className="bg-white p-4 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Current Inventory</h2>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">Name</th>
                <th className="px-4 py-2 text-left">Quantity</th>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="px-4 py-2">{item.name}</td>
                  <td className="px-4 py-2">{item.quantity}</td>
                  <td className="px-4 py-2">{item.category}</td>
                  <td className="px-4 py-2">
                    <button
                      className="bg-indigo-500 text-white px-2 py-1 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mr-2"
                      onClick={() => updateInventory(item)}
                    >
                      Update
                    </button>
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                      onClick={() => deleteFromInventory(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InventoryManagement;