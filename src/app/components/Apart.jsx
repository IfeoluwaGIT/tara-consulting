import Image from "next/image";

const boxData = [
    {
      id: 1,
      icon: '/Group.png',
      title: 'Quality of Candidates',
      description: ' We ensure that our clients have access to top-quality candidates who possess the skills, experience, and cultural fit required for their organizations.',
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
      description: 'We uphold the highest standards of integrity in all our interactions. Our commitment to transparency and ethical practices builds trust and fosters long-term partnerships.',
      buttonText: 'Learn More',
    },
    {
      id: 4,
      icon: '/sales.png',
      title: 'Extensive & Affordable Service Offering:',
      description: 'TARA provides a comprehensive range of services beyond staffing, recruitment, and payroll. We tailor our solutions to meet the unique needs of our clients, making them accessible and cost-effective.',
      buttonText: 'Learn More',
    },
    {
      id: 5,
      icon: '/digital.png',
      title: 'Proprietary HR Software Solution:',
      description: 'Our proprietary HR software solution enhances efficiency and effectiveness in managing employee data, payroll processing, and related HR functions.',
      buttonText: 'Learn More',
    },
  ];

const Apart = () => {
  return (
    <section className="px-[10%] py-12 bg-gray-200">
    {/* Two equal halves with text */}
    
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">What set's us apart? </h2>
        <p className="text-gray-600">
        At TARA, we distinguish ourselves through several unique features, approaches, and values that set us apart from other staffing, recruitment, and payroll agencies in Nigeria
        </p>
      </div>


    {/* Six boxes in two rows */}
    <div className="grid grid-cols-3 gap-6">
      {boxData.map((box) => (
        <div key={box.id} className="bg-white p-6 shadow rounded">
          <Image src={box.icon} alt={`Icon ${box.id}`} className="h-12 w-12 mb-4" height={12} width={12}/>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{box.title}</h3>
          <p className="text-gray-600 mb-4">
            {box.description}
          </p>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            {box.buttonText}
          </button>
        </div>
      ))}
    </div>
  </section>
  );
};

export default Apart;