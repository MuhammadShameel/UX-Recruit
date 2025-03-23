import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Numbers from "./components/Numbers";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Projects />
      <Numbers />
      {/* <Footer /> */}
    </div>
  );
}
