// src/components/UserInfo.jsx
import React, { useContext } from "react";
import { UserContext } from "../userContext";

const UserInfo = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

export default UserInfo;
