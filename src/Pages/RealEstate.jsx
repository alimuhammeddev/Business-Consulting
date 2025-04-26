import React, { useState } from "react";
import Header from "../Header";
import { realestate, realestate1 } from "../assets";
import { ChevronDown } from "lucide-react";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const RealEstate = () => {
  const [openItem, setOpenItem] = useState(null);

  const accordionItems = [
    {
      title: "Real Estate Expertise",
      content:
        "Leverage our deep understanding of the real estate market to make informed investment decisions. From property evaluation to strategic planning, we guide you through every step of your real estate journey.",
    },
    {
      title: "Accurate Financial Tracking",
      content:
        "Gain clarity and control over your finances with real-time tracking, precise reporting, and tailored financial analysis. We ensure your records are always accurate and audit-ready.",
    },
    {
      title: "Customized Solutions",
      content:
        "No two businesses are alike—our team designs solutions around your unique goals, challenges, and operations to drive measurable improvements and long-term success.",
    },
    {
      title: "Timely Reporting",
      content:
        "Make smarter decisions with up-to-date, accurate reporting delivered when you need it most. We ensure you’re always informed with clear, actionable insights.",
    },
    {
      title: "Tax Preparedness",
      content:
        "Stay ahead of tax deadlines with proactive planning and compliance support. We help you prepare accurate documentation, minimize liabilities, and navigate complex tax regulations with confidence.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="relative w-full">
      <div className="absolute top-0 left-0 w-full z-[999]">
        <Header />
      </div>

      <div className="relative w-full">
        <div className="relative w-full">
          <img
            src={realestate}
            alt="Header Background"
            className="w-full lg:h-auto h-96 max-h-[500px] object-cover z-0"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-1 pointer-events-none" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center z-20 p-4">
          <h1 className="text-2xl md:text-6xl font-bold text-white mt-28">
            Bookkeeping Services <br className="" /> for Real Estate
          </h1>
        </div>
      </div>

      <div className="flex items-center justify-center mx-auto flex-col lg:flex-row gap-10 max-w-7xl lg:mt-24 mt-5 lg:p-0 p-5">
        <div>
          <h1 className="lg:text-4xl text-2xl font-medium">
            Streamline Your Real Estate <br /> Finances with Expert <br />{" "}
            Bookkeeping
          </h1>
          <p className="lg:text-lg mt-4 text-gray-600 max-w-prose">
            Welcome to AVS Consulting, where we specialize in providing tailored
            bookkeeping services specifically designed for the real estate
            industry. Managing properties—whether residential, commercial, or
            industrial—requires precise financial tracking and expert handling
            of complex transactions. Our team is dedicated to helping you
            maintain control over your financial landscape, ensuring your
            business runs smoothly and efficiently.
          </p>
        </div>
        <div>
          <img src={realestate1} alt="" width={700} className="rounded-3xl" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto lg:p-0 p-5">
        <h1 className="lg:text-2xl font-medium">Why AVS Consulting</h1>

        <div className="mt-8 w-full max-w-7xl">
          {accordionItems.map((item, index) => (
            <div
              key={index}
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-white hover:bg-[#176fb9] hover:text-white focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className="font-medium">{item.title}</span>
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    openItem === index ? "transform rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openItem === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-4 text-gray-600">{item.content}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="justify-center text-center mt-10">
          <Link
            to="/bookkeeping-plans"
            className="bg-[#176fb9] text-white px-7 py-3 rounded-full shadow-md transition-colors font-medium"
          >
            View Our Bookkeeping Plans
          </Link>
        </div>
      </div>

      <div className="bg-gray-500 w-full lg:p-16 p-10 lg:mt-16 mt-7">
        <h1 className="text-center font-bold lg:text-4xl text-2xl text-white">
          Get Started Today!
        </h1>
        <p className="text-center mt-2 text-white">
          At AVS Consulting, we are committed to helping you achieve financial
          clarity and success in your real <br className="lg:block hidden" />{" "}
          estate endeavors. Let us take the burden of bookkeeping off your
          shoulders so you can focus on what you do best—growing your business.
        </p>
        <div className="justify-center text-center mt-7">
          <a
            href="#contact-us"
            className="bg-white text-[#176fb9] px-10 py-3 rounded-full shadow-md transition-colors font-medium"
          >
            Contact Us
          </a>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </section>
  );
};

export default RealEstate;
