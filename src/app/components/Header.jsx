import Hero from "./Hero";
import Navbar from "./Navbar";
const Header = () => {
  return (
  
   <div className="bg-custom-bg bg-cover bg-center bg-no-repeat h-screen text-text-color border border-black">
   
      <Navbar />
      <Hero />
      </div>
      
  );
};

export default Header;