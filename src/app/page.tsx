import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Portfolio } from "@/components/Portfolio";
import { Videos } from "@/components/Videos";
import { Reels } from "@/components/Reels";
import { Certifications } from "@/components/Certifications";
import { References } from "@/components/References";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Portfolio />
      <Videos />
      <Reels />
      <Certifications />
      <References />
      <Contact />
      <Footer />
      <ChatWidget />
    </main>
  );
}
