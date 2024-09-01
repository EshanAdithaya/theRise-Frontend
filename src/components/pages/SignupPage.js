// src/pages/SignupPage.jsx

import React, { useState } from 'react';

// Mock data for provinces and districts
const provinceDistricts = {
  Western: ['Colombo', 'Gampaha', 'Kalutara'],
  Central: ['Kandy', 'Matale', 'Nuwara Eliya'],
  // Add other provinces and their districts here
};

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    nic: '',
    email: '',
    phone: '',
    province: '',
    district: '',
    city: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleProvinceChange = (e) => {
    setFormData({ ...formData, province: e.target.value, district: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation and submit logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <input
            type="text"
            name="username"
            placeholder="User Name"
            value={formData.username}
            onChange={handleInputChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />

          {/* NIC */}
          <input
            type="text"
            name="nic"
            placeholder="NIC"
            value={formData.nic}
            onChange={handleInputChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />

          {/* Phone Number */}
          <input
            type="tel"
            name="phone"
            placeholder="TP No"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />

          {/* Province */}
          <select
            name="province"
            value={formData.province}
            onChange={handleProvinceChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          >
            <option value="">Select Province</option>
            {Object.keys(provinceDistricts).map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>

          {/* District */}
          <select
            name="district"
            value={formData.district}
            onChange={handleInputChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
            disabled={!formData.province}
          >
            <option value="">Select District</option>
            {formData.province &&
              provinceDistricts[formData.province].map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
          </select>

          {/* City */}
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleInputChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-2 mb-4 border border-gray-300 rounded"
            required
          />

          {/* Confirm Password */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            className="w-full p-2 mb-6 border border-gray-300 rounded"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
