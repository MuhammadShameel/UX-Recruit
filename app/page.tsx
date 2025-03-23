import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Numbers from "./components/Numbers";
import Process from "./components/Process";
import Projects from "./components/Projects";
import ServicesSection from "./components/ServicesSection";
import Table from "./components/Table";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Projects />
      <ServicesSection />
      <Process />
      <Table />
      <Numbers />
      <Footer />
    </div>
  );
}
