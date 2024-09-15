import Image from 'next/image';

const About = () => {
  return (
    <section className="text-center py-16 px-4 md:px-8 lg:px-16  text-text-color mt-8">
      {/* Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Text Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6">About Tara Consulting</h2>
          <p className="text-lg mb-6">
            Tara Consulting is a leading human resource agency, with over 10 years of excellence in delivering top-tier staffing, recruitment, payroll, and HR services. We pride ourselves on helping businesses grow by providing tailored human resource solutions. 
          </p>
          <p className="text-lg mb-6">
            Our expertise spans across multiple industries including finance, technology, healthcare, and manufacturing, where we have continuously provided exceptional value. At Tara, we believe in a people-first approach, and our commitment to workforce development and client satisfaction has made us the go-to HR partner for businesses of all sizes.
          </p>
          <p className="text-lg mb-6">
            Our team of experts works closely with clients to understand their specific needs, ensuring we deliver solutions that drive both short-term gains and long-term success. Whether you are looking for recruitment support, payroll management, or strategic HR consulting, Tara Consulting is here to help.
          </p>
        </div>

        {/* Image Section */}
        <div className="relative ml-8">
          <div className="grid  gap-8">
            {/* First Image */}
            <div className="w-full h-full overflow-hidden rounded-lg">
              <Image
                src="/hr-team.jpg"
                alt="Tara HR Team"
                width={500}
                height={300}
                className="object-cover w-full h-[400px]"
              />
            </div>
            {/* Second Image */}
          </div>
        </div>
      </div>

      {/* Responsive Stats Section */}
    </section>
  );
};

export default About;
