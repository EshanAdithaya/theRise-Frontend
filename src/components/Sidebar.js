import React, { useState } from 'react';
import dashboardIco from '../asset/icons/dashboard.png';
import userIco from '../asset/icons/user.png';
import scheduleIco from '../asset/icons/schedule.png';
import teamIco from '../asset/icons/team.png';
import productIco from '../asset/icons/product.png';
import reviewIco from '../asset/icons/review.png';
import reportIco from '../asset/icons/report.png';
import adminIco from '../asset/icons/admin.png';

const iconMapping = {
  dashboard: dashboardIco,
  user: userIco,
  schedule: scheduleIco,
  team: teamIco,
  product: productIco,
  review: reviewIco,
  report: reportIco,
  admin: adminIco,
};

function Sidebar({ isOpen, onClose, onMenuItemClick }) {
  const menuItems = [
    { icon: "dashboard", label: "Dashboard", page: "welcome" },
    { icon: "user", label: "Inventory", page: "inventory" },
    { icon: "schedule", label: "Health", page: "health" },
    { icon: "team", label: "Crop management", page: "cropManagement" },
    { icon: "product", label: "Automation", page: "automation" },
    { icon: "review", label: "Statistics", page: "statistics" },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        className="md:hidden fixed top-4 left-4 z-20 p-2 rounded-md bg-white shadow-md"
        onClick={() => onClose(!isOpen)}
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-10 bg-black opacity-50 md:hidden"
          onClick={onClose}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-20
        transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        md:translate-x-0 transition-transform duration-300 ease-in-out
        w-64 h-full md:h-2/4 shadow-md md:mt-4 md:rounded-md bg-white
        overflow-y-auto
      `}>
        <nav className="mt-4 text-center px-2">
          {menuItems.map((item) => {
            const IconSrc = iconMapping[item.icon];
            return (
              <a
                key={item.label}
                href="#"
                onClick={() => onMenuItemClick(item.page)}
                className="group flex items-center px-2 py-3 text-base leading-6 font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 transition ease-in-out duration-150"
              >
                <img src={IconSrc} alt={`${item.label} icon`} className="mr-4 h-6 w-6" />
                {item.label}
              </a>
            );
          })}
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
