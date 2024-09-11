import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.css";
import HeroSection from "./sections/home/herosection/HeroSection";
import { Header } from "./sections/header/Header";
import Features from "./sections/home/features/Features";
import HowitWorks from "./sections/home/howitworks/howitworks";
import Pricing from "./sections/home/pricing/Pricing";
import DeveloperFriendly from "./sections/home/developerFriendly/DeveloperFriendly";
import Footer from "./sections/footer/Footer";
import SendEmailDocumentation from "./screens/Documentation";
import FAQPage from "./screens/FAQ";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <HowitWorks />
      <Pricing />
      <DeveloperFriendly />
      <Footer />
    </>
  );
};

export function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/doc" element={<SendEmailDocumentation />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
