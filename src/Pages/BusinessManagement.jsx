import React, { useState } from "react";
import Header from "../Header";
import { businessmanagement, businessmgt } from "../assets";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const BusinessManagement = () => {
  const [openItem, setOpenItem] = useState(null);

  const accordionItems = [
    {
      title: "Comprehensive Business Strategy",
      content:
        "We collaborate with you to build robust business strategies that cover market positioning, competitive analysis, operational efficiency, and long-term growth planning — ensuring your business thrives in a rapidly evolving landscape.",
    },
    {
      title: "Business Entity Setup and Compliance",
      content:
        "Our experts guide you through selecting the right business structure, handling registrations, securing licenses, and ensuring full legal compliance, so you can confidently lay a solid foundation for your venture.",
    },
    {
      title: "Financial Planning Expertise",
      content:
        "From budgeting and forecasting to investment strategies and risk management, we provide comprehensive financial planning services to help you achieve your financial goals and sustain profitability.",
    },
    {
      title: "Monitoring Regulatory Changes",
      content:
        "We keep you informed about the latest regulatory developments impacting your industry, helping you adapt quickly, avoid penalties, and maintain full compliance with evolving local and global requirements.",
    },
    {
      title: "Payroll Systems and Administration",
      content:
        "Our payroll solutions streamline salary processing, tax filings, benefits management, and compliance reporting — saving you time, minimizing errors, and ensuring your employees are paid accurately and on time.",
    },
    {
      title: "Transparent Partnership Approach",
      content:
        "We believe in clear communication, shared goals, and complete transparency. Our partnership model ensures you are informed at every step, empowering you with the knowledge and insights to drive your business forward.",
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
            src={businessmanagement}
            alt="Header Background"
            className="w-full lg:h-auto h-96 max-h-[500px] object-cover z-0"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-1 pointer-events-none" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center z-20 p-4">
          <h1 className="text-2xl md:text-6xl font-bold text-white mt-28">
            Business Management
          </h1>
        </div>
      </div>

      <div className="flex justify-center mx-auto flex-col lg:flex-row gap-10 max-w-7xl lg:mt-24 mt-5 lg:p-0 p-5">
        <div>
          <img src={businessmgt} alt="" width={750} className="rounded-3xl" />
        </div>
        <div>
          <h1 className="bg-[#176fb9] w-fit p-2 text-white lg:text-xl rounded-lg lg:mt-10">
            About Business Management
          </h1>
          <h2 className="lg:text-4xl text-2xl font-medium mt-2">
            Business Management Services
          </h2>
          <p className="lg:text-lg mt-4 text-gray-600 max-w-prose">
            At AVS Consulting, we specialize in end-to-end business management
            services designed to empower entertainers, founders, influencers and
            entrepreneurs to make informed decisions based on long-term growth.
            Our fully-managed services encompass every aspect of business
            ownership, ensuring comprehensive support and strategic guidance
            every step of the way.
          </p>
        </div>
      </div>

      <div className="max-w-7xl lg:mt-24 mt-5 lg:p-0 p-5 justify-center mx-auto">
        <h1 className="lg:text-4xl text-2xl text-center text-[#176fb9] font-medium">
          What Sets Us Apart
        </h1>

        {/* Update this div */}
        <div className="mt-8 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {accordionItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
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
      </div>

      <div className="bg-gray-500 w-full lg:p-16 p-10 mt-16">
        <h1 className="text-center lg:text-xl text-base text-white">
        Our commitment to transparency means you'll always have a clear understanding of our <br /> processes, recommendations, and the steps we take to help your business succeed.
        </h1>
        <div className="justify-center text-center mt-7">
          <Link
            to="/bookkeeping-overview"
            className="bg-[#176fb9] text-white px-10 py-3 rounded-full shadow-md transition-colors font-medium"
          >
            See Bookkeeping Overview
          </Link>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </section>
  );
};

export default BusinessManagement;
