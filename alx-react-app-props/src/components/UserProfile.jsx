// src/components/UserProfile.jsx
import React, { useContext } from 'react';
import { UserContext } from '../userContext';

const UserProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="user-profile">
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.bio}</p>
    </div>
  );
};

export default UserProfile;
