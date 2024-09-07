import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-[20%] py-4 bg-header-blue">
      <div className="flex items-center">
        <Image src="/logo.jpg" alt="Tara Consulting Logo" className="h-10 w-28 mr-2 " width={32} height={32}/>
      </div>
      <div className="flex space-x-6">
        <a href="#home" className="text-gray-600 hover:text-gray-900">Home</a>
        <a href="#services" className="text-gray-600 hover:text-gray-900">Services</a>
        <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
        <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
      </div>
      <button className="ml-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Get in Touch
      </button>
    </nav>
  );
};

export default Navbar;