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
import SkipLink from "./components/SkipLink.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";

function App() {
  return (
    <div className="page-shell">
      <SkipLink />

      <ThemeToggle />
      <BottomNav />
      <ScrollProgress />

      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <SelectedWork />
        <HowIBuild />
        <Education />
        <MoreContact />
      </main>

      <Footer />
    </div>
  );
}

export default App;