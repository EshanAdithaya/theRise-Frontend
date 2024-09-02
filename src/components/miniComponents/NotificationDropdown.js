import React from 'react';

const NotificationDropdown = ({ onClose }) => {
  const notifications = [
    { id: 1, message: 'New message from John' },
    { id: 2, message: 'Your order has been shipped' },
    { id: 3, message: 'Your subscription is about to expire' },
  ];

  return (
    <div
      className="absolute top-12 right-0 bg-white shadow-lg rounded-md w-64 p-4"
      onBlur={() => onClose()} // Close the dropdown when clicking outside
      tabIndex="0"
    >
      <h3 className="text-lg font-medium mb-2">Notifications</h3>
      <div className="divide-y divide-gray-200">
        {notifications.map((notification) => (
          <div key={notification.id} className="py-2">
            <p>{notification.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationDropdown;