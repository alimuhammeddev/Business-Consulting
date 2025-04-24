import React from "react";
import Header from "../Header";
import { header1 } from "../assets";
import { BadgeDollarSign, BarChart3, BookOpen, Scale } from "lucide-react";

const Home = () => {
  return (
    <section className="relative w-full">
      <div className="absolute top-0 left-0 w-full z-[999]">
        <Header />
      </div>

      <div className="relative w-full">
        {/* Image Container with shadow */}
        <div className="relative w-full">
          {/* Image with animation */}
          <img
            src={header1}
            alt="Header Background"
            className="w-full lg:h-auto h-96 max-h-[500px] object-cover z-0"
          />

          {/* Shadow Overlay applied only to image */}
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-1 pointer-events-none" />
        </div>

        {/* Text content on top */}
        <div className="absolute inset-0 flex items-center justify-center text-center z-20 p-4">
          <h1 className="text-2xl md:text-6xl font-bold text-[#176FB9] mt-28">
            Small Business <br /> Reporting Solutions
            <p className="text-base md:text-2xl text-white font-normal lg:mt-5">
              Entertainers, founders and entrepreneurs like you choose Business{" "}
              <br className="lg:block hidden" /> Consulting because we
              understand your world and the complexity of{" "}
              <br className="lg:block hidden" /> small business reporting in
              California. This is where knowledge meets{" "}
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
            <h1 className="lg:text-2xl font-medium">Small Business Reporting</h1>
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
    </section>
  );
};

export default Home;
