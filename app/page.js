import AboutMe from "./components/AboutMe";
import EmailSection from "./components/EmailSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
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
