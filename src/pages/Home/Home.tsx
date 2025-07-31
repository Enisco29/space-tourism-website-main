import React from "react";
import DesktopHomeBg from "../../assets/home/background-home-desktop.jpg";
import TabletHomeBg from "../../assets/home/background-home-tablet.jpg";
import MobileHomeBg from "../../assets/home/background-home-mobile.jpg";
import Hero from "../../ui/Hero";

const Home: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background images for different screen sizes */}
      <div className="fixed inset-0 -z-10">
        {/* Mobile - shown by default */}
        <img
          src={MobileHomeBg}
          alt="home background mobile"
          className="block w-full h-full md:hidden"
        />
        
        {/* Tablet - shown on md screens */}
        <img
          src={TabletHomeBg}
          alt="home background tablet"
          className="hidden w-full h-full md:block lg:hidden"
        />
        
        {/* Desktop - shown on lg screens and up */}
        <img
          src={DesktopHomeBg}
          alt="home background desktop"
          className="hidden w-full h-full lg:block"
        />
      </div>
      
      {/* Hero content - positioned relative to viewport */}
      <div className="relative z-10 min-h-[660px]">
        <Hero />
      </div>
    </div>
  );
};

export default Home;