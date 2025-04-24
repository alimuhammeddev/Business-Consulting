import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { logo } from './assets'

const Header = () => {
  const [open, setOpen] = useState(false)
  const toggleMenu = () => setOpen(!open)

  const navLinks = ['Industries', 'BookKeeping', 'Tax Services', 'Business Managment', 'Resources']

  return (
    <header className="bg-white shadow-md fixed w-full z-[999]">
      <div className="max-w-7xl mx-auto px-4 py-3 relative flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={logo} alt="Logo" className="w-16" />
        </div>

        {/* Desktop Nav - centered */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 text-gray-600 font-medium">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={`#${link.toLowerCase()}`}
              className="hover:text-[#176FB9] transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Contact Us Button */}
        <div className="hidden md:flex ml-8">
          <a
            href="#contact-us"
            className="bg-[#176FB9] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#0f5b8c] transition-colors"
          >
            Contact Us
          </a>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700">
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-screen w-screen bg-white z-40 shadow-md transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'} md:hidden`}
      >
        <div className="px-4 py-4 flex justify-between items-center border-b">
          {/* Logo */}
          <span className="text-center">
            <img src={logo} alt="Logo" className="w-16" />
          </span>
          <button onClick={toggleMenu}>
            <X size={24} className="text-gray-700" />
          </button>
        </div>
        <nav className="flex flex-col px-6 py-6 space-y-6 text-lg text-gray-600 font-medium">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={`#${link.toLowerCase()}`}
              className="hover:text-[#176FB9] transition-colors"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Contact Us Button in Mobile */}
        <div className="px-6 py-4">
          <a
            href="#contact-us"
            className="bg-[#176FB9] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#0f5b8c] transition-colors"
            onClick={() => setOpen(false)}
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  )
}

export default Header