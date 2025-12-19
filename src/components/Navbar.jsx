import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icons from "../assets/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const location = useLocation();

  // useEffect(() => {
  //   setIsOpen(false);
  // }, [location]);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold text-emerald-900 tracking-tight"
            >
              ABIOLA
              <span className="text-emerald-600 font-light italic">Events</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-emerald-700 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-gray-600 hover:text-emerald-700 font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-emerald-700 font-medium transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-emerald-700 font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-emerald-700 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-emerald-800 transition-all shadow-md active:scale-95"
            >
              Consult Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-600 hover:text-emerald-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <Icons.Close /> : <Icons.Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute w-full bg-white border-b shadow-lg transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3">
          <Link
            to="/"
            className="block px-3 py-4 text-base font-medium text-gray-700 border-b border-gray-50"
          >
            Home
          </Link>
          <Link
            to="/services"
            className="block px-3 py-4 text-base font-medium text-gray-700 border-b border-gray-50"
          >
            Services
          </Link>
          <Link
            to="/about"
            className="block px-3 py-4 text-base font-medium text-gray-700 border-b border-gray-50"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block px-3 py-4 text-base font-medium text-gray-700"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
