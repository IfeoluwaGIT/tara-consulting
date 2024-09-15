import Image from "next/image";

const boxData = [
  {
    id: 1,
    icon: '/Group.png',
    title: 'Quality of Candidates',
    description: 'We ensure that our clients have access to top-quality candidates who possess the skills, experience, and cultural fit required for their organizations.',
    buttonText: 'Learn More',
  },
  {
    id: 2,
    icon: '/fm-management.png',
    title: 'Free Recruitment:',
    description: 'As part of our staffing package, we offer complimentary recruitment services, helping clients save costs and streamline their talent acquisition process.',
    buttonText: 'Learn More',
  },
  {
    id: 3,
    icon: '/business.png',
    title: 'Integrity:',
    description: 'We uphold the highest standards of integrity in all our interactions. Our commitment to transparency and ethical practices builds trust and fosters long-term partnerships.These are non-negotiable values for us here at Tara ',
    buttonText: 'Learn More',
  },
  {
    id: 4,
    icon: '/sales.png',
    title: 'Extensive & Affordable Service Offering:',
    description: 'TARA provides a comprehensive range of services beyond staffing, recruitment, and payroll. We tailor our solutions to meet the unique needs of our clients, making them accessible and cost-effective.',
    buttonText: 'Learn More',
  },
  
];

const Apart = () => {
  return (
    <section className="py-12 bg-header-peach border border-black">
      <div className="flex flex-col lg:flex-row px-4 sm:px-8 lg:px-[10%]">
        {/* Left half - Image */}
        <div className="relative w-full sm:w-1/2 mb-8 border border-black lg:mb-0 mr-0 sm:mr-12">
          <Image
            src="/hr-team.jpg"
            alt="Illustration"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right half - Boxes */}
        <div className="w-full sm:w-1/2">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-5xl font-bold text-text-color mb-4 uppercase">
              What sets us apart?
            </h2>
            <p className="text-text-color">
              At TARA, we distinguish ourselves through several unique features, approaches, and values that set us apart from other staffing, recruitment, and payroll agencies in Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {boxData.map((box) => (
              <div key={box.id} className="bg-slate-100 text-text-color border border-black p-6 shadow rounded transition-transform transform hover:scale-105">
                <Image
                  src={box.icon}
                  alt={`Icon ${box.id}`}
                  className="h-12 w-12 mb-4"
                  height={48}
                  width={48}
                />
                <h3 className="text-xl font-semibold mb-2">{box.title}</h3>
                <p className="mb-4">
                  {box.description}
                </p>
                <button className="px-4 py-2 bg-text-color text-white rounded hover:bg-button-hover">
                  {box.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apart;
