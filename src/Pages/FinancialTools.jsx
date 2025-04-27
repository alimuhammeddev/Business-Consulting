import React from "react";
import Header from "../Header";
import { budgetplanning, finance, financialtools } from "../assets";
import Footer from "../Footer";
import { Link } from "react-router-dom";

const FinancialTools = () => {
  return (
    <section className="relative w-full">
      <div className="absolute top-0 left-0 w-full z-[999]">
        <Header />
      </div>

      <div className="relative w-full">
        <div className="relative w-full">
          <img
            src={financialtools}
            alt="Header Background"
            className="w-full lg:h-auto h-96 max-h-[500px] object-cover z-0"
          />

          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-1 pointer-events-none" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center text-center z-20 p-4">
          <h1 className="text-2xl md:text-6xl font-bold text-white mt-28">
            Financial Tools and Calculators
            <p className="text-base md:text-2xl text-white font-normal lg:mt-5">
              AVS Consulting will work with you to develop financial models in
              areas such as investments, <br className="lg:block hidden" />{" "}
              budgeting, retirement and tax planning. Modeling is a great way to
              personalize your goals.
            </p>
          </h1>
        </div>
      </div>

      <div className="flex  items-center justify-center mx-auto flex-col-reverse lg:flex-row gap-10 max-w-7xl lg:mt-24 mt-5 lg:p-0 p-5">
        <div>
          <img src={finance} alt="" width={750} className="rounded-3xl" />
        </div>
        <div>
          <h2 className="lg:text-4xl text-2xl font-medium mt-2">
            Investment Return Calculator:
          </h2>
          <p className="lg:text-lg mt-4 text-gray-600 max-w-prose">
            Evaluate the potential returns on your investments over time. Input
            variables such as initial investment amount, expected annual return
            rate, and investment duration. Visualize how your investments may
            grow, then adjust your investment strategy accordingly.
          </p>
        </div>
      </div>

      <div className="justify-center text-center lg:mt-24 mt-10">
        <Link
          to="/contact-us"
          className="bg-[#176fb9] text-white px-10 py-3 rounded-full shadow-md transition-colors font-medium"
        >
          Contact Us
        </Link>
      </div>

      <div className="flex items-center justify-center mx-auto flex-col lg:flex-row gap-10 max-w-7xl lg:mt-24 mt-5 lg:p-0 p-5">
        <div>
          <h2 className="lg:text-4xl text-2xl font-medium mt-2">
            Budget Planner
          </h2>
          <p className="lg:text-lg mt-4 text-gray-600 max-w-prose">
            Take control by creating a personalized budget that aligns with your
            financial goals. Input your income, expenses, savings goals, and
            debt payments. This will help you visualize your cash flow, identify
            areas for improvement, and make informed decisions that optimize
            your business finances.
          </p>
        </div>

        <div>
          <img
            src={budgetplanning}
            alt=""
            width={750}
            className="rounded-3xl"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto lg:mt-24 mt-5 p-5">
        <h1 className="lg:text-4xl text-2xl font-medium mt-2 text-center">
          Financial Calculators
        </h1>
        <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 gap-5 mx-auto mt-5">
          <div>
            <h1 className="lg:text-3xl text-xl font-medium">
              Payrolls and Benefits
            </h1>
            <div className="space-y-4 mt-2">
              <p>
                <a href="https://www.calcxml.com/do/convert-hourly-to-salary" className="lg:text-lg text-[#176fb9]">Convert Hourly Wage To Annual Salary Calculator</a>
              </p>
              <p>
                <a href="https://www.calcxml.com/do/pay05" className="lg:text-lg text-[#176fb9]">
                  What Is The Future Value Of My Employee Stock Options
                  Calculator
                </a>
              </p>
              <p>
                <a href="https://www.calcxml.com/do/pay06" className="lg:text-lg text-[#176fb9]">
                  Should I Exercise My 'In-The-Money' Stock Options Calculator
                </a>
              </p>
              <p>
                <a href="https://www.calcxml.com/do/pay07" className="lg:text-lg text-[#176fb9]">401k Calculator</a>
              </p>
              <p>
                <a href="https://www.calcxml.com/do/pay08" className="lg:text-lg text-[#176fb9]">
                  What Is The Impact Of Increasing My 401(k) Contribution
                  Calculator
                </a>
              </p>
              <p>
                <a href="https://www.calcxml.com/do/what-may-my-457-plan-be-worth" className="lg:text-lg text-[#176fb9]">457 Plan Calculator</a>
              </p>
              <p>
                <a href="https://www.calcxml.com/do/pay10" className="lg:text-lg text-[#176fb9]">
                  What Is The Impact Of Increasing My 457 Plan Contribution
                  Calculator
                </a>
              </p>
            </div>
          </div>
          <div>
            <h1 className="lg:text-3xl text-xl font-medium">Retirement</h1>
            <div className="space-y-4 mt-2">
              <p>
                <a href="https://www.calcxml.com/do/ret01" className="lg:text-lg text-[#176fb9]">
                  How Will Retirement Impact My Living Expenses Calculator
                </a>
              </p>
              <p>
                <a href="https://www.calcxml.com/do/retirement-calculator" className="lg:text-lg text-[#176fb9]">Retirement Savings Calculator</a>
              </p>
              <p>
                <a href="https://www.calcxml.com/do/are-my-current-retirement-savings-sufficient" className="lg:text-lg text-[#176fb9]">Retirement Planning Calculator</a>
              </p>
              <p>
                <a href="https://www.calcxml.com/do/social-security-retirement-income-estimator" className="lg:text-lg text-[#176fb9]">
                  Social Security Retirement Income Estimation Calculator
                </a>
              </p>
              <p>
                <a href="https://www.calcxml.com/do/ret05" className="lg:text-lg text-[#176fb9]">Impact Of Inflation On My Retirement</a>
              </p>
              <p>
                <a href="https://www.calcxml.com/do/i-am-retired-how-long-will-my-savings-last" className="lg:text-lg text-[#176fb9]">
                  I'm Retired, How Long Will My Savings Last Calculator
                </a>
              </p>
              <p>
                <a href="https://www.calcxml.com/do/ret07" className="lg:text-lg text-[#176fb9]">
                  When Should I Begin Saving For Retirement Calculator
                </a>
              </p>
              <p>
                <a href="https://www.calcxml.com/do/ret08" className="lg:text-lg text-[#176fb9]">Spending vs Saving For Retirement Calculator</a>
              </p>
              <p>
                <a href="https://www.calcxml.com/do/ret10" className="lg:text-lg text-[#176fb9]">
                  Compare A Roth 401(k) To A Traditional 401(k) Calculator
                </a>
              </p>
              <p>
                <a href="https://www.calcxml.com/do/ret09" className="lg:text-lg text-[#176fb9]">
                  How Much Retirement Income May My 401(k) Provide Calculator
                </a>
              </p>
            </div>
          </div>
          <div>
            <h1 className="lg:text-3xl text-xl font-medium">Tax</h1>

            <div className="space-y-4 mt-2">
              <p>
                <a href="https://www.calcxml.com/do/what-is-my-potential-estate-tax-liability" className="lg:text-lg text-[#176fb9]">Estate Tax Calculator</a>
              </p>
              <p>
                <a href="https://www.calcxml.com/do/federal-income-tax-calculator" className="lg:text-lg text-[#176fb9]">Federal Income Tax Calculator</a>
              </p>
              <p>
                <a href="https://www.calcxml.com/do/payroll-tax-withholding-calculator" className="lg:text-lg text-[#176fb9]">Payroll Withholdings Calculator</a>
              </p>
              <p>
                <a href="https://www.calcxml.com/do/inc04" className="lg:text-lg text-[#176fb9]">
                  Will My Investment Interest Be Deductible Calculator
                </a>
              </p>
              <p>
                <a href="https://www.calcxml.com/do/self-employment-tax-calculator" className="lg:text-lg text-[#176fb9]">Find Out What Your Self Employment Tax Will Be!</a>
              </p>
              <p>
                <a href="https://www.calcxml.com/do/inc06" className="lg:text-lg text-[#176fb9]">Long-term Capital Gains Tax Calculator</a>
              </p>
              <p>
                <a href="https://www.calcxml.com/do/inc07" className="lg:text-lg text-[#176fb9]">Investment Growth Calculator</a>
              </p>
              <p>
                <a href="https://www.calcxml.com/do/how-much-of-my-social-security-benefit-may-be-taxed" className="lg:text-lg text-[#176fb9]">
                  How Much Of My Social Security Benefit May Be Taxed Calculator
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="justify-center text-center lg:mt-10 mt-7 lg:mb-20 mb-10">
        <Link
          to="/contact-us"
          className="bg-[#176fb9] text-white px-10 py-3 rounded-full shadow-md transition-colors font-medium"
        >
          Contact Us
        </Link>
      </div>

      <div>
        <Footer />
      </div>
    </section>
  );
};

export default FinancialTools;
