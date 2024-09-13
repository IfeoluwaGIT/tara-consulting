"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Careers = () => {
  // Sample job openings data
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Frontend Developer",
      location: "Remote",
      salary: "$70,000 - $90,000",
      description:
        "Work on building high-performance web applications using React and Next.js.",
    },
    {
      id: 2,
      title: "Backend Engineer",
      location: "San Francisco, CA",
      salary: "$100,000 - $120,000",
      description:
        "Build and maintain scalable backend systems using Node.js and MongoDB.",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      location: "New York, NY",
      salary: "$80,000 - $95,000",
      description:
        "Design user interfaces and experiences for mobile and web applications.",
    },
    {
      id: 4,
      title: "DevOps Engineer",
      location: "Remote",
      salary: "$95,000 - $110,000",
      description:
        "Ensure seamless deployment pipelines and continuous integration.",
    },
    {
      id: 5,
      title: "Product Manager",
      location: "Los Angeles, CA",
      salary: "$110,000 - $130,000",
      description:
        "Oversee product development and ensure alignment with business goals.",
    },
    {
      id: 6,
      title: "Data Scientist",
      location: "Austin, TX",
      salary: "$115,000 - $140,000",
      description:
        "Analyze data and develop machine learning models to solve business problems.",
    },
  ]);

  return (
    <section className="px-[10%] py-12 bg-gray-100 text-gray-700">
       <div className="relative w-full h-[700px]">
        <Image
          src="/careerspic.jpg" // Update with the correct image path
          alt="Services Image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full rounded-2xl"
        />
      </div>
      {/* Search bar */}
      <div className="mb-8 mt-8">
        <input
          type="text"
          placeholder="Search for jobs..."
          className="w-full px-4 py-3 border rounded shadow-md"
        />
      </div>

      {/* Job cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6  ">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex justify-between items-start border p-6 shadow-md rounded-xl text-text-color bg-white  "
          >
            {/* Left section with job title, location, and salary */}
            <div>
              <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
              <p className="text-sm ">Location: {job.location}</p>
              <p className="text-sm ">Salary: {job.salary}</p>
            </div>

            {/* Bottom right section with description and apply button */}
            <div className="flex flex-col items-end">
              <p className="text-sm mb-12">{job.description}</p>
              <Link href={`/careers/${job.id}`}>
                <button className="inline-flex items-center px-4 py-2 bg-text-color text-white rounded hover:bg-blue-600">
                  Apply <span className="ml-2">→</span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Careers;
