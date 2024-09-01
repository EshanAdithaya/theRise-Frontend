// UserProfile.js
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import UserInfo from './UserInfo';
import SocialAccounts from './SocialAccounts';
import PaymentInfo from './PaymentInfo';
import SystemLog from './SystemLog';

const GOLDEN_RATIO = 1.618;

const UserProfile = ({ isOpen, onClose, onLogout }) => {
  const [activePage, setActivePage] = useState('account');
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const calculateDimensions = () => {
      const maxHeight = Math.min(window.innerHeight * 0.9, 979);
      const width = maxHeight * GOLDEN_RATIO;
      setDimensions({ width, height: maxHeight });
    };

    calculateDimensions();
    window.addEventListener('resize', calculateDimensions);

    return () => window.removeEventListener('resize', calculateDimensions);
  }, []);

  if (!isOpen) return null;

  const renderActivePage = () => {
    switch (activePage) {
      case 'account':
        return <UserInfo />;
      case 'socialAccounts':
        return <SocialAccounts />;
      case 'paymentInfo':
        return <PaymentInfo />;
      case 'systemLog':
        return <SystemLog />;
      default:
        return <UserInfo />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div 
        className="bg-white rounded-lg shadow-lg flex"
        style={{ width: `${dimensions.width}px`, height: `${dimensions.height}px` }}
      >
        <Sidebar activePage={activePage} onPageChange={setActivePage} />
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b flex justify-between items-center">
            <h2 className="text-xl font-bold">User Profile</h2>
            <button 
              onClick={onClose} 
              className="text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
          <div className="flex-1 overflow-auto p-6">
            {renderActivePage()}
          </div>
          {activePage === 'account' && (
            <div className="p-4 border-t">
              <button
                onClick={onLogout}
                className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;