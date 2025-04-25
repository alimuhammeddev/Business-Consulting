import React from "react";
import Header from "../Header";
import { influencer, social } from "../assets";

const Influencers = () => {
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
          <p className="lg:text-lg mt-4 text-gray-600">
            Welcome to AVS Consulting, where we specialize{" "}
            <br className="lg:block hidden" /> in providing tailored bookkeeping
            services specifically designed for{" "}
            <br className="lg:block hidden" />
            the real estate industry. Managing properties—whether residential,{" "}
            <br className="lg:block hidden" />
            commercial, or industrial—requires precise financial tracking and{" "}
            <br className="lg:block hidden" />
            expert handling of complex transactions. Our team is dedicated to{" "}
            <br className="lg:block hidden" />
            helping you maintain control over your financial landscape, ensuring{" "}
            <br className="lg:block hidden" />
            your business runs smoothly and efficiently.
          </p>
        </div>
        <div>
          <img src={social} alt="" width={700} className="rounded-3xl" />
        </div>
      </div>
    </section>
  );
};

export default Influencers;
