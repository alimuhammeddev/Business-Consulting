import React from "react";
import Header from "../Header";
import { bookkeepingoverview } from "../assets";
import { BarChart, CreditCard, FileText, LineChart, Settings } from "lucide-react";

const BookkeepingOverview = () => {
  return (
    <section className="relative w-full">
      <div className="absolute top-0 left-0 w-full z-[999]">
        <Header />
      </div>

      <div className="relative w-full">
        <div className="relative w-full">
          <img
            src={bookkeepingoverview}
            alt="Header Background"
            className="w-full lg:h-auto h-96 max-h-[500px] object-cover z-0"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-1 pointer-events-none" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center z-20 p-4">
          <h1 className="text-2xl md:text-6xl font-bold text-white mt-28">
            Bookkeeping for Influencers
          </h1>
        </div>
      </div>

      <div className="lg:mt-16 mt-7 p-5">
        <h1 className="bg-[#176FB9] w-fit p-2 rounded-lg font-normal text-white justify-center mx-auto">
          What We Cover
        </h1>
        <h2 className="lg:text-4xl text-2xl font-medium text-center mt-3">
          Bookkeeping Services
        </h2>
        <p className="text-center text-gray-500 lg:text-xl text-lg mt-2">
          Our monthly bookkeeping service provides you with regular, up-to-date
          financial <br className="lg:block hidden" /> insights to help you make
          informed decisions about your influencer and{" "}
          <br className="lg:block hidden" /> entertainment career.
        </p>

        <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto mt-5">
          <div className="border border-[#176FB9] rounded-lg p-5 flex flex-col gap-5">
            <div className="justfy0-center mx-auto">
              <FileText className="text-[#176FB9] mx-auto" />
              <h1 className="font-semibold">
                Comprehensive Financial Record Keeping
              </h1>
            </div>
          </div>

          <div className="border border-[#176FB9] rounded-lg p-5 flex flex-col gap-5">
            <div className="justfy0-center mx-auto">
              <CreditCard className="text-[#176FB9] mx-auto" />
              <h1 className="font-semibold">
                Bank and Credit Card Reconciliation
              </h1>
            </div>
          </div>

          <div className="border border-[#176FB9] rounded-lg p-5 flex flex-col gap-5">
            <div className="justfy0-center mx-auto">
              <Settings className="text-[#176FB9] mx-auto" />
              <h1 className="font-semibold">
                Chart of Accounts Setup and Maintenance
              </h1>
            </div>
          </div>

          <div className="border border-[#176FB9] rounded-lg p-5 flex flex-col gap-5">
            <div className="justfy0-center mx-auto">
              <BarChart className="text-[#176FB9] mx-auto" />
              <h1 className="font-semibold">Financial Reporting</h1>
            </div>
          </div>

          <div className="border border-[#176FB9] rounded-lg p-5 flex flex-col gap-5">
            <div className="justfy0-center mx-auto">
              <LineChart className="text-[#176FB9] mx-auto" />
              <h1 className="font-semibold">Financial Analysis and Insights</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookkeepingOverview;
