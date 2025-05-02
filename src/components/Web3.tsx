
import { Wallet, Globe, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const Web3 = () => {
  const web3Services = [
    {
      icon: <Wallet size={32} className="text-Xygenix-600" />,
      title: "Blockchain Solutions",
      description: "Custom blockchain development for secure, transparent, and efficient business operations."
    },
    {
      icon: <Globe size={32} className="text-Xygenix-600" />,
      title: "Smart Contracts",
      description: "Automated, secure, and transparent smart contracts for your business needs and operations."
    },
    {
      icon: <Navigation size={32} className="text-Xygenix-600" />,
      title: "Decentralized Apps",
      description: "Build robust dApps that leverage blockchain technology for enhanced security and performance."
    }
  ];

  return (
    <section id="web3" className="py-24 bg-gradient-to-b from-oxygenix-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-oxygenix-600 font-medium">Web3 Technologies</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Cutting-Edge Web3 Solutions</h2>
          <p className="text-gray-600">
            We help businesses leverage the power of Web3 technologies to create secure, transparent, and efficient solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {web3Services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 service-card"
            >
              <div className="rounded-full bg-Xygenix-100 h-16 w-16 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Button variant="outline" className="border-Xygenix-500 text-Xygenix-600 hover:bg-Xygenix-50">
                Learn More
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-oxygenix-100 to-Xygenix-200 p-8 rounded-2xl inline-block shadow-lg max-w-3xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business with Web3?</h3>
            <p className="text-gray-700 mb-6">
              Our expert team will guide you through implementing Web3 technologies tailored to your specific business needs.
            </p>
            <Button className="bg-gradient-to-r from-Xygenix-500 to-oxygenix-700 hover:from-Xygenix-600 hover:to-Xygenix-800 text-white">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Web3;
