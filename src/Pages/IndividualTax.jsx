import React from "react";
import Header from "../Header";
import { business1, individualtax } from "../assets";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const IndividualTax = () => {
  return (
    <section className="relative w-full">
      <div className="absolute top-0 left-0 w-full z-[999]">
        <Header />
      </div>

      <div className="relative w-full">
        <div className="relative w-full">
          <img
            src={individualtax}
            alt="Header Background"
            className="w-full lg:h-auto h-96 max-h-[500px] object-cover z-0"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-1 pointer-events-none" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center z-20 p-4">
          <h1 className="text-2xl md:text-6xl font-bold text-white mt-28">
            Individual Tax Services
          </h1>
        </div>
      </div>

      <div className="flex items-center justify-center mx-auto flex-col lg:flex-row gap-10 max-w-7xl lg:mt-24 mt-5 lg:p-0 p-5">
        <div>
          <h1 className="lg:text-4xl text-2xl font-medium">
            Individual Tax Services
          </h1>
          <p className="lg:text-lg mt-4 text-gray-600 max-w-prose">
            Whether you're a social media influencer or a real estate developer
            in California, having the right tax support is essential. At AVS
            Consulting, we specialize in helping founders, entertainers, and
            entrepreneurs navigate the complexities of local, state, and federal
            tax laws. Our team is here to help you maximize deductions and
            credits — from home office expenses to investment benefits — while
            guiding you through California sales tax filing for merchandise
            sales and multi-state tax preparation. Managing your personal and
            business taxes doesn't have to be overwhelming. Partner with Abbott
            Business Consulting Group and set a foundation for long-term
            financial growth.
          </p>
        </div>
        <div>
          <img src={business1} alt="" width={700} className="rounded-3xl" />
        </div>
      </div>

      <div className="bg-[#176fb9] p-5 lg:mt-16 mt-10">
        <div className="flex items-center justify-center mx-auto flex-col lg:flex-row gap-10 max-w-7xl mt-5 lg:p-0 mb-10">
          <div className="bg-white p-5 rounded-lg">
            <h1 className="lg:text-4xl text-xl text-center font-medium">
              Tax Preparation
            </h1>
            <p className="lg:text-lg mt-2 text-gray-600 text-center">
              Our comprehensive tax preparation services ensure that your
              individual tax return is accurate, timely, and optimized for
              maximum savings. We’ll gather all necessary financial information,
              including income statements, investment earnings, and deductible
              expenses, and meticulously prepare your return to comply with all
              IRS regulations.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg">
            <h1 className="lg:text-4xl text-xl text-center font-medium">
              Tax Planning
            </h1>
            <p className="lg:text-lg mt-2 text-gray-600 text-center">
              Planning ahead is key to minimizing your tax liabilities and
              maximizing your savings. Our tax planning services are designed to
              analyze your financial situation, identify opportunities for tax
              savings, and implement strategies to optimize your tax position.
              Whether it’s retirement planning, investment decisions, or estate
              planning, we’ll work with you year-round to develop a customized
              tax strategy that aligns with your goals and priorities.
            </p>
          </div>
        </div>
      </div>

      <div className="justify-center text-center mt-16 mb-16">
        <Link to="/business-tax"

          className="bg-[#176fb9] text-white px-7 py-3 rounded-full shadow-md transition-colors font-medium"
        >
          See Business Tax Services
        </Link>
      </div>

      <div>
        <Footer />
      </div>
    </section>
  );
};

export default IndividualTax;
