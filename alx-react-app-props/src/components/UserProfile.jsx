// src/components/UserProfile.jsx
import React, { useContext } from "react";
import { UserContext } from "../userContext";
import UserInfo from "./UserInfo";

const UserProfile = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <UserInfo />
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserProfile;
