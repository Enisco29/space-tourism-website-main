import React, { useState, useEffect, useRef } from "react";
import MemberOne from "../../assets/crew/image-douglas-hurley.webp";
import MemberTwo from "../../assets/crew/image-mark-shuttleworth.webp";
import MemberThree from "../../assets/crew/image-victor-glover.webp";
import MemberFour from "../../assets/crew/image-anousheh-ansari.webp";
import DesktopCrewBg from "../../assets/crew/background-crew-desktop.jpg";
import MobileCrewBg from "../../assets/crew/background-crew-mobile.jpg";
import TabletCrewBg from "../../assets/crew/background-crew-tablet.jpg";

interface CrewMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
}

const crewMembers: CrewMember[] = [
  {
    id: 1,
    name: "DOUGLAS HURLEY",
    role: "COMMANDER",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: MemberOne,
  },
  {
    id: 2,
    name: "MARK VANDE HEI",
    role: "MISSION SPECIALIST",
    description:
      "Mark Thomas Vande Hei is an American astronaut who has served as a flight engineer for Expedition 53, 54, 64, 65, and 66 on the International Space Station.",
    image: MemberTwo,
  },
  {
    id: 3,
    name: "VICTOR GLOVER",
    role: "PILOT",
    description:
      "Victor Jerome Glover is a NASA astronaut of the class of 2013 and pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station.",
    image: MemberThree,
  },
  {
    id: 4,
    name: "ANOUSHEH ANSARI",
    role: "FLIGHT ENGINEER",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. She was the first Iranian and first Muslim woman in space.",
    image: MemberFour,
  },
];

const Crew: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % crewMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + crewMembers.length) % crewMembers.length
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

  // Mouse events for desktop
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

  // Keyboard navigation
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
        src={MobileCrewBg}
        alt="home background mobile"
        className="block w-full h-[900px] sm:hidden"
      />

      {/* Tablet - shown on md screens */}
      <img
        src={TabletCrewBg}
        alt="home background tablet"
        className="max-sm:hidden w-full h-[1000px] sm:block lg:hidden"
      />

      {/* Desktop - shown on lg screens and up */}
      <img
        src={DesktopCrewBg}
        alt="home background desktop"
        className="hidden w-full h-full lg:block"
      />
      <div className="absolute top-0 w-full text-white bg-gradient-to-br from-space-dark to-space-blue flex flex-col">
        {/* Header */}
        <div className="pt-20 pb-8 text-start sm:px-[20px] max-sm:text-center lg:px-[100px]">
          <h2 className="text-space-light/60 text-sm tracking-[0.2em] uppercase mb-4">
            <span className="mr-5 text-[#8186A0] font-medium">02</span>MEET YOUR
            CREW
          </h2>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-4">
          <div
            ref={containerRef}
            className="w-full max-w-6xl mx-auto cursor-grab active:cursor-grabbing select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center max-md:justify-center ">
              {/* Text Content */}
              <div className="order-1 text-left max-md:text-center max-w-lg">
                <h3 className="text-space-light/60 text-lg text-[#9a9aa0] md:text-xl uppercase tracking-wider mb-4">
                  {crewMembers[currentIndex].role}
                </h3>
                <h1 className="text-space-light text-3xl md:text-5xl lg:text-5xl font-light uppercase mb-6 tracking-wide">
                  {crewMembers[currentIndex].name}
                </h1>
                <p className="text-space-light/80 text-base font-[400] text-[#8186A0] md:text-lg leading-relaxed">
                  {crewMembers[currentIndex].description}
                </p>
              </div>
              {/* Navigation Dots */}
              <div className="pb-10 order-2 md:hidden flex justify-center md:justify-start md:pl-20">
                <div className="flex space-x-4">
                  {crewMembers.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                        index === currentIndex
                          ? "bg-[#FFFFFF]"
                          : "bg-[#373944] hover:bg-space-light/60"
                      }`}
                      aria-label={`Go to crew member ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Image */}
              <div className="order-3 flex justify-center">
                <div className="relative">
                  <img
                    src={crewMembers[currentIndex].image}
                    alt={crewMembers[currentIndex].name}
                    className=" lg:w-[500px] lg:h-[628px] max-md:w-[400px] max-md:h-[520px] max-sm:w-[271px] max-sm:h-[340px] transition-all duration-500 ease-out"
                    style={{
                      filter: "brightness(1.1) contrast(1.1)",
                    }}
                  />
                  {/* Existing radial gradient overlay */}
                  <div
                    className="absolute inset-0 rounded-full opacity-30 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(circle at center, transparent 40%, hsl(var(--astronaut-blue) / 0.1) 70%)",
                      boxShadow: "var(--glow-blue)",
                    }}
                  />
                  {/* New dark bottom gradient overlay */}
                  <div
                    className="absolute left-0 bottom-0 w-full h-1/3 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to top, #0B0E17 10%, transparent 100%)",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="pb-10 max-md:hidden flex justify-center md:justify-start md:pl-[100px]">
          <div className="flex space-x-4">
            {crewMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  index === currentIndex
                    ? "bg-[#FFFFFF]"
                    : "bg-[#373944] hover:bg-space-light/60"
                }`}
                aria-label={`Go to crew member ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
