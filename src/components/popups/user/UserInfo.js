import React, { useState } from 'react';
import user from '../../../asset/userdummy.png';
import { Player } from '@lottiefiles/react-lottie-player';
import loader2 from '../../../asset/animations/loader2.json';
import { FaPencilAlt } from 'react-icons/fa';

const UserInfo = () => {
  // State management for user profile, loading, error, and edit mode
  const [profileData, setProfileData] = useState({
    username: 'JohnDoe',
    role: 'User',
    profilePictureUrl: null,
    email: 'john.doe@example.com',
    phoneNumber: '123-456-7890',
    firstName: 'John',
    lastName: 'Doe',
    dateOfBirth: '1990-01-01',
    address: '123 Main St, Anytown, USA',
    bio: 'This is a short bio about John.',
    lastLogin: '2024-09-01T12:00:00Z',
    createdAt: '2024-01-01T12:00:00Z',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(profileData);

  // Handle input change for editing fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate a save action
    setTimeout(() => {
      setProfileData(editedData);
      setIsEditing(false);
      setLoading(false);
    }, 1000);
  };

  // Show loader when loading
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Player
          autoplay
          loop
          src={loader2}
          style={{ height: '200px', width: '200px' }}
        />
      </div>
    );
  }

  // Show error if any
  if (error) return <div>Error: {error}</div>;

  // Render field based on edit mode
  const renderField = (label, field) => (
    <div key={field}>
      <p className="text-sm text-gray-600">{label}:</p>
      {isEditing ? (
        <input
          type="text"
          name={field}
          value={editedData[field] || ''}
          onChange={handleInputChange}
          className="font-medium w-full border rounded px-2 py-1"
        />
      ) : (
        <p className="font-medium">{profileData[field] || 'Not provided'}</p>
      )}
    </div>
  );

  return (
    <div className="space-y-6 relative">
      {!isEditing && (
        <button onClick={() => setIsEditing(true)} className="absolute top-0 right-0 text-blue-500">
          <FaPencilAlt />
        </button>
      )}
      <div className="flex items-center space-x-4">
        <img src={profileData.profilePictureUrl || user} alt="User Photo" className="w-24 h-24 rounded-full object-cover" />
        <div>
          <h2 className="text-2xl font-bold">{profileData.username}</h2>
          <p className="text-gray-600">{profileData.role}</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderField('Username', 'username')}
        {renderField('Email', 'email')}
        {renderField('Phone Number', 'phoneNumber')}
        {renderField('First Name', 'firstName')}
        {renderField('Last Name', 'lastName')}
        {renderField('Date of Birth', 'dateOfBirth')}
        {renderField('Address', 'address')}
        {renderField('Bio', 'bio')}
        {renderField('Last Login', 'lastLogin')}
        {renderField('Created At', 'createdAt')}
        {isEditing && (
          <div className="col-span-2 mt-4">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Save Changes
            </button>
            <button type="button" onClick={() => setIsEditing(false)} className="ml-2 bg-gray-300 px-4 py-2 rounded">
              Cancel
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default UserInfo;
