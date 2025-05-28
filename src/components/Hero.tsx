
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown, Zap, Globe, Rocket } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
  };

  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    // Trigger animations after component mounts
    setAnimate(true);
    
    // Start typing animation
    const textElement = document.getElementById("typing-text");
    if (textElement) {
      const phrases = [
        "Blockchain Solutions",
        "Software Development", 
        "Digital Transformation",
        "Tech Consulting",
        "Web3 Innovation",
        "Smart Contracts"
      ];
      
      let phraseIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let typingSpeed = 100;
      
      const type = () => {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
          textElement.textContent = currentPhrase.substring(0, charIndex - 1);
          charIndex--;
          typingSpeed = 50;
        } else {
          textElement.textContent = currentPhrase.substring(0, charIndex + 1);
          charIndex++;
          typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentPhrase.length) {
          isDeleting = true;
          typingSpeed = 1500;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
        
        setTimeout(type, typingSpeed);
      };
      
      setTimeout(type, 1000);
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Dynamic background elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 -right-48 h-96 w-96 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-600/30 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-gradient-to-r from-cyan-400/25 to-blue-500/25 blur-2xl animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute top-1/2 left-1/3 h-64 w-64 rounded-full bg-gradient-to-r from-indigo-400/20 to-blue-600/20 blur-xl animate-pulse" style={{animationDuration: '12s'}}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute h-2 w-2 bg-blue-400/40 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 z-10 py-12 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className={`lg:w-3/5 space-y-8 transition-all duration-1000 ${animate ? 'opacity-100' : 'opacity-0 translate-x-[-50px]'}`}>
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 px-4 py-2 rounded-full">
                <Zap className="h-4 w-4 text-blue-400" />
                <span className="text-blue-300 text-sm font-medium">Next-Gen Tech Solutions</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
              Building the
              <span className="block text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text animate-pulse">
                Digital Future
              </span>
              <span className="text-4xl md:text-5xl lg:text-6xl text-gray-300">Together</span>
            </h1>
            
            <div className="text-xl text-gray-300 h-8 overflow-hidden">
              <span className="font-medium">Pioneering </span>
              <span id="typing-text" className="text-blue-400 font-semibold"></span>
              <span className="animate-pulse text-blue-400">|</span>
            </div>
            
            <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
              We transform ambitious ideas into powerful digital realities. From cutting-edge blockchain solutions to revolutionary software development, we're your partners in innovation.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:via-blue-700 hover:to-blue-800 text-white transform transition-all hover:scale-105 shadow-2xl border border-blue-400/30 px-8 py-3"
                onClick={() => scrollToSection('services')}
              >
                <Rocket className="mr-2 h-5 w-5" />
                Explore Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-400/50 text-blue-300 hover:bg-blue-500/10 hover:border-blue-400 backdrop-blur-sm transform transition-all hover:scale-105 px-8 py-3"
                onClick={() => scrollToSection('contact')}
              >
                <Globe className="mr-2 h-4 w-4" />
                Start Your Journey
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`h-12 w-12 rounded-full border-2 border-blue-400/30 bg-gradient-to-br from-blue-${i*100} to-blue-${(i+1)*100} flex items-center justify-center text-white text-sm font-bold transition-transform hover:scale-110 hover:z-10`}>
                    {i === 1 ? 'X' : i === 2 ? 'Y' : i === 3 ? 'G' : 'N'}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-blue-300 font-semibold text-lg">500+ Projects Delivered</p>
                <p className="text-sm text-gray-400">Trusted by startups to enterprises</p>
              </div>
            </div>
            
            <div className="pt-12 animate-bounce text-center lg:text-left">
              <button 
                onClick={() => scrollToSection('web3')} 
                className="text-blue-400 flex flex-col items-center focus:outline-none group"
              >
                <span className="text-sm mb-2 group-hover:text-blue-300 transition-colors">Discover Innovation</span>
                <ArrowDown className="h-6 w-6 group-hover:translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className={`lg:w-2/5 transition-all duration-1000 ${animate ? 'opacity-100' : 'opacity-0 translate-x-[50px]'}`}>
            <div className="relative">
              {/* Floating tech icons */}
              <div className="absolute -inset-8 z-10">
                <div className="absolute top-4 right-4 h-16 w-16 bg-gradient-to-br from-blue-400/20 to-blue-600/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-blue-400/30 animate-pulse">
                  <Globe className="h-8 w-8 text-blue-400" />
                </div>
                <div className="absolute bottom-8 left-4 h-14 w-14 bg-gradient-to-br from-cyan-400/20 to-cyan-600/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-cyan-400/30 animate-pulse" style={{animationDelay: '1s'}}>
                  <Zap className="h-6 w-6 text-cyan-400" />
                </div>
                <div className="absolute top-1/2 -left-6 h-12 w-12 bg-gradient-to-br from-purple-400/20 to-purple-600/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-purple-400/30 animate-pulse" style={{animationDelay: '2s'}}>
                  <Rocket className="h-5 w-5 text-purple-400" />
                </div>
              </div>
              
              {/* Main content card */}
              <div className="relative rounded-2xl bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-xl border border-blue-400/20 overflow-hidden transform transition-all hover:scale-105 duration-500 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
                <div className="relative p-8">
                  <div className="aspect-video rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                    <div className="relative w-full h-full bg-gradient-to-br from-blue-900/50 to-purple-900/50 flex items-center justify-center">
                      {/* Tech visualization */}
                      <div className="grid grid-cols-3 gap-4 p-6">
                        {[...Array(9)].map((_, i) => (
                          <div
                            key={i}
                            className="h-8 w-8 bg-gradient-to-br from-blue-400/40 to-cyan-400/40 rounded-lg animate-pulse border border-blue-400/30"
                            style={{
                              animationDelay: `${i * 0.2}s`,
                              animationDuration: '2s'
                            }}
                          ></div>
                        ))}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                        <div>
                          <h3 className="text-white font-bold text-xl mb-2">Next-Gen Technology</h3>
                          <p className="text-blue-200 text-sm">Powering tomorrow's digital landscape</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
