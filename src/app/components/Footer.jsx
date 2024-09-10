import Image from "next/image";
import Link from "next/link";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-header-blue text-white text-sm">
      {/* TOP */}
      <div className="flex flex-col md:flex-row gap-24-">
        {/* LEFT */}
        <div className="flex-1 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide">Tara</div>
          </Link>
          <p className="mb-4">
          22A, Olatunbosun Street, Shonibare Estate, Maryland, Lagos, Nigeria
          </p>
          <span className="font-semibold">hello@lama.dev</span>
          <span className="font-semibold">+1 234 567 890</span>
          <div className="flex gap-6 mt-4">
            <Image src="/facebook.png" alt="" width={16} height={16} />
            <Image src="/instagram.png" alt="" width={16} height={16} />
            <Image src="/youtube.png" alt="" width={16} height={16} />
            <Image src="/x.png" alt="" width={16} height={16} />
          </div>
        </div>
        
        {/* CENTER */}
        <div className="hidden lg:flex flex-1 justify-center items-start">
          <div className="flex flex-col gap-6">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
        </div>
        
        {/* RIGHT */}
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-md"> {/* Adjust the width here */}
            <Newsletter />
          </div>
        </div>
      </div>
      
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div>© 2024 Whisk'n Mix</div>
        <div className="flex flex-col gap-8 md:flex-row">
          <div>
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">Nigeria | English</span>
          </div>
          <div>
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">NGN</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
