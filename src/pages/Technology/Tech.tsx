import React, { useState, useEffect } from "react";
import DesktopTechBg from "../../assets/technology/background-technology-desktop.jpg";
import MobileTechBg from "../../assets/technology/background-technology-mobile.jpg";
import TabletTechBg from "../../assets/technology/background-technology-tablet.jpg";
import Image1 from "../../assets/technology/image-launch-vehicle-portrait.jpg";
import Image2 from "../../assets/technology/image-space-capsule-portrait.jpg";
import Image3 from "../../assets/technology/image-spaceport-portrait.jpg";
import Image1L from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import Image2L from "../../assets/technology/image-space-capsule-landscape.jpg";
import Image3L from "../../assets/technology/image-spaceport-landscape.jpg";

interface TechnologyItem {
  id: number;
  title: string;
  description: string;
  image: string;
  imageL: string;
}

const technologyItems: TechnologyItem[] = [
  {
    id: 1,
    title: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    image: Image1,
    imageL: Image1L,
  },
  {
    id: 2,
    title: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
    image: Image2,
    imageL: Image2L,
  },
  {
    id: 3,
    title: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry vehicle designed to return from space to Earth's surface. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    image: Image3,
    imageL: Image3L,
  },
];

const Tech: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % technologyItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + technologyItems.length) % technologyItems.length
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setTouchStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (touchStart) {
      setTouchEnd(e.clientX);
    }
  };

  const handleMouseUp = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* Mobile - shown by default */}
      <img
        src={MobileTechBg}
        alt="home background mobile"
        className="block w-full h-[900px] sm:hidden"
      />

      {/* Tablet - shown on md screens */}
      <img
        src={TabletTechBg}
        alt="home background tablet"
        className="max-sm:hidden w-full h-[1000px] sm:block lg:hidden"
      />

      {/* Desktop - shown on lg screens and up */}
      <img
        src={DesktopTechBg}
        alt="home background desktop"
        className="hidden w-full h-full lg:block"
      />
      <div className="absolute w-full top-0 text-white bg-gradient-to-br from-space-dark to-space-blue flex flex-col">
        {/* Header */}
        <div className="pt-20 lg:pt-[100px] pb-8 text-center md:text-start md:pl-[50px]">
          <h2 className="text-space-light/60 text-sm tracking-[0.2em] uppercase mb-4">
            03 SPACE LAUNCH 101
          </h2>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center">
          <div
            className="w-full lg:ml-[50px] mx-auto cursor-grab active:cursor-grabbing select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center md:text-center max-md:text-center">
              {/* Text Content */}
              <div className="order-2 lg:order-1">
                <div className="flex flex-col lg:flex-row items-center lg:items-start  gap-8">
                  {/* Navigation Numbers */}
                  <div className="flex lg:flex-col gap-4 lg:gap-6">
                    {technologyItems.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-12 h-12 lg:w-16 lg:h-16 rounded-full border-2 transition-all duration-300 hover:scale-110 flex items-center justify-center text-lg lg:text-xl font-light ${
                          index === currentIndex
                            ? "bg-white text-black border-space-light"
                            : "bg-transparent text-space-light border-space-light/30 hover:border-space-light/60"
                        }`}
                        aria-label={`Go to technology ${index + 1}`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>

                  {/* Content */}
                  <div className="max-w-lg max-md:p-4">
                    <h3 className="text-space-light/60 lg:text-start text-sm lg:text-base uppercase tracking-wider mb-4">
                      THE TERMINOLOGY...
                    </h3>
                    <h1 className="text-space-light text-3xl lg:text-5xl xl:text-6xl font-light uppercase mb-6 tracking-wide">
                      {technologyItems[currentIndex].title}
                    </h1>
                    <p className="text-space-light/80 text-base lg:text-lg leading-relaxed">
                      {technologyItems[currentIndex].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative">
                  <img
                    src={technologyItems[currentIndex].image}
                    alt={technologyItems[currentIndex].title}
                    className="w-full sm:hidden block md:block max-w-md max-md:h-[258px] lg:max-w-lg xl:max-w-xl h-auto object-cover transition-all duration-500 ease-out rounded-lg"
                    style={{
                      filter: "brightness(1.1) contrast(1.1)",
                    }}
                  />
                  <img
                    src={technologyItems[currentIndex].imageL}
                    alt={technologyItems[currentIndex].title}
                    className="w-full sm:block md:hidden hidden max-w-md max-md:h-[258px] lg:max-w-lg xl:max-w-xl h-auto object-cover transition-all duration-500 ease-out rounded-lg"
                    style={{
                      filter: "brightness(1.1) contrast(1.1)",
                    }}
                  />
                  <div
                    className="absolute inset-0 rounded-lg opacity-20 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(circle at center, transparent 40%, hsl(var(--astronaut-blue) / 0.1) 70%)",
                      boxShadow: "var(--glow-blue)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
