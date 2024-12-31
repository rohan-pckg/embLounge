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

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-teal-950/80 backdrop-blur-md border-b border-emerald-200/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/src/assets/logo.png"
              alt="Embassy Lounge"
              className="h-16 w-16 transform hover:scale-110 transition-transform duration-300"
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
              <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 w-56 bg-teal-950/95 backdrop-blur-md rounded-xl shadow-xl py-2 mt-4 transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 border border-emerald-200/10">
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
              className="text-emerald-200/90 hover:text-emerald-200 transition-colors duration-300"
            >
              {isOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-24 bg-teal-950/95 backdrop-blur-md transition-all duration-500 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 space-y-6 h-[calc(100vh-6rem)] overflow-y-auto">
          {["Home", "About", "News"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="block text-2xl text-emerald-200/90 hover:text-emerald-200 transition-colors duration-300"
            >
              {item}
            </a>
          ))}

          <div className="space-y-6">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex justify-between items-center w-full text-2xl text-emerald-200/90 hover:text-emerald-200 transition-colors duration-300"
            >
              Branches
              <ChevronDown
                className={`w-6 h-6 transform transition-transform duration-500 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`pl-8 space-y-6 transition-all duration-500 ${
                isDropdownOpen
                  ? "max-h-96 opacity-100 visible"
                  : "max-h-0 opacity-0 invisible"
              } overflow-hidden`}
            >
              {branches.map((branch) => (
                <a
                  key={branch}
                  href={`/branch/${branch.toLowerCase()}`}
                  className="block text-xl text-emerald-200/90 hover:text-emerald-200 transition-colors duration-300"
                >
                  {branch}
                </a>
              ))}
            </div>
          </div>

          <a
            href="/contact"
            className="block w-full px-8 py-4 bg-emerald-200/90 hover:bg-emerald-200 text-teal-950 rounded-full text-xl text-center transition-all duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;