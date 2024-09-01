import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserProfile from './popups/user/UserProfile';
import user from '../asset/userdummy.png';

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access_token');
    navigate('/');
  };

  return (
    <header className="bg-white shadow-sm z-10 justify-end">
      <div className="flex mx-auto py-4 px-4 sm:px-6 lg:px-8 justify-end">
        <div className="flex items-end">
          {/* Button for new post is removed */}
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
