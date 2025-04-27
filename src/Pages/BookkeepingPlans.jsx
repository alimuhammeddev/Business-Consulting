import React from "react";
import Header from "../Header";
import { book1, book2, book3, bookkeepingplans } from "../assets";
import Footer from "../Footer";

const BookkeepingPlans = () => {
  return (
    <section className="relative w-full">
      <div className="absolute top-0 left-0 w-full z-[999]">
        <Header />
      </div>

      <div className="relative w-full">
        <div className="relative w-full">
          <img
            src={bookkeepingplans}
            alt="Header Background"
            className="w-full lg:h-auto h-96 max-h-[500px] object-cover z-0"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-1 pointer-events-none" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center z-20 p-4">
          <h1 className="text-2xl md:text-6xl font-bold text-white mt-28">
            Bookkeeping Plans
          </h1>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="p-5">
          <h1 className="bg-[#176FB9] w-fit p-2 rounded-lg font-normal text-white justify-center mx-auto lg:mt-16 mt-7">
            Our Bookkeeping Services
          </h1>
          <h2 className="lg:text-4xl text-2xl font-medium text-center mt-3">
            Driving Your Business Forward
          </h2>
          <p className="text-center text-gray-500 lg:text-xl text-lg mt-2">
            Choose the monthly bookkeeping service plan that fits your size of
            business and unique industry requirements.{" "}
            <br className="lg:block hidden" /> We focus on law firms,
            manufacturers, life coaches, real estate developers, entertainers
            and influencers.
          </p>
        </div>

        <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto mt-5 lg:p-0 p-5">
          <div>
            <a href="#" className="block">
              <img
                alt=""
                src={book1}
                className="h-64 w-full object-cover sm:h-80 lg:h-96"
              />

              <div className="bg-white p-4 w-full lg:h-44 h-52">
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                  Monthly Bookkeeping
                </h3>

                <p className="mt-2 max-w-sm text-gray-500 text-lg">
                  Our monthly bookkeeping service provides you with regular,
                  up-to-date financial insights to help you make informed
                  decisions about informal decisions.
                </p>
              </div>
            </a>
          </div>

          <div>
            <a href="#" className="block">
              <img
                alt=""
                src={book2}
                className="h-64 w-full object-cover sm:h-80 lg:h-96"
              />

              <div className="bg-white p-4 w-full h-44">
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                  Catch-Up Bookkeeping
                </h3>

                <p className="mt-2 max-w-sm text-gray-500 text-lg">
                  Is your financial record-keeping in disarray? Don't worry;
                  we've got you covered with our catch-up bookkeeping service.
                </p>
              </div>
            </a>
          </div>

          <div>
            <a href="#" className="block">
              <img
                alt=""
                src={book3}
                className="h-64 w-full object-cover sm:h-80 lg:h-96"
              />

              <div className="bg-white p-4 w-full h-44">
                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                  Quarterly Bookkeeping
                </h3>

                <p className="mt-2 max-w-sm text-gray-500 text-lg">
                  Our quarterly bookkeeping service offers a balanced approach,
                  providing you with regular financial updates without regular
                  financial updates.
                </p>
              </div>
            </a>
          </div>
          <br />
          <br />
        </div>
      </div>

      <div className="bg-gray-500 p-10">
        <h1 className="text-white text-2xl font-medium text-center mb-6">
          Contact Us For More Information
        </h1>
        <form className="flex flex-col gap-4 max-w-lg justify-center mx-auto">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-white mb-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-white mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="text-white mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Enter your message"
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
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

      <div>
        <Footer />
      </div>
    </section>
  );
};

export default BookkeepingPlans;
