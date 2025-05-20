
import { PartyPopper, Sparkles, GalleryVertical, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Celebration = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  
  useEffect(() => {
    // Set initial confetti state
    setShowConfetti(true);
    
    // Hide confetti after 5 seconds
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  
  const scrollToMilestones = () => {
    document.getElementById('celebration')?.scrollIntoView({behavior: 'smooth'});
  };
  
  return (
    <section id="celebration" className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {showConfetti && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          {Array.from({ length: 50 }).map((_, i) => (
            <div 
              key={i}
              className="absolute animate-fade-in"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                backgroundColor: ['#FFD700', '#FF6347', '#4169E1', '#32CD32'][Math.floor(Math.random() * 4)],
                animation: `fade-in ${Math.random() * 2 + 1}s ease-out forwards, fall ${Math.random() * 3 + 2}s linear forwards`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      )}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <div className="relative">
            <div className="animate-pulse absolute -inset-4 rounded-full bg-yellow-300/30 blur-lg"></div>
            <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-4 rounded-full relative">
              <PartyPopper size={40} className="text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mt-8 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
            Celebrating Our First Anniversary!
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl">
            It's been an incredible journey of innovation, growth, and success. 
            We're proud to celebrate one year of transforming businesses through cutting-edge technology solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 w-full">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="mb-4 bg-blue-100 p-3 rounded-full inline-block">
                <Trophy className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">300+ Projects</h3>
              <p className="text-gray-600">Successfully delivered projects across diverse industries</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="mb-4 bg-blue-100 p-3 rounded-full inline-block">
                <GalleryVertical className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">50+ Web3 Solutions</h3>
              <p className="text-gray-600">Pioneering blockchain technology implementation</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="mb-4 bg-blue-100 p-3 rounded-full inline-block">
                <Sparkles className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">98% Client Satisfaction</h3>
              <p className="text-gray-600">Maintaining excellence in customer service</p>
            </div>
          </div>
          
          <Button 
            size="lg"
            onClick={scrollToMilestones}
            className="mt-12 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white shadow-lg transform transition-all hover:scale-105"
          >
            View Our Milestones
          </Button>
        </div>
      </div>
      
      {/* Anniversary badge */}
      <div className="absolute top-10 right-10 md:block hidden">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-yellow-400 animate-spin-slow blur opacity-70"></div>
          <div className="relative bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full h-24 w-24 flex items-center justify-center shadow-xl">
            <div className="text-center">
              <div className="text-white font-bold text-lg">1</div>
              <div className="text-white text-xs">YEAR</div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fall {
          0% { transform: translateY(-10px); }
          100% { transform: translateY(100vh); }
        }
        
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default Celebration;
