import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import ExperienceSection from "./sections/ExperienceSection";
// import TechStack from "./sections/TechStack";
import Footer from "./sections/Footer";

export default function App() {
  return <>
    <Navbar/>
    <Hero />
    <Showcase />
    <LogoShowcase />
    <FeatureCards />
    <ExperienceSection />
    {/* <TechStack/> */}
    <Footer/>
  </>
}