import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // For hamburger and close icons

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo or Brand */}
        <Link to="/" className="text-lg font-semibold">
          My App
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/register" className="hover:underline">Register</Link>
        </nav>

        {/* Mobile Hamburger Icon */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-blue-700 text-white px-4 pb-4 space-y-2">
          <Link to="/" onClick={toggleMenu} className="block hover:underline">Home</Link>
          <Link to="/login" onClick={toggleMenu} className="block hover:underline">Login</Link>
          <Link to="/register" onClick={toggleMenu} className="block hover:underline">Register</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
