
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Web3 from "@/components/Web3";
import About from "@/components/About";
import Milestone from "@/components/Milestone";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Web3 />
      <Services />
      <Milestone />
      <About />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
