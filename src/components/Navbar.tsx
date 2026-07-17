import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-6 bg-stone-100">
      <ul className="gap-12 justify-center hidden md:flex">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/photos">Photos</Link>
        </li>
      </ul>
      <button
        className="md:hidden fixed top-3 right-3 z-10"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X /> : <Menu />}
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-stone-200 z-0">
          <ul className="h-full flex flex-col text-3xl items-center divide-y">
            <li className="w-full text-center flex-1 flex items-center justify-center">
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="w-full text-center flex-1 flex items-center justify-center">
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li className="w-full text-center flex-1 flex items-center justify-center">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
            <li className="w-full text-center flex-1 flex items-center justify-center">
              <Link to="/photos" onClick={() => setIsOpen(false)}>
                Photos
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
