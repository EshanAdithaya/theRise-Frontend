import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlus } from 'react-icons/fa';
import InventoryList from './InventoryList';
import InventoryOverview from './InventoryOverview';
import AddItemForm from './AddItemForm';
import Modal from './Modal';

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
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

  const handleAddItem = async (newItem) => {
    try {
      const response = await axios.post('/api/inventory', newItem);
      setInventory([...inventory, response.data]);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error adding item to inventory:', error);
    }
  };

  const handleUpdateItem = async (updatedItem) => {
    try {
      await axios.put(`/api/inventory/${updatedItem.id}`, updatedItem);
      const updatedInventory = inventory.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      );
      setInventory(updatedInventory);
    } catch (error) {
      console.error('Error updating inventory:', error);
    }
  };

  const handleDeleteItem = async (itemId) => {
    try {
      await axios.delete(`/api/inventory/${itemId}`);
      const updatedInventory = inventory.filter((item) => item.id !== itemId);
      setInventory(updatedInventory);
    } catch (error) {
      console.error('Error deleting item from inventory:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Inventory Management</h1>
      <InventoryOverview inventory={inventory} />
      <div className="mt-8 mb-4">
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <FaPlus className="mr-2" />
          Add New Item
        </button>
      </div>
      <InventoryList
        inventory={inventory}
        onUpdateItem={handleUpdateItem}
        onDeleteItem={handleDeleteItem}
      />
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Item"
      >
        <AddItemForm
          onAddItem={handleAddItem}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default InventoryManagement;