import React from 'react';

const SystemLog = () => {
  const logEntries = [
    { date: '2024-08-12', action: 'Device Connected', details: 'New soil moisture sensor connected in Field A' },
    { date: '2024-08-11', action: 'Irrigation Triggered', details: 'Automated irrigation system activated in Greenhouse 2' },
    { date: '2024-08-10', action: 'Alert', details: 'High temperature detected in Storage Silo 3' },
    { date: '2024-08-09', action: 'Firmware Update', details: 'Weather station firmware updated to version 2.3.1' },
    { date: '2024-08-08', action: 'Data Export', details: 'Monthly crop yield data exported to CSV' },
    { date: '2024-08-07', action: 'User Login', details: 'Admin user logged in from IP 192.168.1.1' },
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