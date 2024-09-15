import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <div className="py-8 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-42 bg-slate-100 text-text-color text-sm border border-border-color">
      {/* TOP */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-24">
        {/* LEFT */}
        <div className="flex-1 flex flex-col gap-4 md:gap-8">
          <Link href="/">
            <div className="font-medium text-lg uppercase">Tara</div>
          </Link>
          <p className="mb-4 text-sm md:text-base">
            22A, Olatunbosun Street, Shonibare Estate, Maryland, Lagos, Nigeria
          </p>
          <span className="font-semibold">tara@info.com</span>
          <span className="font-semibold">+1 234 567 890</span>
        </div>

        <div className="flex flex-col gap-4 md:gap-6">
          <h1 className="font-medium text-lg uppercase">Socials</h1>
          {/* Instagram */}
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-2 text-pink-500 hover:text-pink-600 mb-2 md:mb-4">
              <FaInstagram size={24} />
              <span className="text-sm md:text-base">Instagram</span>
            </div>
          </Link>

          {/* Facebook */}
          <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-2 text-blue-700 hover:text-blue-800 mb-2 md:mb-4">
              <FaFacebook size={24} />
              <span className="text-sm md:text-base">Facebook</span>
            </div>
          </Link>

          {/* LinkedIn */}
          <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-2 md:mb-4">
              <FaLinkedin size={24} />
              <span className="text-sm md:text-base">LinkedIn</span>
            </div>
          </Link>

          {/* Twitter (X) */}
          <Link href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <div className="flex items-center gap-2 text-sky-500 hover:text-sky-600">
              <FaTwitter size={24} />
              <span className="text-sm md:text-base">X (Twitter)</span>
            </div>
          </Link>
        </div>

        {/* CENTER */}
        <div className="hidden lg:flex flex-1 justify-center items-start">
          <div className="flex flex-col gap-4 md:gap-6">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-4 md:gap-6">
              <Link href="/">Home</Link>
              <Link href="/about">About Us</Link>
              <Link href="/careers">Careers</Link>
              <Link href="/FAQ">FAQ</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-md">
            <Newsletter />
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 mt-8 md:mt-16">
        <div className="text-sm md:text-base">© 2024 TARA. All Rights Reserved</div>
        <div className="flex flex-col gap-4 md:flex-row md:gap-8">
          <div>
            <span className="mr-2 md:mr-4">Language</span>
            <span className="font-medium">Nigeria | English</span>
          </div>
          <div>
            <span className="mr-2 md:mr-4">Currency</span>
            <span className="font-medium">NGN</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
