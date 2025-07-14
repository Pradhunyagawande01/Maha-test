import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    closeMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-space-blue/95 backdrop-blur-md shadow-lg"
          : "bg-space-blue/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-custom h-20 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => scrollToSection("home")} className="flex items-center">
          <img className="h-10 w-auto" src="/img/Logo.png" alt="Logo" />
        </button>

        {/* Hamburger */}
        <div
          className="lg:hidden text-[#ff5c00] text-2xl cursor-pointer"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Menu */}
        <ul
          className={`fixed lg:static top-20 left-0 w-full lg:w-auto h-[calc(100vh-5rem)] lg:h-auto 
                     flex flex-col lg:flex-row lg:items-center bg-space-blue/95 lg:bg-transparent 
                     backdrop-blur-md lg:backdrop-blur-none transition-all duration-300 ease-in-out 
                     ${
                       isOpen
                         ? "translate-x-0 opacity-100"
                         : "-translate-x-full lg:translate-x-0 opacity-0 lg:opacity-100"
                     } 
                     lg:space-x-6 p-8 lg:p-0 overflow-auto lg:overflow-visible z-40`}
        >
          {["Home", "About", "Tracks","Prize", "Team", "FAQ"].map(
            (item) => (
              <li key={item} className="my-4 lg:my-0">
                <button
                  onClick={() => scrollToSection(item)}
                  className={`font-pixel text-sm lg:text-xs uppercase tracking-wider transition-colors duration-300 text-white hover:text-[#ff5c00]`}
                >
                  {item}
                </button>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
