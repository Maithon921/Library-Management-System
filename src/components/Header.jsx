import { Link } from "react-router";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="bg-gray-900 text-white py-4 px-6 md:px-12 flex flex-wrap justify-between items-center">
        {/* Logo / Brand */}
        <h1 className="text-2xl md:text-3xl font-bold">
          📖{" "}
          <span className=" bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Library Hub
          </span>
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex font-semibold space-x-6">
          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link to="/browsebook" className="hover:text-yellow-400 transition">
            Browse Books
          </Link>
          <Link to="/addbook" className="hover:text-yellow-400 transition">
            Add Book
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-500 text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-800 p-4 flex flex-col items-center space-y-4 md:hidden">
            <Link to="/" className="hover:text-yellow-400 transition" onClick={() => setIsOpen(!isOpen)}>
              Home
            </Link>
            <Link to="/browsebook" className="hover:text-yellow-400 transition " onClick={() => setIsOpen(!isOpen)}>
              Browse Books
            </Link>
            <Link to="/addbook" className="hover:text-yellow-400 transition" onClick={() => setIsOpen(!isOpen)}>
              Add Book
            </Link>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
