// src/pages/Home.jsx
function Home() {
  return <h1>Home Page</h1>;
}
export default Home;

// src/pages/About.jsx
function About() {
  return <h1>About Page</h1>;
}
export default About;

// src/pages/Profile.jsx
import { Outlet, Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav className="flex gap-4">
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}
export default Profile;

// src/pages/ProfileDetails.jsx
function ProfileDetails() {
  return <h2>Profile Details Section</h2>;
}
export default ProfileDetails;

// src/pages/ProfileSettings.jsx
function ProfileSettings() {
  return <h2>Profile Settings Section</h2>;
}
export default ProfileSettings;

// src/pages/Blog.jsx
import { Link } from "react-router-dom";

function Blog() {
  const posts = [
    { id: 1, title: "First Blog Post" },
    { id: 2, title: "Second Blog Post" },
  ];

  return (
    <div>
      <h1>Blog Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Blog;

// src/pages/BlogPost.jsx
import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();
  return <h2>Viewing Blog Post ID: {id}</h2>;
}
export default BlogPost;
