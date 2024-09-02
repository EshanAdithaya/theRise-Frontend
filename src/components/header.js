import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserProfile from './popups/user/UserProfile';
import NotificationDropdown from '../components/miniComponents/NotificationDropdown';
import user from '../asset/userdummy.png';
import logo from '../asset/images/logo.png';
import notification from '../asset/icons/notificatoinPassive.png';

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    navigate('/');
  };

  return (
    <header className="bg-white shadow-sm z-10 justify-between">
      <div className="flex mx-auto py-4 px-4 sm:px-6 lg:px-8 justify-between items-center">
        <div className="flex items-center">
          <img className="h-10 cursor-pointer" src={logo} alt="Logo" href="/dashboard" />
        </div>
        <div className="flex items-center">
          <div className="relative mr-12">
            <img
              className="h-6 w-6 cursor-pointer"
              src={notification}
              alt="Notification icon"
              onClick={() => setIsNotificationOpen(!isNotificationOpen)} // Toggle notification dropdown
            />
            {isNotificationOpen && (
              <NotificationDropdown onClose={() => setIsNotificationOpen(false)} />
            )}
          </div>
          <div className="relative">
            <img
              className="h-10 w-10 rounded-full cursor-pointer"
              src={user}
              alt="User avatar"
              onClick={() => setIsProfileOpen(true)} // Open UserProfile on click
            />
            <UserProfile
              isOpen={isProfileOpen}
              onClose={() => setIsProfileOpen(false)} // Close UserProfile
              onLogout={handleLogout}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;