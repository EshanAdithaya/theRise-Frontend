// Header.js
import React from 'react';
import user from '../../asset/images/userdummy.png';

const Header = () => {
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="flex justify-between items-center py-4 px-8">
        <h1 className="text-2xl font-bold">SOLUZENT</h1>
        <div className="flex items-center">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300 mr-4">
            + New
          </button>
          <img
            className="h-10 w-10 rounded-full cursor-pointer"
            src={user}
            alt="User avatar"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;