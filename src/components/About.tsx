
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const features = [
  "10+ years of industry experience",
  "Team of certified professionals",
  "Innovative and cutting-edge solutions",
  "Client-centered approach",
  "Timely delivery and support",
  "Cost-effective services",
];

const About = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -z-10 -inset-1 rounded-lg bg-gradient-to-r from-blue-400 to-blue-600 opacity-30 blur-xl"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1473968512647-3e447244af8f"
                    alt="Drone Technology"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1518709268805-4e9042af2176"
                    alt="AI Technology"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                    alt="Government Solutions"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43"
                    alt="Agriculture Technology"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6">
            <span className="text-blue-600 font-medium">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              We Build Digital Solutions That Help Businesses Thrive
            </h2>
            
            <p className="text-gray-600">
              Founded in 2012, Xygenix Tech Solutions is a leading provider of innovative technology 
              services and solutions. We help businesses of all sizes transform their operations, 
              enhance efficiency, and achieve sustainable growth through cutting-edge technology.
            </p>
            
            <p className="text-gray-600">
              Our team of experienced professionals is committed to delivering high-quality solutions 
              tailored to meet the unique needs of each client. We combine technical expertise with 
              industry knowledge to provide solutions that drive real business value.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="rounded-full bg-blue-100 text-blue-600 p-1">
                    <Check size={16} />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 mt-4"
              onClick={() => scrollToSection('team')}
            >
              Meet Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
