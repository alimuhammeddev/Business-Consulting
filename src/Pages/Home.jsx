import React, { useState } from "react";
import Header from "../Header";
import { choose, header1 } from "../assets";
import {
  BadgeDollarSign,
  BarChart3,
  BookOpen,
  ChevronDown,
} from "lucide-react";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const [openItem, setOpenItem] = useState(null);

  const accordionItems = [
    {
      title: "Strategic Business Consulting",
      content:
        "Our team of expert consultants brings decades of industry experience to help you develop and implement effective strategies that align with your business goals and market conditions.",
    },
    {
      title: "Customized Solutions",
      content:
        "We understand that every business is unique. Our approach is tailored to your specific needs, challenges, and objectives, ensuring that you receive solutions that work specifically for your organization.",
    },
    {
      title: "Measurable Results",
      content:
        "We focus on delivering tangible outcomes with clear metrics for success. Our proven methodologies have helped businesses increase efficiency, reduce costs, and drive sustainable growth.",
    },
    {
      title: "Ongoing Support",
      content:
        "Our relationship doesn't end with project completion. We provide continuous guidance and support to ensure long-term success and help you navigate changing business landscapes.",
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
            src={header1}
            alt="Header Background"
            className="w-full lg:h-auto h-96 max-h-[500px] object-cover z-0"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-1 pointer-events-none" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center z-20 p-4">
          <h1 className="text-2xl md:text-6xl font-bold text-[#176FB9] mt-28">
            Small Business <br /> Reporting Solutions
            <p className="text-base md:text-2xl text-white font-normal lg:mt-5">
              Entertainers, founders and entrepreneurs like you choose AVS{" "}
              <br className="lg:block hidden" /> Consulting because we
              understand your world and the complexity of{" "}
              <br className="lg:block hidden" /> small business reporting in
              Ohio and California. This is where knowledge meets{" "}
              <br className="lg:block hidden" /> convenience to drive business
              goals while mitigating your risk.
            </p>
          </h1>
        </div>
      </div>

      <div className="bg-[#176FB9] w-full lg:p-12 p-3">
        <div className="flex lg:flex-row items-center justify-center lg:gap-28 h-full">
          <div className="text-center flex flex-col items-center justify-center h-full text-white">
            <BarChart3 className="lg:w-10 lg:h-10 mb-1" />
            <h1 className="lg:text-2xl font-medium">
              Small Business Reporting
            </h1>
          </div>
          <div className="text-center flex flex-col items-center justify-center h-full text-white">
            <BookOpen className="lg:w-10 lg:h-10 mb-1" />
            <h1 className="lg:text-2xl font-medium">Dedicated Bookkeeping</h1>
          </div>
          <div className="text-center flex flex-col items-center justify-center h-full text-white">
            <BadgeDollarSign className="lg:w-10 lg:h-10 mb-1" />
            <h1 className="lg:text-2xl font-medium">Skilled Tax Services</h1>
          </div>
        </div>
      </div>

      <div className="lg:p-28 p-4 flex lg:flex-row flex-col lg:justify-center gap-10">
        <div>
          <img src={choose} alt="" className="rounded-3xl" />
        </div>
        <div>
          <h1 className="bg-[#176fb9] w-fit p-2 text-white lg:text-xl rounded-lg">
            Why Choose Us
          </h1>
          <h2 className="lg:text-3xl text-xl font-bold mt-3">
            Expertise, <br className="lg:block hidden" /> Personalized, &{" "}
            <br className="lg:block hidden" /> Excellence
          </h2>
          <p className="text-gray-400">
            At AVS Consulting, we prioritize trust,{" "}
            <br className="lg:block hidden" /> transparency, and open
            communication, offering personalized{" "}
            <br className="lg:block hidden" /> attention and proactive support
            for your business
          </p>

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

      <div className="bg-[#176FB9] w-full lg:p-16 p-10 mb-10">
        <h1 className="text-center font-bold lg:text-4xl text-2xl text-white">
          Ready to Transform Your Business?
        </h1>
        <div className="justify-center text-center mt-7">
          <Link
            to="/contact-us"
            className="bg-white text-[#176fb9] px-10 py-3 rounded-full shadow-md transition-colors font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className="bg-gray-100 lg:p-20 p-5 -mt-10">
        <div>
          <h1 className="lg:text-4xl text-2xl font-semibold text-center mt-7">
            The Proof Is in Our Clients' Words
          </h1>
          <p className="text-gray-600 lg:text-lg text-center">
            Client testimonials speak volumes about our expertise,{" "}
            <br className="lg:block hidden" /> dedication, and the results we
            deliver
          </p>
        </div>

        <div className="flex lg:flex-row flex-col justify-center mx-auto mt-5">
          {/* Testimonial 1 */}
          <div className="max-w-md mx-auto mt-5 p-6 bg-white rounded-2xl shadow-md text-center">
            <div className="flex justify-center mb-4 text-3xl text-white bg-[#176fb9] rounded-full w-12 h-12 items-center mx-auto">
              <span>&ldquo;</span>
            </div>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              Working with this team was a game-changer for our business. Their
              dedication, attention to detail, and innovative approach helped us
              reach our goals faster than expected.
            </p>
            <div className="flex justify-center text-yellow-500 text-xl space-x-1 mb-2">
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9734;</span>
            </div>
            <div className="mt-2">
              <h3 className="font-semibold">Jane Doe</h3>
              <p className="text-sm text-gray-500">CEO, BrightTech</p>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="max-w-md mx-auto mt-5 p-6 bg-white rounded-2xl shadow-md text-center">
            <div className="flex justify-center mb-4 text-3xl text-white bg-[#176fb9] rounded-full w-12 h-12 items-center mx-auto">
              <span>&ldquo;</span>
            </div>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              The service was exceptional from start to finish. They took the
              time to understand our vision and delivered beyond our
              expectations.
            </p>
            <div className="flex justify-center text-yellow-500 text-xl space-x-1 mb-2">
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
            </div>
            <div className="mt-2">
              <h3 className="font-semibold">John Smith</h3>
              <p className="text-sm text-gray-500">Founder, CreativeCore</p>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="max-w-md mx-auto mt-5 p-6 bg-white rounded-2xl shadow-md text-center">
            <div className="flex justify-center mb-4 text-3xl text-white bg-[#176fb9] rounded-full w-12 h-12 items-center mx-auto">
              <span>&ldquo;</span>
            </div>
            <p className="text-gray-700 text-base leading-relaxed mb-4">
              Their professionalism and dedication stood out. The team brought
              our project to life with creativity and precision.
            </p>
            <div className="flex justify-center text-yellow-500 text-xl space-x-1 mb-2">
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9733;</span>
              <span>&#9734;</span>
              <span>&#9734;</span>
            </div>
            <div className="mt-2">
              <h3 className="font-semibold">Sarah Lee</h3>
              <p className="text-sm text-gray-500">
                Marketing Manager, NovaEdge
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:p-10 p-5">
        <div>
          <h1 className="text-center lg:text-4xl text-xl font-semibold">
            Financial Wellness Resources & Tools
          </h1>
          <p className="text-gray-600 lg:text-lg text-center">
            We’ve gathered up a handful of calculators and tools you can use as{" "}
            <br className="lg:block hidden" /> a starting point for your budget,
            return on investments and more.
          </p>
          <div className="justify-center text-center mt-10">
            <Link
              to="/financial-tools"
              className="bg-[#176fb9] text-white px-12 py-3 rounded-full shadow-md transition-colors font-medium"
            >
              View Tools
            </Link>
          </div>
          <div className="justify-center text-center mt-10">
            <Link
              to="/business-management"
              className="bg-gray-600 text-white px-7 py-3 rounded-full shadow-md transition-colors font-medium"
            >
              See Business Management Solutions
            </Link>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </section>
  );
};

export default Home;
