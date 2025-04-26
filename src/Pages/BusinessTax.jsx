import React, { useState } from "react";
import Header from "../Header";
import { business2, business3, businesstax } from "../assets";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const BusinessTax = () => {
  const [openItem, setOpenItem] = useState(null);

  const accordionItems = [
    {
      title: "IRS and State Tax Compliance:",
      content:
        "Stay fully compliant with IRS regulations and state tax laws. Our team ensures your business meets all filing requirements, minimizes risk of penalties, and stays ahead of changing tax rules with proactive support and expert guidance.",
    },
    {
      title: "Tax Planning:",
      content:
        "Strategic tax planning is key to maximizing savings and improving cash flow. We work closely with you to design personalized tax strategies that optimize deductions, credits, and timing of income and expenses to support your long-term financial goals.",
    },
    {
      title: "Tax Advisory Services:",
      content:
        "Gain access to trusted tax advisory services tailored to your business needs. From navigating complex tax issues to advising on mergers, acquisitions, and reorganizations, our experts provide insights that help you make smarter financial decisions and drive growth.",
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
            src={businesstax}
            alt="Header Background"
            className="w-full lg:h-auto h-96 max-h-[500px] object-cover z-0"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-1 pointer-events-none" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center z-20 p-4">
          <h1 className="text-2xl md:text-6xl font-bold text-white mt-28">
            Business Tax Services
          </h1>
        </div>
      </div>

      <div className="flex items-center justify-center mx-auto flex-col lg:flex-row gap-10 max-w-7xl lg:mt-24 mt-5 lg:p-0 p-5">
        <div>
          <h1 className="lg:text-4xl text-2xl font-medium">
            Strategies for LLCs, S Corp, C Corps, and Partnerships
          </h1>
          <p className="lg:text-lg mt-4 text-gray-600 max-w-prose">
            Taxes shouldn’t be a headache for your business. Our business tax
            services take the hassle out of tax season, whether you’re a
            partnership, LLC, S corporation, or C corporation. We’ll help you
            navigate the complexities and ensure you’re taking advantage of
            every opportunity to save. We’ll work with you to develop a tax
            strategy that fits your business model and goals, so you can focus
            on what you do best: running your business. Our team of experts will
            handle everything from tax preparation to planning, ensuring you’re
            compliant and maximizing your deductions. With our help, you can
            rest easy knowing your taxes are in good hands.
          </p>
        </div>
        <div>
          <img src={business2} alt="" width={700} className="rounded-3xl" />
        </div>
      </div>

      <div className="flex justify-center mx-auto flex-col-reverse lg:flex-row gap-10 max-w-7xl lg:mt-24 mt-5 lg:p-0 p-5">
        <div>
          <img src={business3} alt="" className="rounded-3xl" />
        </div>
        <div>
          <h2 className="lg:text-3xl text-xl font-bold mt-3 lg:mt-20">
            Detailed explanation of Business Tax Services:
          </h2>

          <div className="mt-8 w-full max-w-3xl">
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
        </div>
      </div>

      <div className="justify-center text-center mt-16 mb-16">
        <Link to="/individual-tax"

          className="bg-[#176fb9] text-white px-7 py-3 rounded-full shadow-md transition-colors font-medium"
        >
          See Individual Tax Services
        </Link>
      </div>

      <div>
        <Footer />
      </div>
    </section>
  );
};

export default BusinessTax;
