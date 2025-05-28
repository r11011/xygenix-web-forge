import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Layout, Database, Globe, Search, LineChart, Plane, Shield, Users, Cpu, Bot, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "AI Robots & Drone Crop Survey",
    description: "Advanced AI-powered drone technology for precision agriculture and crop monitoring for Government of India projects.",
    icon: Plane,
    isActive: true,
  },
  {
    title: "Women Safety CSR Program",
    description: "Collaborative CSR initiative with UP Police focused on enhancing women safety through technology solutions.",
    icon: Shield,
    isActive: true,
  },
  {
    title: "Custom Software Development",
    description: "Tailored software solutions designed to meet your unique business needs and challenges.",
    icon: Code,
  },
  {
    title: "Web Application Development",
    description: "Responsive web applications with modern UI/UX to enhance user experience and engagement.",
    icon: Layout,
  },
  {
    title: "AI & Machine Learning",
    description: "Advanced AI solutions including robotics, automation, and intelligent data processing systems.",
    icon: Bot,
  },
  {
    title: "Government Solutions",
    description: "Specialized technology solutions for government agencies and public sector initiatives.",
    icon: Users,
  },
];

const Services = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-medium">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Our Premium Services</h2>
          <p className="text-gray-600">
            We offer cutting-edge technology services specializing in AI, drones, and social impact solutions for government and private sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className={`service-card border border-gray-200 bg-white hover:shadow-lg hover:border-blue-300 transition-all duration-300 ${service.isActive ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}>
              <CardHeader>
                <div className="relative">
                  <div className="h-12 w-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <service.icon size={24} />
                  </div>
                  {service.isActive && (
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      Active
                    </div>
                  )}
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  {service.description}
                </CardDescription>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-blue-500 text-blue-600 hover:bg-blue-50 mt-2 w-full"
                  onClick={scrollToContact}
                >
                  {service.isActive ? 'Learn More' : 'Request Service'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-8 py-3"
            onClick={scrollToContact}
          >
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
