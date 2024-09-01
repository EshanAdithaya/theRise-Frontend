// SocialAccounts.js
import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTiktok, FaYoutube } from 'react-icons/fa';

const SocialAccounts = () => {
  const socialAccounts = [
    { platform: 'Facebook', icon: FaFacebook, connected: true },
    { platform: 'Instagram', icon: FaInstagram, connected: true },
    { platform: 'LinkedIn', icon: FaLinkedin, connected: false },
    { platform: 'Pinterest', icon: FaPinterest, connected: false },
    { platform: 'TikTok', icon: FaTiktok, connected: true },
    { platform: 'YouTube', icon: FaYoutube, connected: false },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Social Accounts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {socialAccounts.map((account) => (
          <div key={account.platform} className="flex items-center space-x-2">
            <account.icon className={`w-8 h-8 ${account.connected ? 'text-blue-500' : 'text-gray-400'}`} />
            <span className="flex-grow">{account.platform}</span>
            <button className={`px-3 py-1 rounded text-white ${account.connected ? 'bg-red-500' : 'bg-green-500'}`}>
              {account.connected ? 'Disconnect' : 'Connect'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialAccounts;