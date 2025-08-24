import { Routes, Route, Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>
      <nav>
        <Link to="settings">Settings</Link> |{" "}
        <Link to="posts">Posts</Link>
      </nav>

      {/* Nested routes */}
      <Routes>
        <Route path="settings" element={<div>Profile Settings</div>} />
        <Route path="posts" element={<div>Profile Posts</div>} />
      </Routes>
    </div>
  );
}

export default Profile;
