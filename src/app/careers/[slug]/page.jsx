import Link from "next/link";

// Sample job data
const jobData = [
  {
    id: 1,
    title: "Frontend Developer",
    location: "Remote",
    salary: "$70,000 - $90,000",
    jobType: "Full-Time",
    description:
      "As a Frontend Developer, you will be responsible for building and maintaining high-performance web applications using React and Next.js. You will collaborate with cross-functional teams to ensure a smooth development process.",
  },
  {
    id: 2,
    title: "Backend Engineer",
    location: "San Francisco, CA",
    salary: "$100,000 - $120,000",
    jobType: "Full-Time",
    description:
      "We are looking for a Backend Engineer to design and develop scalable backend systems using Node.js, MongoDB, and AWS. You will work with the frontend and product teams to deliver seamless integrations.",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    location: "New York, NY",
    salary: "$80,000 - $95,000",
    jobType: "Full-Time",
    description:
      "We are looking for a Backend Engineer to design and develop scalable backend systems using Node.js, MongoDB, and AWS. You will work with the frontend and product teams to deliver seamless integrations.",
  },
  {
    id: 4,
    title: "DevOps Engineer",
    location: "Remote",
    salary: "$95,000 - $110,000",
    jobType: "Full-Time",
    description:
      "We are looking for a Backend Engineer to design and develop scalable backend systems using Node.js, MongoDB, and AWS. You will work with the frontend and product teams to deliver seamless integrations.",
  },
  {
    id: 5,
    title: "Product Manager",
    location: "Los Angeles, CA",
    salary: "$110,000 - $130,000",
    jobType: "Full-Time",
    description:
      "We are looking for a Backend Engineer to design and develop scalable backend systems using Node.js, MongoDB, and AWS. You will work with the frontend and product teams to deliver seamless integrations.",
  },
  {
    id: 6,
    title: "Data Scientist",
    location: "Austin, TX",
    salary: "$115,000 - $140,000",
    jobType: "Full-Time",
    description:
      "We are looking for a Backend Engineer to design and develop scalable backend systems using Node.js, MongoDB, and AWS. You will work with the frontend and product teams to deliver seamless integrations.",
  },
  // More job data...
];

const JobDetails = ({ params }) => {
  const { slug } = params;

  // Find the job based on the slug from the URL
  const job = jobData.find((job) => job.id === parseInt(slug));

  if (!job) {
    return <p>Job not found...</p>;
  }

  return (
    <section className="px-[10%] py-12 bg-gray-100 text-gray-700">
      <div className="max-w-4xl mx-auto border p-6 shadow-md rounded-xl bg-white mt-10">
        <h1 className="text-2xl font-bold">{job.title}</h1>

        <div className="flex justify-between items-start py-6">
          {/* Left section with location, salary, job type */}
          <div className="w-1/2">
            <p className="text-sm mb-2 py-6">
              <strong>Location:</strong> {job.location}
            </p>
            <p className="text-sm mb-2 py-6">
              <strong>Salary:</strong> {job.salary}
            </p>
            <p className="text-sm mb-2 py-6">
              <strong>Job Type:</strong> {job.jobType}
            </p>
          </div>

          {/* Right section with job description */}
          <div className="w-1/2">
            <p className="text-sm text-gray-600">{job.description}</p>
          </div>
        </div>

        {/* Apply button */}
        <div className="mt-6">
          <Link href="/apply">
            <button className="inline-flex items-center px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              Apply Now <span className="ml-2">→</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
