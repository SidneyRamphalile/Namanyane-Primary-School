import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(`Error: ${data.error || "Failed to send message"}`);
      }
    } catch (error) {
      setStatus("Error: Network or server issue");
    }
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-800">
        Contact Us
      </h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded"
        />
        <textarea
          rows="5"
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-purple-800 text-white py-3 rounded hover:bg-purple-700 transition"
        >
          Send Message
        </button>
      </form>

      {status && (
        <p
          className={`mt-4 text-center ${
            status.includes("Error") ? "text-red-600" : "text-green-600"
          }`}
        >
          {status}
        </p>
      )}
    </div>
  );
}

export default Contact;
