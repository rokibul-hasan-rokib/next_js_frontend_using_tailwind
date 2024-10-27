"use client"; // Ensures the component is client-side

import { useState } from "react";

export default function page() {
  const [formData, setFormData] = useState({ name: "", title: "" });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    console.log("Form submitted:", formData);

    setFormData({ name: "", title: "" });
  };

  return (
    <div className="max-w-md p-4 mx-auto bg-gray-100 rounded shadow-md">
      <h2 className="mb-4 text-xl font-semibold">Simple Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="title" className="block font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 text-white transition bg-blue-500 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
      {submittedData && (
        <div className="p-4 mt-4 text-green-700 bg-green-100 rounded">
          <h3>Submitted Data:</h3>
          <p>Name: {submittedData.name}</p>
          <p>Title: {submittedData.title}</p>
        </div>
      )}
    </div>
  );
}
