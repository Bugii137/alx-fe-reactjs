// src/components/UserCard.jsx
const UserCard = ({ user }) => (
  <div className="border rounded p-4 shadow flex items-center gap-4">
    <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
    <div>
      <h2 className="text-xl font-semibold">{user.login}</h2>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
        View Profile
      </a>
    </div>
  </div>
);

export default UserCard;
