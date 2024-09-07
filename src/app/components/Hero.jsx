import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex items-center justify-between px-[20%] py-12">
    <div className="w-1/2 text-center">
      <h1 className="text-5xl font-bold text-white mb-4">Global Workforce Solutions for a Competitive Edge </h1>
      <p className="text-white mb-6">
      Simplifying global recruitment, staff and payroll management while offering comprehensive HR solutions 
      </p>
      <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600">
        Learn More
      </button>
    </div>
    <div className="w-1/2 flex items-center justify-center ">
        <Image src="/hero.gif" alt="Tara Consulting Logo" width={500} height={600}  className="bg-header-blue"/>
     
    </div>
  </section>
  );
};

export default Hero;