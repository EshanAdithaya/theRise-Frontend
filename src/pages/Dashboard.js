
import React, { useState } from 'react';
 import Sidebar from '../components/Sidebar';

import Topbar from '../components/header';

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Topbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-6">
            {/* Main content goes here */}
            <p className="text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quas doloremque ad temporibus, sed a culpa necessitatibus quod illo laboriosam odit est distinctio voluptatem neque porro quia tempora, quisquam, unde reiciendis ut illum nemo! Dolore laudantium porro suscipit eos doloribus!
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;