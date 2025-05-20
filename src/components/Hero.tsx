
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
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
        "Tech Consulting"
      ];
      
      let phraseIndex = 0;
      let charIndex = 0;
      let isDeleting = false;
      let typingSpeed = 100;
      
      const type = () => {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
          // Deleting text
          textElement.textContent = currentPhrase.substring(0, charIndex - 1);
          charIndex--;
          typingSpeed = 50;
        } else {
          // Typing text
          textElement.textContent = currentPhrase.substring(0, charIndex + 1);
          charIndex++;
          typingSpeed = 100;
        }
        
        // Handle phrase transition
        if (!isDeleting && charIndex === currentPhrase.length) {
          // Pause at end of phrase
          isDeleting = true;
          typingSpeed = 1500;
        } else if (isDeleting && charIndex === 0) {
          // Move to next phrase
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
        
        setTimeout(type, typingSpeed);
      };
      
      // Start typing animation
      setTimeout(type, 1000);
    }
  }, []);

  return (
    <section id="home" className="relative hero-gradient min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Dynamic background elements */}
        <div className="absolute -right-1/4 -top-96 h-[800px] w-[800px] rounded-full bg-gradient-to-r from-blue-400/40 to-blue-600/40 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-12 -left-12 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-blue-300/30 to-blue-500/30 blur-2xl animate-pulse" style={{animationDuration: '8s'}}></div>
        <div className="absolute top-1/3 left-1/4 h-[200px] w-[200px] rounded-full bg-gradient-to-r from-blue-200/20 to-blue-400/20 blur-xl animate-pulse" style={{animationDuration: '12s'}}></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className={`md:w-1/2 space-y-6 transition-all duration-1000 ${animate ? 'opacity-100' : 'opacity-0 translate-x-[-50px]'}`}>
            {/* Logo */}
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/051f402a-2cb1-4415-b534-37f892494ba9.png" 
                alt="Xygenix Logo" 
                className="h-16 mr-4"
              />
              <span className="text-xl font-bold">Tech Solutions Pvt Ltd</span>
            </div>
            
            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium animate-pulse">
              Innovative Tech Solutions
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transforming Ideas into <span className="text-blue-600 relative">
                <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-400"></span>
                Digital Reality
              </span>
            </h1>
            
            <div className="text-lg text-gray-600 h-8 overflow-hidden">
              <span className="font-medium">Specializing in </span>
              <span id="typing-text" className="text-blue-700 font-semibold"></span>
              <span className="animate-pulse">|</span>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white transform transition-all hover:scale-105 shadow-lg"
                onClick={() => scrollToSection('services')}
              >
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-blue-600 text-blue-600 hover:bg-blue-50 transform transition-all hover:scale-105"
                onClick={() => scrollToSection('contact')}
              >
                Get in Touch
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className={`h-10 w-10 rounded-full border-2 border-white bg-blue-${i*100} flex items-center justify-center text-white text-xs font-bold transition-transform hover:scale-110`}>
                    {i === 1 ? 'X' : i === 2 ? 'Y' : 'G'}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-blue-700 font-semibold">Trusted by 300+</p>
                <p className="text-sm text-gray-500">Satisfied clients worldwide</p>
              </div>
            </div>
            
            <div className="pt-12 animate-bounce text-center md:text-left">
              <button 
                onClick={() => scrollToSection('web3')} 
                className="text-blue-600 flex flex-col items-center focus:outline-none"
              >
                <span className="text-sm mb-1">Explore More</span>
                <ArrowDown className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          <div className={`md:w-1/2 transition-all duration-1000 ${animate ? 'opacity-100' : 'opacity-0 translate-x-[50px]'}`}>
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 opacity-75 blur animate-pulse"></div>
              <div className="relative rounded-lg bg-white shadow-xl overflow-hidden transform transition-all hover:scale-105 duration-500">
                <div className="h-full w-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-6">
                  <div className="relative w-full aspect-video rounded-md overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                      alt="Tech Innovation" 
                      className="object-cover h-full w-full transition-transform duration-10000 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                      <div>
                        <h3 className="text-white font-bold text-xl mb-2">Web3 Technologies</h3>
                        <p className="text-white/80 text-sm">Building the future with blockchain innovation</p>
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
