import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/shared/logo.svg";
import line from "../assets/line.png"
import Menu from "../assets/shared/icon-hamburger.svg"

// Define types for our navigation items
type NavItem = {
  id: string;
  label: string;
  href: string;
};

const Navbar = () => {
  const [activeNav, setActiveNav] = useState<string>("HOME");
  const location = useLocation();

  // Array of navigation items with type annotation
  const navItems: NavItem[] = [
    { id: "00", label: "HOME", href: "/" },
    { id: "01", label: "DESTINATION", href: "/destination" },
    { id: "02", label: "CREW", href: "/crew" },
    { id: "03", label: "TECHNOLOGY", href: "/technology" },
  ];

  // Helper function with type annotation
  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed flex justify-between items-center lg:top-3 left-0 right-0 z-20 ">
      {/* Logo */}
      <div>
        <img src={Logo} alt="logo" className="w-10 h-10 ml-9" />
      </div>

        <img src={line} alt="line" className="absolute left-[120px] z-50 lg:block hidden" />
    
      
      <div className="px-12 lg:pl-32 py-6 lg:backdrop-blur-md lg:bg-transparent sm:bg-[#181A25]">
        <div className="flex items-center justify-between">
          {/* Navigation Items */}
          <div className="hidden sm:flex items-center lg:space-x-12 max-md:space-x-8 md:space-x-8 text-white">
            {navItems.map((item: NavItem) => (
              <NavLink
                key={item.id}
                to={item.href}
                className={({ isActive }: { isActive: boolean }) => 
                  `relative ${isActive ? "text-white" : "text-space-text/70 hover:text-white"}`
                }
                onClick={() => setActiveNav(item.label)}
              >
                <div className="flex items-center">
                    <span className="font-bold mr-2">{item.id}</span>
                <span className="uppercase font-thin">{item.label}</span>
                </div>

                {isActive(item.href) && (
                  <div className="absolute -bottom-6 left-0 right-0 h-0.5 bg-white"></div>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            className="sm:hidden max-sm:bg-none text-space-text"
            aria-label="Mobile menu toggle"
          ><img src={Menu} alt="" />
      
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;