import React, { useEffect, useState } from "react";
import Header from "../Header";
import { bookkeepingoverview } from "../assets";
import {
  BarChart,
  CreditCard,
  FileText,
  LineChart,
  Settings,
} from "lucide-react";
import Footer from "../Footer";

const BookkeepingOverview = () => {
  const [size, setSize] = useState(55);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSize(40); // smaller size on small screens
      } else {
        setSize(55); // bigger size on large screens
      }
    };

    handleResize(); // set initial size

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
              <FileText
                className="text-white mx-auto bg-[#176FB9] rounded-full p-2"
                size={size}
              />
              <h1 className="font-semibold lg:text-2xl text-center">
                Comprehensive Financial Record Keeping
              </h1>
              <p className="text-gray-600 lg:text-lg">
                We diligently track every financial transaction, from sales to
                expenses, to give you real-time insights.
              </p>
              <p className="text-gray-600 lg:text-lg mt-3">
                Our goal is to keep your financial records organized and easily
                accessible, following industry-standard accounting principles.
              </p>
            </div>
          </div>

          <div className="border border-[#176FB9] rounded-lg p-5 flex flex-col gap-5">
            <div className="justfy0-center mx-auto">
              <CreditCard
                className="text-white mx-auto bg-[#176FB9] rounded-full p-2"
                size={size}
              />
              <h1 className="font-semibold lg:text-2xl text-center">
                Bank and Credit Card Reconciliation
              </h1>
              <p className="text-gray-600 lg:text-lg">
                We regularly reconcile your bank statements and credit card
                transactions, making sure everything adds up correctly.
              </p>
              <p className="text-gray-600 lg:text-lg mt-3">
                We regularly reconcile your bank statements and credit card
                transactions, making sure everything adds up correctly.
              </p>
            </div>
          </div>

          <div className="border border-[#176FB9] rounded-lg p-5 flex flex-col gap-5">
            <div className="justfy0-center mx-auto">
              <Settings
                className="text-white mx-auto bg-[#176FB9] rounded-full p-2"
                size={size}
              />
              <h1 className="font-semibold lg:text-2xl text-center">
                Chart of Accounts Setup and Maintenance
              </h1>
              <p className="text-gray-600 lg:text-lg">
                We customize your budget to fit your unique needs and keep it
                updated as your sphere of influencer grows and evolves.
              </p>
              <p className="text-gray-600 lg:text-lg mt-3">
                Our friendly team is always available to answer any questions
                you may have about your books, ensuring you feel confident and
                informed.
              </p>
            </div>
          </div>

          <div className="border border-[#176FB9] rounded-lg p-5 flex flex-col gap-5">
            <div className="justfy0-center mx-auto">
              <BarChart
                className="text-white mx-auto bg-[#176FB9] rounded-full p-2"
                size={size}
              />
              <h1 className="font-semibold lg:text-2xl text-center">
                Financial Reporting
              </h1>
              <p className="text-gray-600 lg:text-lg">
                Our detailed financial statements, including balance sheets and
                income statements, provide valuable insights into your financial
                health.
              </p>
              <p className="text-gray-600 lg:text-lg mt-3">
                We don’t just crunch numbers; we provide personalized financial
                reporting such as cash flow statements and partnership balance
                sheets, translating what they mean for tax planning, cash flow
                or debt reduction.
              </p>
            </div>
          </div>

          <div className="border border-[#176FB9] rounded-lg p-5 flex flex-col gap-5">
            <div className="justfy0-center mx-auto">
              <LineChart
                className="text-white mx-auto bg-[#176FB9] rounded-full p-2"
                size={size}
              />
              <h1 className="font-semibold lg:text-2xl text-center">
                Financial Analysis and Insights
              </h1>
              <p className="text-gray-600 lg:text-lg">
                Setting up KPIs and analyzing trends for your business will
                identify areas of concern and opportunities for growth.
              </p>
              <p className="text-gray-600 lg:text-lg mt-3">
                If you need industry benchmarking or need to know if a
                transaction will pencil out, we will do the research or create
                models that align with your industry.
              </p>
            </div>
          </div>
        </div>

        <div className="justify-center text-center mt-10">
          <a
            href="#contact-us"
            className="bg-[#176FB9] text-white px-7 py-3 rounded-full shadow-md transition-colors font-medium"
          >
            Choose Your Bookkeeping Plan
          </a>
        </div>
      </div>

      <div className="mt-10">
        <Footer />
      </div>
    </section>
  );
};

export default BookkeepingOverview;
