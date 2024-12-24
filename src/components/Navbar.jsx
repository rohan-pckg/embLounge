import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const branches = ["Mbale", "Iganga", "Busia", "jinja"];

  return (
    <nav className="bg-teal-950 border-b border-teal-900 fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <img
              src="/src/assets/logo.png"
              alt="Embassy Lounge"
              className="h-10 w-10"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-emerald-200 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-emerald-200 hover:text-white transition-colors"
            >
              About
            </a>
            <div className="relative group">
              <button
                className="text-emerald-200 hover:text-white transition-colors flex items-center gap-1"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Branches
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute hidden group-hover:block w-48 bg-teal-900 rounded-md shadow-lg py-1 mt-2">
                {branches.map((branch) => (
                  <a
                    key={branch}
                    href={`/branch/${branch.toLowerCase()}`}
                    className="block px-4 py-2 text-sm text-emerald-200 hover:bg-teal-800 transition-colors"
                  >
                    {branch}
                  </a>
                ))}
              </div>
            </div>
            <a
              href="/news"
              className="text-emerald-200 hover:text-white transition-colors"
            >
              News
            </a>
            <button className="bg-emerald-200 text-teal-950 px-6 py-3 rounded hover:bg-emerald-300 transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-emerald-200 hover:text-white"
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
      <div className={`md:hidden ${isOpen ? "block" : "hidden"} bg-teal-900`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="/"
            className="block px-3 py-2 text-emerald-200 hover:bg-teal-800 rounded-md transition-colors"
          >
            Home
          </a>
          <a
            href="/about"
            className="block px-3 py-2 text-emerald-200 hover:bg-teal-800 rounded-md transition-colors"
          >
            About
          </a>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex justify-between items-center w-full px-3 py-2 text-emerald-200 hover:bg-teal-800 rounded-md transition-colors"
            >
              Branches
              <ChevronDown
                className={`w-4 h-4 transform transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
              />
            </button>
            {isDropdownOpen && (
              <div className="pl-4">
                {branches.map((branch) => (
                  <a
                    key={branch}
                    href={`/branch/${branch.toLowerCase()}`}
                    className="block px-3 py-2 text-emerald-200 hover:bg-teal-800 rounded-md transition-colors"
                  >
                    {branch}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a
            href="/news"
            className="block px-3 py-2 text-emerald-200 hover:bg-teal-800 rounded-md transition-colors"
          >
            News
          </a>
          <button className="w-full text-left px-3 py-2 bg-emerald-200 text-teal-950 rounded-md hover:bg-emerald-300 transition-colors">
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
