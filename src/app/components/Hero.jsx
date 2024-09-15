import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-12 md:px-12 lg:px-20 xl:px-[20%]">
      <div className="text-center">
        <h1 className="text-[30px] md:text-4xl lg:text-4xl font-bold text-color mt-6 md:mt-8 lg:mt-10">
          Global Workforce Solutions for a Competitive Edge
        </h1>
        <p className="text-color mb-4 md:mb-6">
          Simplifying global recruitment, staff and payroll management while offering comprehensive HR solutions
        </p>
        <Link href="/about">
        <button className="px-[16px] py-[8px] md:px-6 md:py-3 bg-text-color text-white rounded hover:bg-button-hover">
          Learn More
        </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
