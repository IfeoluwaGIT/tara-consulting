import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-[20%] py-4 bg-header-blue">
      <div className="flex items-center">
        <Image src="/logo.jpg" alt="Tara Consulting Logo" className="h-10 w-28 mr-2 " width={32} height={32}/>
      </div>
      <div className="flex space-x-6">
        <Link href="/" className="text-white hover:text-amber-400">Home</Link>
        <Link href="/services" className="text-white hover:text-amber-400">Services</Link>
        <Link href="/about" className="text-white hover:text-amber-400">About</Link>
        <Link href="/contact" className="text-white hover:text-amber-400">Contact</Link>
        <Link href="/FAQ" className="text-white hover:text-amber-400">FAQ</Link>
        <Link href="/careers" className="text-white hover:text-amber-400">Careers</Link>
      </div>
      <button className="ml-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Get in Touch
      </button>
    </nav>
  );
};

export default Navbar;