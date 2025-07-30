// src/App.jsx
import React from "react";
import { UserProvider } from "./userContext";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <UserProvider>
      <ProfilePage />
    </UserProvider>
  );
}

export default App;
