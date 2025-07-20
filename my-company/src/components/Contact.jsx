import React, { useState } from "react";
import Contact from "./components/Contact";

<Route path="/contact" element={<Contact />} />

function Contact() {
  const [formData, setFormData] = useState({ name: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent by ${formData.name}: ${formData.message}`);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{ padding: "0.5rem" }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ padding: "0.5rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem", backgroundColor: "blue", color: "white", border: "none" }}>
          Send
        </button>
      </form>
    </div>
  );
}

export default Contact;
