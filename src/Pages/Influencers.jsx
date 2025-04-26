import React, { useState } from "react";
import Header from "../Header";
import { influencer, social } from "../assets";
import { ChevronDown } from "lucide-react";
import Footer from "../Footer";

const Influencers = () => {
  const [openItem, setOpenItem] = useState(null);

  const accordionItems = [
    {
      title: "Industry Expertise",
      content:
        "We bring specialized knowledge of social media and the unique financial needs of artists and influencers. Whether it’s contracts, royalties, or platform-specific income, we ensure your finances are handled with precision.",
    },
    {
      title: "Accurate Financial Tracking",
      content:
        "From YouTube and Twitch revenue to Instagram promotions, TikTok payouts, freelance gigs, and sponsorships — we carefully track every income stream so you always know where you stand financially.",
    },
    {
      title: "Customized Solutions",
      content:
        "Influencer life comes with big expenses. From buying production gear to running ad campaigns, we help manage your spending effectively, keeping your goals and budget in mind.",
    },
    {
      title: "Timely Reporting",
      content:
        "Get regular financial summaries that give you a clear picture of your income and spending. Our updates help you stay ahead and make smart decisions for your brand and career.",
    },
    {
      title: "Tax Preparedness",
      content:
        "We’re well-versed in the tax landscape for influencers and independent creators. Our bookkeeping ensures your records are organized year-round, helping you file taxes easily and claim all the deductions you deserve.",
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
            src={influencer}
            alt="Header Background"
            className="w-full lg:h-auto h-96 max-h-[500px] object-cover z-0"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-1 pointer-events-none" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center z-20 p-4">
          <h1 className="text-2xl md:text-6xl font-bold text-white mt-28">
            For Influencers and <br /> Brand Ambassadors
          </h1>
        </div>
      </div>

      <div className="flex items-center justify-center mx-auto flex-col lg:flex-row gap-10 max-w-7xl lg:mt-24 mt-5 lg:p-0 p-5">
        <div>
          <h1 className="lg:text-4xl text-2xl font-medium">
            Elevate Your Influence with <br /> Expert Bookkeeping
          </h1>
          <p className="lg:text-lg mt-4 text-gray-600 max-w-prose">
            AVS Consulting is your trusted partner, providing specialized
            bookkeeping services for
            influencers, brand ambassadors and other free thinkers. The fast-paced world of social media
            demands precise financial oversight and an understanding of the unique
            challenges you face. Our team is here to help you navigate your financial
            landscape, allowing you to focus on your creativity.
          </p>
        </div>
        <div>
          <img src={social} alt="" width={700} className="rounded-3xl" />
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
          <a
            href="#contact-us"
            className="bg-[#176fb9] text-white px-7 py-3 rounded-full shadow-md transition-colors font-medium"
          >
            View Our Bookkeeping Plans
          </a>
        </div>
      </div>

      <div className="bg-gray-500 w-full lg:p-16 p-10 lg:mt-16 mt-7">
        <h1 className="text-center font-bold lg:text-4xl text-2xl text-white">
          Get Started Today!
        </h1>
        <p className="text-center mt-2 text-white">At AVS Consulting, we are committed to helping you achieve financial clarity and success in your real <br className="lg:block hidden"/> estate endeavors. Let us take the burden of bookkeeping off your shoulders so you can focus on what you do best—growing your business.</p>
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

export default Influencers;
