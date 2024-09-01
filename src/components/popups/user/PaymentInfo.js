// PaymentInfo.js
import React from 'react';

const PaymentInfo = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold">Payment Information and Packages</h2>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Current Plan</h3>
        <p>Pro Plan - $29.99/month</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Upgrade Plan</button>
      </div>
      <div className="space-y-4">
        <h3 className="text-xl font-semibold">Payment Method</h3>
        <p>Visa ending in 1234</p>
        <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">Update Payment Method</button>
      </div>
    </div>
  );
};

export default PaymentInfo;