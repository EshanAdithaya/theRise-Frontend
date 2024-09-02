import React from 'react';

const Sidebar = ({ activePage, onPageChange }) => {
  const menuItems = [
    { id: 'account', label: 'Account' },
    { id: 'iotDevices', label: 'IoT Devices' },
    { id: 'paymentInfo', label: 'Payment Information and Subscriptions' },
    { id: 'systemLog', label: 'System Log' }
  ];

  return (
    <aside className="bg-gray-100 w-1/4 h-full p-6 overflow-auto rounded-l-lg">
      {menuItems.map((item, index) => (
        <div
          key={item.id}
          className={`py-2 px-4 mb-2 cursor-pointer hover:bg-gray-200 rounded-md transition duration-150 ease-in-out ${
            activePage === item.id ? 'bg-gray-200' : ''
          } ${index === 0 ? 'mt-2' : ''}`}
          onClick={() => onPageChange(item.id)}
        >
          <span className="text-sm font-medium">{item.label}</span>
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;