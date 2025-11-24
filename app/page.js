import AboutMe from "./components/AboutMe";
import EmailSection from "./components/EmailSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/ProjectSection";
import DarkVeil from './components/DarkVeil';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-transparent relative z-10">
      <div className="fixed inset-0 -z-10">
        <DarkVeil />
      </div>
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <br />
        <br />
        <AboutMe />
        <br />
        <br />
        <Projects />
        <br />
        <br />
        <EmailSection />
      </div>
    </main>
  );
}
