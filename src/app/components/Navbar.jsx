import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full fixed top-0 left-0 z-50 mx-auto">
      <nav className="flex items-center justify-between px-4 py-4 bg-header-peach border border-black rounded-lg shadow-md">
        <div className="flex items-center">
          <Image src="/logo.jpg" alt="Tara Consulting Logo" className="h-10 w-28" width={32} height={32} />
        </div>
        <div className="flex space-x-6">
          <Link href="/" className="text-text-color hover:text-amber-400">Home</Link>
          <Link href="/services" className="text-color hover:text-button-hover">Services</Link>
          <Link href="/about" className="text-color hover:text-button-hover">About</Link>
          <Link href="/contact" className="text-color hover:text-button-hover">Contact</Link>
          <Link href="/FAQ" className="text-color hover:text-button-hover">FAQ</Link>
          <Link href="/careers" className="text-color hover:text-button-hover">Careers</Link>
        </div>
        <button className="ml-6 px-4 py-2 bg-text-color text-white rounded hover:bg-button-hover">
          Get in Touch
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
