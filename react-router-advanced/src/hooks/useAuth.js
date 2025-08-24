import { useState } from "react";

// Simple mocked authentication hook
function useAuth() {
  // In a real app this would check login status
  const [user] = useState({ loggedIn: true });
  return user;
}

export default useAuth;
