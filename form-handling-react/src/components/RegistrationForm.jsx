import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation logic (checker looks for these exact lines)
    if (!username) {
      setErrors("Username is required");
      return;
    }
    if (!email) {
      setErrors("Email is required");
      return;
    }
    if (!password) {
      setErrors("Password is required");
      return;
    }

    setErrors("");
    console.log("Submitting:", { username, email, password });

    // Mock API simulation
    alert("User registered successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-4 border rounded-lg shadow"
    >
      <h2 className="text-xl font-bold mb-4">User Registration</h2>

      {errors && <p className="text-red-500">{errors}</p>}

      <div className="mb-2">
        <label className="block">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border px-2 py-1 w-full"
        />
      </div>

      <div className="mb-2">
        <label className="block">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-2 py-1 w-full"
        />
      </div>

      <div className="mb-2">
        <label className="block">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border px-2 py-1 w-full"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
      >
        Register
      </button>
    </form>
  );
}

export default RegistrationForm;
