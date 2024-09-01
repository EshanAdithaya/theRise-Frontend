// SystemLog.js
import React from 'react';

const SystemLog = () => {
  const logEntries = [
    { date: '2024-08-12', action: 'Login', details: 'Successful login from IP 192.168.1.1' },
    { date: '2024-08-11', action: 'Post Created', details: 'New post "Summer Sale" created' },
    { date: '2024-08-10', action: 'Account Updated', details: 'Email address updated' },
    { date: '2024-08-09', action: 'Payment', details: 'Monthly subscription payment processed' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">System Log</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Action</th>
              <th className="p-2 text-left">Details</th>
            </tr>
          </thead>
          <tbody>
            {logEntries.map((entry, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                <td className="p-2">{entry.date}</td>
                <td className="p-2">{entry.action}</td>
                <td className="p-2">{entry.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SystemLog;