// src/App.jsx
import React from 'react';
import ProfilePage from './components/ProfilePage';
import { UserProvider } from './userContext';

function App() {
  return (
    <UserProvider>
      <ProfilePage />
    </UserProvider>
  );
}

export default App;
