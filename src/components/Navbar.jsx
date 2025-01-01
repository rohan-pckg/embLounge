import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const branches = ["Mbale", "Iganga", "Busia", "Jinja"];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-teal-950 border-b border-emerald-200/10"
          : "bg-teal-950 md:bg-transparent"  // Solid background on mobile, transparent on desktop
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16 md:h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/logo.png"
              alt="Embassy Lounge"
              className="h-12 w-12 md:h-16 md:w-16 transform hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-12">
            {["Home", "About", "News"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-emerald-200/90 hover:text-emerald-200 transition-colors duration-300 text-lg tracking-wide relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-emerald-200/50 transition-all duration-500 group-hover:w-full"></span>
              </a>
            ))}

            <div className="relative group">
              <button
                className="text-emerald-200/90 hover:text-emerald-200 transition-colors duration-300 flex items-center gap-2 text-lg tracking-wide group"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Branches
                <ChevronDown className="w-5 h-5 transform transition-transform duration-500 group-hover:rotate-180" />
              </button>
              <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 w-56 bg-teal-950 rounded-xl shadow-xl py-2 mt-4 transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 border border-emerald-200/10">
                {branches.map((branch) => (
                  <a
                    key={branch}
                    href={`/branch/${branch.toLowerCase()}`}
                    className="block px-6 py-3 text-lg text-emerald-200/90 hover:text-emerald-200 hover:bg-emerald-200/5 transition-all duration-300"
                  >
                    {branch}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="/contact"
              className="px-8 py-3 bg-emerald-200/90 hover:bg-emerald-200 text-teal-950 rounded-full text-lg tracking-wide transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-emerald-200/90 hover:text-emerald-200 transition-colors duration-300 p-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-teal-950 transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full"
        }`}
      >
        <div className="px-6 py-6 space-y-6 h-[calc(100vh-4rem)] overflow-y-auto">
          {["Home", "About", "News"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="block text-xl text-emerald-200/90 hover:text-emerald-200 transition-colors duration-300 py-2"
              onClick={handleNavigation}
            >
              {item}
            </a>
          ))}

          <div className="space-y-4">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex justify-between items-center w-full text-xl text-emerald-200/90 hover:text-emerald-200 transition-colors duration-300 py-2"
            >
              Branches
              <ChevronDown
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`pl-4 space-y-4 transition-all duration-300 ${
                isDropdownOpen
                  ? "max-h-64 opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              {branches.map((branch) => (
                <a
                  key={branch}
                  href={`/branch/${branch.toLowerCase()}`}
                  className="block text-lg text-emerald-200/90 hover:text-emerald-200 transition-colors duration-300 py-2"
                  onClick={handleNavigation}
                >
                  {branch}
                </a>
              ))}
            </div>
          </div>

          <a
            href="/contact"
            className="block w-full px-6 py-3 bg-emerald-200/90 hover:bg-emerald-200 text-teal-950 rounded-full text-lg text-center transition-all duration-300 mt-8"
            onClick={handleNavigation}
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;