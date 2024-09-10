
"use client"

import { useState } from 'react';

const Newsletter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic (e.g., send data to an API or email service)
    console.log({ name, email });
  };

  return (
    
      <section className="max-w-full mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">
          Stay Informed with Our Newsletter
        </h2>
        <p className="text-gray-600 mb-8">
          Would you like to receive updates from TARA on the most recent industry insights, news, and developments? 
          Subscribe to our newsletter and be the first to know about new trends, valuable resources, and exciting opportunities. 
          Join our community today!
        </p>
        <form onSubmit={handleSubmit} className="flex space-x-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-1/3 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-1/3 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition duration-300"
          >
            Subscribe
          </button>
        </form>
        <p className="text-gray-500 text-sm mt-4">
          By subscribing, you agree to receive our newsletters and promotional emails. We respect your privacy and will not share 
          your information with third parties. You can unsubscribe at any time.
        </p>
      </section>
    
  );
};

export default Newsletter;
