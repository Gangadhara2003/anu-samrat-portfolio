import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Brands } from "@/components/Brands";
import { Portfolio } from "@/components/Portfolio";
import { Videos } from "@/components/Videos";
import { Reels } from "@/components/Reels";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Brands />
      <Portfolio />
      <Videos />
      <Reels />
      <Contact />
      <Footer />
      <ChatWidget />
    </main>
  );
}
