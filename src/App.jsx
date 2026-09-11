import About from "./components/About.jsx";
import BottomNav from "./components/BottomNav.jsx";
import Education from "./components/Education.jsx";
import Experience from "./components/Experience.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import HowIBuild from "./components/HowIBuild.jsx";
import MoreContact from "./components/MoreContact.jsx";
import ScrollProgress from "./components/ScrollProgress.jsx";
import SelectedWork from "./components/SelectedWork.jsx";
import Skills from "./components/Skills.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";

function App() {
  return (
    <main className="page-shell">
      <ThemeToggle />
      <BottomNav />
      <ScrollProgress />

      <Hero />
      <About />
      <Experience />
      <Skills />
      <SelectedWork />
      <HowIBuild />
      <Education />
      <MoreContact />
      <Footer />
    </main>
  );
}

export default App;