
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Layout, Database, Globe, Search, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
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
    title: "Database Management",
    description: "Efficient database design, optimization, and management to ensure data integrity and performance.",
    icon: Database,
  },
  {
    title: "Cloud Solutions",
    description: "Secure and scalable cloud infrastructure implementation and migration services.",
    icon: Globe,
  },
  {
    title: "SEO & Digital Marketing",
    description: "Strategic digital marketing and SEO services to improve online visibility and generate leads.",
    icon: Search,
  },
  {
    title: "Business Analytics",
    description: "Data-driven insights and analytics solutions to help make informed business decisions.",
    icon: LineChart,
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
          <span className="text-Xygenix-600 font-medium">What We Do</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Our Premium Services</h2>
          <p className="text-gray-600">
            We offer a wide range of IT services to help businesses transform, innovate, and succeed in today's digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card border border-gray-200 bg-white hover:shadow-lg hover:border-Xygenix-300">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-Xygenix-50 text-Xygenix-600 flex items-center justify-center mb-4">
                  <service.icon size={24} />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">
                  {service.description}
                </CardDescription>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="border-Xygenix-500 text-Xygenix-600 hover:bg-Xygenix-50 mt-2"
                  onClick={scrollToContact}
                >
                  Request Service
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            className="bg-gradient-to-r from-Xygenix-500 to-Xygenix-700 hover:from-Xygenix-600 hover:to-Xygenix-800 text-white"
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
