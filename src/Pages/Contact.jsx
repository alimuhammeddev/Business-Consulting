import React from "react";
import Header from "../Header";
import { contactus } from "../assets";
import { Mail, PhoneCall } from "lucide-react";
import Footer from "../Footer";

const Contact = () => {
  return (
    <section className="relative w-full">
      <div className="absolute top-0 left-0 w-full z-[999]">
        <Header />
      </div>

      <div className="relative w-full">
        <div className="relative w-full">
          <img
            src={contactus}
            alt="Header Background"
            className="w-full lg:h-auto h-96 max-h-[500px] object-cover z-0"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-1 pointer-events-none" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center z-20 p-4">
          <h1 className="text-2xl md:text-6xl font-bold text-white mt-28">
            Contact Us
          </h1>
        </div>
      </div>

      <div>
        <div className="mt-8 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 p-5">
          <div>
            <h1 className="bg-[#176fb9] w-fit p-2 text-white lg:text-xl rounded-lg">
              Contact Us
            </h1>
            <h2 className="lg:text-3xl text-xl font-bold mt-3">
              Get In Touch. Stay Informed.
            </h2>
            <h3 className="text-gray-500 mt-3 lg:text-lg text-base">
              Get the financial analysis and reporting that moves your business
              ahead of the competition. Our independent team prioritizes timely
              and accurate financials while advising you on smart business
              decisions. We specialize in LLCs and partnerships for the
              following clients:
            </h3>
            <ul className="list-disc mt-3 ml-5 lg:text-lg text-base text-gray-500">
              <li>Entertainers and Influencers</li>
              <li>Real Estate Agents/Investors</li>
              <li>Manufacturers</li>
              <li>Life Coaches</li>
              <li>Attorneys</li>
            </ul>
            <div className="flex items-center gap-4 mt-5">
              <PhoneCall
                className="text-white bg-[#176fb9] p-2 rounded-full"
                size={40}
              />
              <div>
                <h1 className="lg:text-xl text-base font-medium mt-">Phone</h1>
                <p className="text-gray-700">567 425 7730</p>
              </div>
            </div>
            <div className="flex items-center gap-4 mt-5">
              <Mail
                className="text-white bg-[#176fb9] p-2 rounded-full"
                size={40}
              />
              <div>
                <h1 className="lg:text-xl text-base font-medium mt-">Email</h1>
                <p className="text-gray-700">info@avsbconsulting.com</p>
              </div>
            </div>
          </div>

          <div>
            <form className="flex flex-col gap-4 max-w-lg justify-center mx-auto">
              <h1 className="text-gray-500 lg:text-lg">
                Fill out the form below and we will contact you as soon as
                possible!
              </h1>
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-600 mb-1">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 border-gray-400 border"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 border-gray-400 border"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="phone-number" className="text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  id="phone-number"
                  type="text"
                  placeholder="Enter your phone number"
                  className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 border-gray-400 border"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="message" className="text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Enter your message"
                  className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 border-gray-400 border"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#176FB9] text-white font-semibold py-2 rounded-full transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <Footer />
      </div>
    </section>
  );
};

export default Contact;
