import Image from "next/image";
import Link from "next/link";

const AboutTara = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center px-8 lg:px-[10%] py-12 bg-header-peach">
      {/* Left Side - Text Content */}
      <div className="flex-1 lg:pr-12 text-left">
        <h2 className="text-4xl font-bold mb-4 text-text-color">
          Recruiting & Human Resource Management Experts
        </h2>
        <p className="text-lg text-text-color mb-8">
          At Tara Consulting, we specialize in delivering top-notch recruiting and human resource management solutions that empower businesses to find, retain, and grow their talent. Our approach is tailored to meet the specific needs of your organization, ensuring success through strategic HR management.
        </p>

        {/* Buttons */}
        <div className="flex space-x-4">
          <Link href="/services">
            <button className="px-6 py-3 bg-text-color text-white rounded-lg hover:bg-button-hover">
              Our Services
            </button>
          </Link>

          <Link href="/careers">
            <button className="px-6 py-3 bg-text-color text-white rounded-lg hover:bg-button-hover">
              Careers
            </button>
          </Link>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex-1 mt-8 lg:mt-0">
        <Image
          src="/office.jpg"
          alt="Tara Consulting - Recruitment and HR Management"
          width={500}
          height={400}
          className="rounded-2xl shadow-lg object-cover w-[1000px]"
        />
      </div>
    </section>
  );
};

export default AboutTara;
