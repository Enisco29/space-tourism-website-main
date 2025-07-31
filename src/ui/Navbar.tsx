import { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/shared/logo.svg";
import line from "../assets/line.png";
import Menu from "../assets/shared/icon-hamburger.svg";
import X from "../assets/shared/icon-close.svg";

// Define types for our navigation items
type NavItem = {
  id: string;
  label: string;
  href: string;
};

// Array of navigation items with type annotation
const navItems: NavItem[] = [
  { id: "00", label: "HOME", href: "/" },
  { id: "01", label: "DESTINATION", href: "/destination" },
  { id: "02", label: "CREW", href: "/crew" },
  { id: "03", label: "TECHNOLOGY", href: "/technology" },
];

const Navbar = () => {
  const [activeNav, setActiveNav] = useState<string>("HOME");

  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Helper function with type annotation
  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };
  const navigate = useNavigate()

  return (
    <nav className="fixed flex justify-between items-center lg:top-3 left-0 right-0 z-20 ">
      {/* Logo */}
      <div>
        <img src={Logo} alt="logo" onClick={() => navigate('/')}  className="w-10 h-10 ml-9 max-sm:mt-4 max-sm:ml-5" />
      </div>

      <img
        src={line}
        alt="line"
        className="absolute left-[120px] z-50 lg:block hidden"
      />

      <div className="px-12 lg:pl-32 py-6 lg:backdrop-blur-md lg:bg-transparent sm:bg-[#181A25]">
        <div className="flex items-center justify-between">
          {/* Navigation Items */}
          <div className="hidden sm:flex items-center lg:space-x-12 max-md:space-x-8 md:space-x-8 text-white">
            {navItems.map((item: NavItem) => (
              <NavLink
                key={item.id}
                to={item.href}
                className={({ isActive }: { isActive: boolean }) =>
                  `relative ${
                    isActive
                      ? "text-white"
                      : "text-space-text/70 hover:text-white"
                  }`
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
          <div className="relative md:hidden">
            {/* Hamburger Icon */}
            <button
              className={`${isOpen === true ? "hidden" : "block"}z-50 p-2 fixed top-4 right-4 bg-opacity-50 rounded`}
              onClick={() => setIsOpen(true)}
            >
              <img src={Menu} alt="" />
            </button>

            {/* Overlay Drawer */}
            <div
              className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2  backdrop-blur-xl text-white shadow-lg transform transition-transform duration-300 z-40 ${
                isOpen ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4"
                onClick={() => setIsOpen(false)}
              >
                <img src={X} alt="" />
              </button>

              {/* Nav Items */}
              <nav className="mt-20 flex flex-col gap-6 px-6 uppercase text-sm tracking-widest">
                {navItems.map((link, idx) => (
                  <NavLink
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    key={idx}
                    className="hover:text-gray-300 transition"
                  >
                    <span className="font-bold mr-2">{link.id}</span>
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
