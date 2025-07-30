import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    bio: 'Software developer at ALX',
  });

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};
