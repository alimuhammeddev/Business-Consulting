import { Instagram, Linkedin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#176fb9] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">
            AVS Consulting
          </h2>
          <p className="text-white">
            We offer comprehensive, fully-managed business management services,
            empowering entertainers, founders, and entrepreneurs to make
            informed decisions for long-term growth.
          </p>
          <div className="flex space-x-3 mb-4 mt-5 items-center">
            <a
              href="#"
              className="flex items-center space-x-2 hover:text-gray-300"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 hover:text-gray-300"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        {/* Links and Newsletter */}
        <div>
          <h3 className="text-lg font-medium mb-2">Newsletter</h3>
          <form className="flex flex-col sm:flex-row items-start sm:items-center">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full sm:w-auto px-4 py-2 rounded-md text-black mb-2 sm:mb-0 sm:mr-2"
            />
            <button className="bg-gray-600 px-4 py-2 rounded-md lg:w-fit w-full">
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-white mb-2">567 425 7730</p>
          <p className="text-white mb-2">avsconsulting@gmail.com</p>
          <p className="text-white">
            815 Superior Ave. East Cleveland, OH 44114
          </p>
        </div>
      </div>

      <div className="border-t border-white mt-8 pt-6 text-center text-white text-sm">
        © 2018 Business Consulting. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
