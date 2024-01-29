"use client";
import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission, such as sending an email or saving the data to a database
    console.log(formData);
    // Clear the form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="container mx-auto p-8 text-center" style={{marginBottom:"80px"}}>
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 text-sm font-medium mb-2">Your Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full border p-2 rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 text-sm font-medium mb-2">Your Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border p-2 rounded-md focus:outline-none focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-600 text-sm font-medium mb-2">Message</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="4" className="w-full border p-2 rounded-md focus:outline-none focus:border-blue-500"></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Submit</button>
      </form>

      {/* Contact Details (Optional) */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
        <p className="text-lg">If you prefer to reach us via email or phone, feel free to use the contact information below:</p>
        <div className="list-disc pl-6 mt-4">
          <p>Email: contact@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
