"use client"

import Image from 'next/image';
import { useState } from 'react';

const ContactCollectionForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    industry: '',
    employees: '',
    services: {
      staffing: false,
      recruitment: false,
      payroll: false,
      healthInsurance: false,
    },
    details: '',
    contactMethod: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      services: { ...formData.services, [name]: checked },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-header-peach border text-text-color">
        {/* Image on top for small screens, side for large screens */}
        <div className="w-full lg:w-1/2 flex items-center justify-center mb-6 lg:mb-0 lg:mt-8">
          <Image
            src="/assist.jpg" // Replace with your image path
            alt="Your Image Description"
            width={500} // Adjust width as needed
            height={500} // Adjust height as needed
            className="w-full h-auto shadow-lg"
          />
        </div>

        {/* Form Section */}
        <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-4xl lg:ml-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            HOW CAN WE ASSIST YOU?
          </h2>
          <p className='text-center mb-8'>
            Interested in leveraging Taras all-inclusive staffing, recruitment, and payroll services? Simply complete the form below with key details about your requirements, and our team will reach out to you shortly.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Company Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="industry" className="block text-sm font-medium">
                  Industry
                </label>
                <input
                  type="text"
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="employees" className="block text-sm font-medium">
                  Number of Employees
                </label>
                <input
                  type="number"
                  id="employees"
                  name="employees"
                  value={formData.employees}
                  onChange={handleInputChange}
                  className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Service Requirements */}
            <div>
              <label className="block text-sm font-medium">
                What specific service(s) are you interested in? (Please select all that apply)
              </label>
              <div className="grid grid-cols-2 gap-4 mt-2">
                {['staffing', 'recruitment', 'payroll', 'healthInsurance'].map((service) => (
                  <label key={service} className="flex items-center">
                    <input
                      type="checkbox"
                      name={service}
                      checked={formData.services[service]}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-2 capitalize">{service.replace(/([A-Z])/g, ' $1')}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Additional Details */}
            <div>
              <label htmlFor="details" className="block text-sm font-medium">
                Please briefly describe why you require our services and any specific details you would like to share:
              </label>
              <textarea
                id="details"
                name="details"
                value={formData.details}
                onChange={handleInputChange}
                rows={4}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            {/* Preferred Contact Method */}
            <div>
              <label className="block text-sm font-medium">
                How would you prefer us to contact you? (Please select one)
              </label>
              <div className="flex space-x-4 mt-2">
                {['email', 'phone'].map((method) => (
                  <label key={method} className="flex items-center">
                    <input
                      type="radio"
                      name="contactMethod"
                      value={method}
                      checked={formData.contactMethod === method}
                      onChange={handleInputChange}
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-2 capitalize">{method}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Privacy Agreement and Submit Button */}
            <div className="mt-6">
              <p className="text-gray-500 text-sm">
                By submitting this form, you agree to our Privacy Policy and consent to the processing of your personal information.
              </p>
              <button
                type="submit"
                className="mt-4 w-full px-6 py-3 bg-text-color text-white font-semibold rounded hover:bg-button-hover transition duration-300 shadow-md"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactCollectionForm;
