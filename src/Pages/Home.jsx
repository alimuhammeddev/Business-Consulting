import React from "react";
import Header from "../Header";
import { header1 } from "../assets";

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
              Entertainers, founders and entrepreneurs like you choose
              Business <br className="lg:block hidden" /> Consulting because we understand your world
              and the complexity of <br className="lg:block hidden" /> small business reporting in
              California. This is where knowledge meets <br className="lg:block hidden" /> convenience to
              drive business goals while mitigating your risk.
            </p>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Home;