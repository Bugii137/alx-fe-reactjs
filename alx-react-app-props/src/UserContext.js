// src/userContext.js
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    age: 30,
  });

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};
