import React, { useState } from "react";
import moonImage from "../../assets/destination/image-moon.png";
import marsImage from "../../assets/destination/image-mars.webp";
import europaImage from "../../assets/destination/image-europa.webp";
import titanImage from "../../assets/destination/image-titan.webp";
import DesktopDes from "../../assets/destination/background-destination-desktop.jpg";
import TabletDes from "../../assets/destination/background-destination-tablet.jpg";
import MobileDes from "../../assets/destination/background-destination-mobile.jpg";

interface Destination {
  id: string;
  name: string;
  image: string;
  description: string;
  distance: string;
  travelTime: string;
}

const destinations: Destination[] = [
  {
    id: "moon",
    name: "MOON",
    image: moonImage,
    description:
      "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    travelTime: "3 DAYS",
  },
  {
    id: "mars",
    name: "MARS",
    image: marsImage,
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    travelTime: "9 MONTHS",
  },
  {
    id: "europa",
    name: "EUROPA",
    image: europaImage,
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. KM",
    travelTime: "3 YEARS",
  },
  {
    id: "titan",
    name: "TITAN",
    image: titanImage,
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. KM",
    travelTime: "7 YEARS",
  },
];

const MoonDes: React.FC = () => {
  const [activeDestination, setActiveDestination] = useState<Destination>(
    destinations[0]
  );

  return (
    <div className="relative w-full h-full">
      {/* Mobile - shown by default */}
      <img
        src={MobileDes}
        alt="home background mobile"
        className="block w-full h-[900px] sm:hidden"
      />

      {/* Tablet - shown on md screens */}
      <img
        src={TabletDes}
        alt="home background tablet"
        className="max-sm:hidden w-full h-[1000px] sm:block lg:hidden"
      />

      {/* Desktop - shown on lg screens and up */}
      <img
        src={DesktopDes}
        alt="home background desktop"
        className="hidden w-full h-full lg:block"
      />
      <div className="absolute overflow-hidden top-0 w-full h-full flex justify-center max-md:text-center items-center text-white">
        <div className="relative w-full h-full flex justify-center items-center ">
          {/* Main content */}
          <div className="flex flex-col gap-16  lg:items-start max-sm:justify-end items-center w-[1000px] max-lg:m-6">
            <div>
              <h2>
                <span className="mr-5 text-[#8186A0] font-medium">01</span> PICK
                YOUR DESTINATION
              </h2>
            </div>
            {/* Left side - Image */}
            <div className="flex max-md:flex-col flex-row max-md:items-center justify-between gap-9 w-full">
              <div className="relative">
                <img
                  src={activeDestination.image}
                  alt={activeDestination.name}
                  className="lg:w-[480px] lg:h-[480px] sm:w-[300px] sm:h-[300px] max-sm:w-[150px] max-sm:h-[150px]  rounded-full transition-all duration-500 ease-smooth"
                  key={activeDestination.id}
                />
              </div>

              {/* Right side - Content */}
              <div>
                {/* Navigation */}
                <nav className="flex justify-start max-md:justify-center space-x-8">
                  {destinations.map((destination) => (
                    <button
                      key={destination.id}
                      onClick={() => setActiveDestination(destination)}
                      className={`cursor-pointer text-sm font-mono tracking-widest transition-colors duration-300 pb-2 border-b-2 ${
                        activeDestination.id === destination.id
                          ? "border-b-2 border-white"
                          : "border-transparent"
                      }`}
                    >
                      {destination.name}
                    </button>
                  ))}
                </nav>
                <p className="text-[100px] max-sm:text-[50px]">{activeDestination.name}</p>

                <p className="text-accent text-base text-[#8186A0] lg:text-lg leading-relaxed max-w-md">
                  {activeDestination.description}
                </p>

                <div className="border-t border-[#2B2D39] pt-6 mt-8">
                  <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:text-center gap-8">
                    <div>
                      <p className="text-[#8186A0] text-xs font-mono tracking-widest uppercase mb-2">
                        Avg. Distance
                      </p>
                      <p className="text-foreground text-2xl font-light tracking-wide">
                        {activeDestination.distance}
                      </p>
                    </div>
                    <div>
                      <p className="text-[#8186A0] text-xs font-mono tracking-widest uppercase mb-2">
                        Est. Travel Time
                      </p>
                      <p className="text-foreground text-2xl font-light tracking-wide">
                        {activeDestination.travelTime}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoonDes;
