import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold text-blue-600">
            <Link to="/">ORCA IT</Link>
          </h1>

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

          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium">About</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</Link>
          </nav>
        </div>

        <div
          className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden
            ${menuOpen 
              ? 'max-h-screen opacity-100 visible' 
              : 'max-h-0 opacity-0 invisible'
            }
          `}
        >
          <div className="flex flex-col space-y-2 py-2">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium block py-2 px-4 rounded hover:bg-gray-100 transition-colors" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium block py-2 px-4 rounded hover:bg-gray-100 transition-colors" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium block py-2 px-4 rounded hover:bg-gray-100 transition-colors" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        </div>
      </div>
    </header>
  );
}
