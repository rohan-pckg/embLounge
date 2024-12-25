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
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-teal-950/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/src/assets/logo.png"
              alt="Embassy Lounge"
              className="h-12 w-12 transform hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "News"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-emerald-200 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-200 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}

            <div className="relative group">
              <button
                className="text-emerald-200 hover:text-white transition-colors flex items-center gap-1 group"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Branches
                <ChevronDown className="w-4 h-4 transform transition-transform duration-300 group-hover:rotate-180" />
              </button>
              <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 w-48 bg-teal-900/95 backdrop-blur-sm rounded-lg shadow-xl py-2 mt-2 transition-all duration-300 transform origin-top scale-95 group-hover:scale-100">
                {branches.map((branch) => (
                  <a
                    key={branch}
                    href={`/branch/${branch.toLowerCase()}`}
                    className="block px-4 py-2 text-sm text-emerald-200 hover:bg-teal-800/50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {branch}
                  </a>
                ))}
              </div>
            </div>

            <button className="bg-emerald-200 text-teal-950 px-6 py-3 rounded-lg hover:bg-emerald-300 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-emerald-200 hover:text-white transition-colors"
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
        className={`md:hidden fixed left-0 right-0 top-20 bg-teal-900/95 backdrop-blur-sm shadow-lg transition-all duration-300 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          {["Home", "About", "News"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase()}`}
              className="block px-4 py-2 text-emerald-200 hover:bg-teal-800/50 rounded-lg transition-colors"
            >
              {item}
            </a>
          ))}

          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex justify-between items-center w-full px-4 py-2 text-emerald-200 hover:bg-teal-800/50 rounded-lg transition-colors"
            >
              Branches
              <ChevronDown
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`pl-4 space-y-2 transition-all duration-300 ${
                isDropdownOpen
                  ? "max-h-64 opacity-100 visible"
                  : "max-h-0 opacity-0 invisible"
              } overflow-hidden`}
            >
              {branches.map((branch) => (
                <a
                  key={branch}
                  href={`/branch/${branch.toLowerCase()}`}
                  className="block px-4 py-2 text-emerald-200 hover:bg-teal-800/50 rounded-lg transition-colors"
                >
                  {branch}
                </a>
              ))}
            </div>
          </div>

          <button className="w-full px-4 py-2 bg-emerald-200 text-teal-950 rounded-lg hover:bg-emerald-300 transition-colors">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
