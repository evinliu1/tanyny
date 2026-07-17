import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/photos", label: "Photos" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="py-6 bg-stone-100">
      <ul className="gap-20 justify-center hidden md:flex">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to}>{link.label}</Link>
          </li>
        ))}
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
            {links.map((link) => (
              <li
                className="w-full text-center flex-1 flex items-center justify-center"
                key={link.to}
              >
                <Link to={link.to} onClick={() => setIsOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
