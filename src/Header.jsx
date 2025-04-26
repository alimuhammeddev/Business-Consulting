import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { logo } from "./assets";
import { Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const toggleMenu = () => setOpen(!open);

  const navLinks = [
    {
      name: "Industries",
      hasDropdown: true,
      dropdownLinks: [
        { name: "Real Estate", url: "/real-estate" },
        { name: "Entertainers", url: "/entertainment" },
        { name: "Influencers", url: "/influencers" },
      ],
    },
    {
      name: "BookKeeping",
      hasDropdown: true,
      dropdownLinks: [
        { name: "Bookkeeping Overview", url: "/bookkeeping-overview" },
        { name: "Bookkeeping plans", url: "/bookkeeping-plans" },
      ],
    },
    {
      name: "Tax Services",
      hasDropdown: true,
      dropdownLinks: [
        { name: "Individual Tax Services", url: "/individual-tax" },
        { name: "Business Tax Services", url: "/business-tax" },
      ],
    },
    {
      name: "Business Managment",
      hasDropdown: false,
      url: "/business-management",
    },
    {
      name: "Resources",
      hasDropdown: true,
      dropdownLinks: [
        { name: "Finanacial Tools and Calculators", url: "#resources-option1" },
      ],
    },
  ];

  const handleLinkClick = (linkName) => {
    setActiveDropdown(activeDropdown === linkName ? null : linkName); // Toggle dropdown visibility
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-[999]">
      <div className="max-w-7xl mx-auto px-4 py-3 relative flex justify-between items-center">
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-16" />
          </Link>
        </div>

        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 text-gray-600 font-medium">
          {navLinks.map((link, i) => (
            <div key={i} className="relative">
              {link.hasDropdown ? (
                <a
                  href={`#${link.name.toLowerCase()}`}
                  className="hover:text-[#176FB9] transition-colors flex items-center text-sm"
                  onClick={() => handleLinkClick(link.name)}
                >
                  {link.name}
                  <ChevronDown size={16} className="inline-block ml-1" />
                </a>
              ) : (
                <Link
                  to={link.url}
                  className="hover:text-[#176FB9] transition-colors flex items-center text-sm"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              )}

              {link.hasDropdown && activeDropdown === link.name && (
                <div className="absolute left-0 mt-2 space-y-7 pl-4 border border-gray-100 bg-gray-50 p-3 w-48 z-50">
                  {link.dropdownLinks.map((dropdownLink) => (
                    <Link
                      key={dropdownLink.name}
                      to={dropdownLink.url}
                      className="block text-gray-600 hover:text-[#176FB9]"
                      onClick={() => setOpen(false)}
                    >
                      {dropdownLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:flex ml-8">
          <a
            href="#contact-us"
            className="bg-[#176FB9] text-white text-sm px-6 py-2 rounded-lg shadow-md hover:bg-[#0f5b8c] transition-colors"
          >
            Contact Us
          </a>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            <Menu size={28} />
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-screen w-screen bg-white z-40 shadow-md transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="px-4 py-4 flex justify-between items-center border-b">
          <span className="text-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="w-16" />
            </Link>
          </span>
          <button onClick={toggleMenu}>
            <X size={24} className="text-gray-700" />
          </button>
        </div>
        <nav className="flex flex-col px-6 py-6 space-y-6 text-lg text-gray-600 font-medium">
          {navLinks.map((link, i) => (
            <div key={i}>
              {link.hasDropdown ? (
                <a
                  href={`#${link.name.toLowerCase()}`}
                  className="hover:text-[#176FB9] transition-colors flex items-center text-sm"
                  onClick={() => handleLinkClick(link.name)}
                >
                  {link.name}
                  <ChevronDown size={16} className="inline-block ml-1" />
                </a>
              ) : (
                <Link
                  to={link.url}
                  className="hover:text-[#176FB9] transition-colors flex items-center text-sm"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              )}

              {link.hasDropdown && activeDropdown === link.name && (
                <div className="mt-2 space-y-7 pl-4 border border-gray-100 bg-gray-50 p-3">
                  {link.dropdownLinks.map((dropdownLink) => (
                    <Link
                      key={dropdownLink.name}
                      to={dropdownLink.url}
                      className="block text-gray-600 hover:text-[#176FB9]"
                      onClick={() => setOpen(false)}
                    >
                      {dropdownLink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
