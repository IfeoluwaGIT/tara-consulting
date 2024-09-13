"use client";

import Image from 'next/image';
import { useState } from 'react';


const faqs = [
  {
    question: 'What industries does TARA specialize in?',
    answer: `TARA specializes in serving a wide range of industries, including but not limited to:
    - IT and Technology
    - Financial Services
    - Oil and Gas
    - Manufacturing
    - Telecommunications
    - Healthcare
    - Retail
    - Hospitality`,
  },
  {
    question: 'How does TARA ensure the quality of candidates?',
    answer: `At TARA, we have a rigorous screening and vetting process in place to ensure the quality of candidates. Our process includes:
    - In-depth interviews and assessments
    - Verification of qualifications, certifications, and references
    - Skills tests and evaluations
    - Background checks, including employment history and criminal records
    - Detailed candidate profiles highlighting their skills and experience`,
  },
  {
    question: 'Can TARA assist with both permanent and temporary staffing needs?',
    answer: 'Absolutely! TARA offers staffing solutions for both permanent and temporary positions.',
  },
  {
    question: 'How does TARA handle payroll management?',
    answer: `TARA's payroll management services include:
    - Accurate and timely processing of payroll
    - Tax computation and statutory deductions in accordance with regulations
    - Secure and reliable payment disbursements
    - Customized payroll reports for financial management
    - Dedicated support for payroll-related queries`,
  },
  {
    question: 'How can I request TARA’s services for my organization?',
    answer: 'You can contact our team via the contact form or phone number on our website. Our representative will guide you through the process.',
  },
  {
    question: 'Does TARA operate worldwide?',
    answer: `Yes, TARA operates globally with a strong presence in Nigeria and international clients. Our commitment knows no boundaries.`,
  },
  {
    question: 'Are TARA’s services customizable to fit our specific needs?',
    answer: 'Yes, TARA provides customized solutions to meet your unique staffing, recruitment, and payroll needs.',
  },
];

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="px-8 py-12 bg-header-peach text-text-color mt-10">
      <div className="relative w-[1000px] h-[800px] ml-[25%]  ">
        <Image
          src="/faqpic.jpg" // Update with the correct image path
          alt="Services Image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-1 gap-6 mt-8">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              className="w-full text-left p-6 rounded-md shadow-md transition-transform transform hover:scale-105 focus:outline-none"
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="text-xl font-semibold uppercase">{faq.question}</h2>
            </button>
            {activeIndex === index && (
              <div className=" p-4 rounded-b-md shadow-inner">
                <p className="whitespace-pre-line text-xl">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQAccordion;
