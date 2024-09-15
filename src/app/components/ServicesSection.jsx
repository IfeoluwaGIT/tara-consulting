import Image from 'next/image';

const services = [
  { icon: '🛠️', title: 'Staffing Solutions', description: 'At TARA, we are experts at providing top-notch staffing solutions that are tailored to the unique needs of your company. Finding the right talent to advance your company is crucial, as our knowledgeable team is aware of. We have the expertise to deliver tailored staffing solutions across various industries and job roles; whether it is temporary, contract, or permanent staff. ' },
  { icon: '💼', title: 'Recruitment Services ', description: 'Our recruitment services are designed to streamline your hiring process and connect you with the most qualified candidates. To ensure we find the best match for your requirements, TARA uses a thorough approach that includes targeted sourcing, candidate screening, and in-depth assessments. We leverage our extensive network and industry knowledge to source exceptional talent and deliver exceptional results. ' },
  { icon: '💳', title: 'Payroll Management', description: 'Utilize TARAs effective payroll management services to streamline your payroll procedures while concentrating on your main lines of business. Our devoted payroll team takes care of all facets of payroll administration, including salary calculations, tax deductions, compliance, and statutory requirements. With our reliable and accurate payroll management solutions, you can ensure timely and hassle-free payroll processing while maintaining strict confidentiality and data security.' },
  { icon: '🌐', title: 'Verification Services', description: 'TARA offers comprehensive verification services to help you make informed hiring decisions and mitigate potential risks. Our verification processes include background checks, employment history verification, educational qualification verification, and reference checks. By conducting rigorous verification procedures, we provide you with reliable insights into the background and credibility of candidates, ensuring you make informed hiring choices. ' },
  { icon: '📊', title: 'Training and Development', description: 'Invest in the growth and development of your workforce with TARAs training and development programs. We provide specialized training solutions that are catered to the unique requirements of your business and sector. Your employees will leave the training sessions our skilled instructors deliver with the skills and knowledge they need to succeed in their positions. From soft skills training to specialized technical training, we empower your workforce for success.' },
  { icon: '🩺', title: 'Health Insurance', description: 'Take care of your employees well-being with our health insurance service. We understand the significance of providing comprehensive healthcare coverage to your workforce. TARA partners with reputable insurance providers to offer competitive health insurance plans. Our team will assist you in selecting the best package for your employees, ensuring that they receive the necessary medical benefits and have access to quality healthcare services. ' },
  { icon: '🧑‍💻', title: 'Employee Management', description: 'With our comprehensive suite of services, you can streamline your employee management processes. TARA offers end-to-end solutions to handle various aspects of workforce management, from recruitment to employee engagement. Finding and keeping top talent for your company is important, and our committed team is aware of this. We leverage our extensive network and industry expertise to provide tailored solutions that align with your business goals. ' },
  { icon: '👔', title: 'Advisory Services', description: 'TARAs advisory services provide valuable guidance and strategic insights to optimize your human resources practices. Your organizations goals and challenges are carefully examined by our team of HR specialists, who then provide recommendations and solutions that are suited to your organization. Whether you need help with HR policies and procedures, talent management, or workforce planning, our advisory services can help you make informed decisions and drive organizational growth. ' },
];

const ServicesSection = () => {
  return (
    <section className="services-section py-8 px-4 md:px-8 lg:px-16 xl:px-32  text-text-color">
      <h1 className="text-center text-text-color  p-4 md:p-8 lg:p-12 text-3xl md:text-4xl font-bold uppercase pt-16 md:pt-24">Our Services</h1>
      
      {/* Full-width image */}
      <div className="relative w-full h-[400px] md:h-[500px] lg:h-[700px]">
        <Image
          src="/interview.jpg" // Update with the correct image path
          alt="Services Image"
          fill
          style={{ objectFit: 'cover' }}
          className="w-full h-full rounded-lg"
        />
      </div>

      {/* Boxes Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 px-2 md:px-4 relative bg-header-peach text-text-color">
        {services.map((service, index) => (
          <div key={index} className="relative box bg-slate-100 shadow-lg p-4 text-center h-auto border border-border-color mb-4">
            
            {/* Icon overlapping the image */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-slate-100 p-2 rounded-full shadow-lg">
              <span className="text-2xl md:text-3xl">{service.icon}</span>
            </div>

            <h3 className="mt-12 text-lg md:text-xl font-semibold">{service.title}</h3>
            <p className="mt-4 text-sm md:text-base">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
