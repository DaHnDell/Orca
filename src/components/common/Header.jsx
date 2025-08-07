import { Link } from "react-router-dom";
import { useState } from "react";
import HeaderLogo from "../common/HeaderLogo";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-xl sticky top-0 z-50 bg-[#fdfdfd] border-y-4 border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <HeaderLogo />
            <h1 className="font-bold text-sky-800 text-xl font-shadow">O r c a . I T</h1>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/solution" className="text-gray-700 hover:text-blue-600 font-medium font-glow-hover">Solution</Link>
            <Link to="/service" className="text-gray-700 hover:text-blue-600 font-medium font-glow-hover">Service</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium font-glow-hover">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium font-glow-hover">Contact</Link>
          </nav>
        </div>

        <div
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${menuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
            }`}
        >
          <div className="flex flex-col space-y-2 py-2">
            <Link to="/solution" onClick={() => setMenuOpen(false)}>Solution</Link>
            <Link to="/service" onClick={() => setMenuOpen(false)}>Service</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
