// src/UserProfile.jsx
import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc' }}>
      <h2 style={{ margin: 0 }}>{userData.name}</h2>
      <p style={{ margin: '0.5rem 0' }}>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;
