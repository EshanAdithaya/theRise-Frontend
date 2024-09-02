import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const AddItemForm = ({ onAddItem, onCancel }) => {
  const [newItem, setNewItem] = useState({
    name: '',
    category: '',
    quantity: 0,
    unitPrice: 0,
    expirationDate: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prevItem => ({
      ...prevItem,
      [name]: name === 'quantity' || name === 'unitPrice' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem(newItem);
    setNewItem({
      name: '',
      category: '',
      quantity: 0,
      unitPrice: 0,
      expirationDate: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={newItem.name}
          onChange={handleInputChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
        <select
          id="category"
          name="category"
          value={newItem.category}
          onChange={handleInputChange}
          required
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        >
          <option value="">Select a category</option>
          <option value="Seeds">Seeds</option>
          <option value="Fertilizers">Fertilizers</option>
          <option value="Tools">Tools</option>
        </select>
      </div>
      <div>
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          value={newItem.quantity}
          onChange={handleInputChange}
          required
          min="0"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="unitPrice" className="block text-sm font-medium text-gray-700">Unit Price</label>
        <input
          type="number"
          id="unitPrice"
          name="unitPrice"
          value={newItem.unitPrice}
          onChange={handleInputChange}
          required
          min="0"
          step="0.01"
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div>
        <label htmlFor="expirationDate" className="block text-sm font-medium text-gray-700">Expiration Date</label>
        <input
          type="date"
          id="expirationDate"
          name="expirationDate"
          value={newItem.expirationDate}
          onChange={handleInputChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <FaPlus className="mr-2" />
          Add Item
        </button>
      </div>
    </form>
  );
};

export default AddItemForm;