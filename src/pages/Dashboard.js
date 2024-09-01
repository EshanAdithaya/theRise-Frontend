import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';

import Navbar from '../components/header';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-slate-100">
      {/* Sidebar */}
      <Sidebar className="" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <Navbar
          setActiveSection={setActiveSection}
          activeSection={activeSection}
        />

        {/* Main Content Area */}
        <main className="flex-1 p-6 bg-gray-100">
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          {/* Add your dashboard content here */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-xl font-semibold mb-2">Section 1</h2>
              <p>Content for section 1...</p>
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-xl font-semibold mb-2">Section 2</h2>
              <p>Content for section 2...</p>
            </div>
            <div className="bg-white p-4 rounded shadow-md">
              <h2 className="text-xl font-semibold mb-2">Section 3</h2>
              <p>Content for section 3...</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
