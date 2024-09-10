const JobOpenings = () => {
  const jobData = [
    {
      id: 1,
      position: "Software Engineer",
      description:
        "Develop and maintain software applications, troubleshoot issues, and collaborate with the product team.",
      location: "Remote",
      qualifications: [
        "Bachelor's degree in Computer Science",
        "2+ years of software development experience",
        "Proficiency in JavaScript, React, and Node.js",
      ],
      howToApply: "Send your resume and cover letter to jobs@example.com",
    },
    {
      id: 2,
      position: "Product Manager",
      description:
        "Lead product development efforts, communicate with stakeholders, and manage product life cycles.",
      location: "New York, NY",
      qualifications: [
        "Bachelor's degree in Business or related field",
        "3+ years of product management experience",
        "Strong understanding of Agile methodologies",
        "Focused",
      ],
      howToApply: "Fill out the application form on our website",
    },
    {
      id: 3,
      position: "Software Engineer",
      description:
        "Develop and maintain software applications, troubleshoot issues, and collaborate with the product team.",
      location: "Remote",
      qualifications: [
        "Bachelor's degree in Computer Science",
        "2+ years of software development experience",
        "Proficiency in JavaScript, React, and Node.js",
      ],
      howToApply: "Send your resume and cover letter to jobs@example.com",
    },
    {
      id: 4,
      position: "Software Engineer",
      description:
        "Develop and maintain software applications, troubleshoot issues, and collaborate with the product team.",
      location: "Remote",
      qualifications: [
        "Bachelor's degree in Computer Science",
        "2+ years of software development experience",
        "Proficiency in JavaScript, React, and Node.js",
      ],
      howToApply: "Send your resume and cover letter to jobs@example.com",
    },
    {
      id: 5,
      position: "Software Engineer",
      description:
        "Develop and maintain software applications, troubleshoot issues, and collaborate with the product team.",
      location: "Remote",
      qualifications: [
        "Bachelor's degree in Computer Science",
        "2+ years of software development experience",
        "Proficiency in JavaScript, React, and Node.js",
      ],
      howToApply: "Send your resume and cover letter to jobs@example.com",
    },
    {
      id: 6,
      position: "Product Manager",
      description:
        "Lead product development efforts, communicate with stakeholders, and manage product life cycles.",
      location: "New York, NY",
      qualifications: [
        "Bachelor's degree in Business or related field",
        "3+ years of product management experience",
        "Strong understanding of Agile methodologies",
        "focused",
      ],
      howToApply: "Fill out the application form on our website",
    },
    {
      id: 7,
      position: "Software Engineer",
      description:
        "Develop and maintain software applications, troubleshoot issues, and collaborate with the product team.",
      location: "Remote",
      qualifications: [
        "Bachelor's degree in Computer Science",
        "2+ years of software development experience",
        "Proficiency in JavaScript, React, and Node.js",
      ],
      howToApply: "Send your resume and cover letter to jobs@example.com",
    },
    {
      id: 8,
      position: "Software Engineer",
      description:
        "Develop and maintain software applications, troubleshoot issues, and collaborate with the product team.",
      location: "Remote",
      qualifications: [
        "Bachelor's degree in Computer Science",
        "2+ years of software development experience",
        "Proficiency in JavaScript, React, and Node.js",
      ],
      howToApply: "Send your resume and cover letter to jobs@example.com",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Job Openings
      </h1>
      <p className="text-center mb-12 text-lg">
        We are committed to matching talented people with outstanding job
        opportunities in a variety of industries. Explore our current job
        openings below and take the next step in your professional development.
      </p>

      <div className=" grid grid-cols-4 gap-4">
        {jobData.map((job) => (
          <div
            key={job.id}
            className="border border-gray-950 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow "
          >
            <h2 className="text-2xl font-semibold mb-4">
              {job.position}
            </h2>
            <p className="mb-4">{job.description}</p>
            <p className="mb-4">
              <strong>Location:</strong> {job.location}
            </p>
            <div className="mb-4">
              <strong>Qualifications:</strong>
              <ul className="list-disc pl-5">
                {job.qualifications.map((qualification, index) => (
                  <li key={index}>{qualification}</li>
                ))}
              </ul>
            </div>
            <p className="mb-4">
              <strong>How to Apply:</strong> {job.howToApply}
            </p>
            <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-colors">
              Apply Here!
            </button>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-lg mb-4">
          Did not find any jobs that align with your skills and aspirations? No
          worries!
        </p>
        <a
          href="/submit-cv"
          className="inline-block bg-blue-600 text-white py-3 px-8 rounded-lg shadow hover:bg-blue-700 transition-colors"
        >
          Submit your CV
        </a>
      </div>
    </div>
  );
};

export default JobOpenings;
