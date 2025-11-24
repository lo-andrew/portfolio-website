import AboutMe from "./components/AboutMe";
import EmailSection from "./components/EmailSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./components/ProjectSection";
import Particles from "./components/Particles";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div style={{ width: "100%", height: "1200px", position: "fixed" }}>
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={12}
          speed={0.03}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
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
