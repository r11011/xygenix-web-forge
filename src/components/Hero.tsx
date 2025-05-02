
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative hero-gradient min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -right-1/4 -top-96 h-[800px] w-[800px] rounded-full bg-gradient-to-r from-oxygenix-200/40 to-oxygenix-300/40 blur-3xl"></div>
        <div className="absolute -bottom-12 -left-12 h-[300px] w-[300px] rounded-full bg-gradient-to-r from-oxygenix-200/30 to-oxygenix-400/30 blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <span className="inline-block bg-oxygenix-100 text-oxygenix-700 px-3 py-1 rounded-full text-sm font-medium">
              Innovative Tech Solutions
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transforming Ideas into <span className="text-oxygenix-600">Digital Reality</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl">
              Xygenix Tech Solutions provides cutting-edge technology services 
              to help businesses innovate, transform, and thrive in the digital era.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="bg-oxygenix-600 hover:bg-oxygenix-700 text-white">
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              
              <Button size="lg" variant="outline" className="border-oxygenix-600 text-oxygenix-600 hover:bg-oxygenix-50">
                Get in Touch
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-gray-200" />
                ))}
              </div>
              <div>
                <p className="text-oxygenix-700 font-semibold">Trusted by 300+</p>
                <p className="text-sm text-gray-500">Satisfied clients worldwide</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-oxygenix-400 to-oxygenix-600 opacity-75 blur"></div>
              <div className="relative aspect-video rounded-lg bg-white shadow-xl overflow-hidden">
                <div className="h-full w-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Tech Innovation" 
                    className="object-cover h-full w-full"
                  />
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
