import { Link } from "react-router-dom";
import { useState } from "react";
import { FaFacebook, FaBars, FaTimes } from "react-icons/fa";
import schoolLogo from "../assets/school-logo.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-purple-800 text-white px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" onClick={closeMenu} className="flex items-center gap-2">
          <img
            src={schoolLogo}
            alt="School Logo"
            className="h-10 w-10 rounded-full"
          />
          <span className="text-xl font-bold">Namanyane</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-lg items-center font-semibold">
          <li>
            <Link
              to="/"
              className="hover:bg-yellow-400 hover:text-black px-4 py-2 rounded-full transition"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:bg-yellow-400 hover:text-black px-4 py-2 rounded-full transition"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/leadership"
              className="hover:bg-yellow-400 hover:text-black px-4 py-2 rounded-full transition"
              onClick={closeMenu}
            >
              Leadership
            </Link>
          </li>
          <li>
            <Link
              to="/staff"
              className="hover:bg-yellow-400 hover:text-black px-4 py-2 rounded-full transition"
              onClick={closeMenu}
            >
              Staff
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className="hover:bg-yellow-400 hover:text-black px-4 py-2 rounded-full transition"
              onClick={closeMenu}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/resources"
              className="hover:bg-yellow-400 hover:text-black px-4 py-2 rounded-full transition"
              onClick={closeMenu}
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:bg-yellow-400 hover:text-black px-4 py-2 rounded-full transition"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
          <li>
            <a
              href="https://www.facebook.com/share/1ArA4QSj6n/?mibextid=qi2Omg"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook size={24} className="hover:text-yellow-300" />
            </a>
          </li>
        </ul>

        {/* Mobile Icon */}
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-4 pt-4 pb-6 bg-purple-700 text-lg font-semibold">
          <Link
            to="/"
            onClick={closeMenu}
            className="hover:bg-yellow-400 hover:text-black px-4 py-2 rounded-full transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className="hover:bg-yellow-400 hover:text-black px-4 py-2 rounded-full transition"
          >
            About
          </Link>
          <Link
            to="/leadership"
            onClick={closeMenu}
            className="hover:bg-yellow-400 hover:text-black px-4 py-2 rounded-full transition"
          >
            Leadership
          </Link>
          <Link
            to="/staff"
            onClick={closeMenu}
            className="hover:bg-yellow-400 hover:text-black px-4 py-2 rounded-full transition"
          >
            Staff
          </Link>
          <Link
            to="/gallery"
            onClick={closeMenu}
            className="hover:bg-yellow-400 hover:text-black px-4 py-2 rounded-full transition"
          >
            Gallery
          </Link>
          <Link
            to="/resources"
            onClick={closeMenu}
            className="hover:bg-yellow-400 hover:text-black px-4 py-2 rounded-full transition"
          >
            Resources
          </Link>
          <Link
            to="/contact"
            onClick={closeMenu}
            className="hover:bg-yellow-400 hover:text-black px-4 py-2 rounded-full transition"
          >
            Contact
          </Link>
          <a
            href="https://www.facebook.com/YOUR_PAGE"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2"
          >
            <FaFacebook size={24} className="hover:text-yellow-300" />
            Facebook
          </a>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
