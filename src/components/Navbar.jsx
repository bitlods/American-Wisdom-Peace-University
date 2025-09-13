import React, { useState } from "react";
import { Menu, X, Home,User,Image, Mail, Award, Drama} from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { label: "Home", href: "#home", icon: Home },
    { label: "About", href: "#about", icon: User  },
    { label: "Talents", href: "#talents", icon: Drama },
    { label: "Awards", href: "#awards", icon: Award },
    { label: "Gallery", href: "#gallery", icon: Image },
    { label: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <nav className="fixed w-full bg-white/50 backdrop-blur-md z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-3xl font-extrabold text-indigo-600">
         <img src="https://asiainternationalculture.org/wp-content/uploads/2023/04/logo-png-130x110.png" width="80" height="auto" />

        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-gray-800 font-semibold text-lg">
          {navLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <li key={index} className="flex items-center gap-2">
                <Icon size={18} className="text-indigo-600" />
                <a
                  href={link.href}
                  className="
                    relative
                    hover:text-indigo-600
                    after:absolute
                    after:bottom-0
                    after:right-0
                    after:h-[2px]
                    after:w-full
                    after:origin-right
                    after:scale-x-0
                    after:bg-indigo-600
                    after:transition-transform
                    after:duration-300
                    hover:after:scale-x-100
                    px-1
                  "
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-800" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-6 font-medium text-lg">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <li key={index} className="flex items-center gap-2">
                  <Icon size={18} className="text-indigo-600" />
                  <a
                    href={link.href}
                    className="
                      relative
                      hover:text-indigo-600
                      after:absolute
                      after:bottom-0
                      after:right-0
                      after:h-[2px]
                      after:w-full
                      after:origin-right
                      after:scale-x-0
                      after:bg-indigo-600
                      after:transition-transform
                      after:duration-300
                      hover:after:scale-x-100
                      px-1
                    "
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
