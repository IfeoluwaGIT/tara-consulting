import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex items-center justify-between  px-[20%] py-12  ">
    <div className="text-center">
      <h1 className="text-5xl font-bold text-color ">Global Workforce Solutions for a Competitive Edge </h1>
      <p className="text-color mb-6">
      Simplifying global recruitment, staff and payroll management while offering comprehensive HR solutions 
      </p>
      <button className="px-6 py-3 bg-text-color text-white rounded hover:bg-button-hover">
        Learn More
      </button>
    </div>
  </section>
  );
};

export default Hero;