import { Routes, Route } from "react-router-dom";
import RealEstate from "./Pages/RealEstate";
import Home from "./Pages/Home";
import Entertainment from "./Pages/Entertainment";
import Influencers from "./Pages/Influencers";
import BookkeepingOverview from "./Pages/BookkeepingOverview";
import BookkeepingPlans from "./Pages/BookkeepingPlans";
import IndividualTax from "./Pages/IndividualTax";
import BusinessTax from "./Pages/BusinessTax";
import BusinessManagement from "./Pages/BusinessManagement";
import FinancialTools from "./Pages/FinancialTools";
import Contact from "./Pages/Contact";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/real-estate" element={<RealEstate />} />
        <Route path="/entertainment" element={<Entertainment />} />
        <Route path="/influencers" element={<Influencers />} />
        <Route path="/bookkeeping-overview" element={<BookkeepingOverview />} />
        <Route path="/bookkeeping-plans" element={<BookkeepingPlans />} />
        <Route path="/individual-tax" element={<IndividualTax />} />
        <Route path="/business-tax" element={<BusinessTax />} />
        <Route path="/business-management" element={<BusinessManagement />} />
        <Route path="/financial-tools" element={<FinancialTools />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
