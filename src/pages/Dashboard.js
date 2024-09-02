import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/header';
import Welcome from '../components/minipages/dashboard_welcome';
import Inventory from '../components/minipages/dashboard_inventory';
import Health from '../components/minipages/dashboard_health';
import CropManagement from '../components/minipages/dashboard_CropManagement'; 

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePage, setActivePage] = useState('welcome'); // Initialize with default page

  // Function to handle page changes
  const handleMenuItemClick = (page) => {
    setActivePage(page);
    setSidebarOpen(false); // Close the sidebar after selecting an item
  };

  // Render content based on active page
  const renderContent = () => {
    switch (activePage) {
      case 'inventory':
        return <Inventory />;
      case 'health':  // Ensure case matches the spelling of the state
        return <Health />;
        case 'cropManagement':  // Ensure case matches the spelling of the state
        return <CropManagement />;
      case 'welcome':
      default:
        return <Welcome />;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Topbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} onMenuItemClick={handleMenuItemClick} />
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-6">
            {renderContent()} {/* Render the selected page content */}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
