import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import WorkExp from "@/components/WorkExp";
import Image from "next/image";
import Footer from "@/components/Footer";  

export default function Home() {
  return (
    <div className="bg-[#161513] grid grid-cols-1 gap-24 w-full ">
      <Navbar />
      <HeroSection />
      <Experience />
      <Projects />
      <WorkExp />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}
