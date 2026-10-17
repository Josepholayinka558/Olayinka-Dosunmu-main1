
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Leadership from "@/components/Leadership";
import Vision from "@/components/Vision";
import Contact from "@/components/Contact";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const targets = document.querySelectorAll(".scroll-reveal");
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative bg-[#050505] text-white selection:bg-gold/30 selection:text-gold-light">
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] glowing-arc opacity-20 animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] glowing-arc opacity-10 animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute bottom-[-10%] right-[10%] w-[700px] h-[700px] glowing-arc opacity-15 animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] glowing-arc opacity-5 animate-pulse" style={{ animationDuration: '15s' }}></div>
        
      </div>

      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        
        <section id="about" className="scroll-reveal">
          <About />
        </section>
        
        <section id="education" className="scroll-reveal">
          <Education />
        </section>
        
        <section id="leadership" className="scroll-reveal">
          <Leadership />
        </section>
        
        <section id="vision" className="scroll-reveal">
          <Vision />
        </section>
        
        <section id="contact" className="scroll-reveal">
          <Contact />
        </section>
      </main>
      
      <footer className="relative z-10 py-12 text-center border-t border-white/5 bg-black/50 backdrop-blur-sm">
        <p className="text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Dr. Dupe Nihinlola Olayinka-Dosunmu. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
