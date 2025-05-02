
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Github, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Oxygen<span className="text-oxygenix-400">ix</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Innovative technology solutions for businesses of all sizes. We help you transform, 
              innovate, and succeed in the digital era.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-oxygenix-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-oxygenix-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-oxygenix-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-oxygenix-600 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="h-9 w-9 rounded-full bg-gray-800 flex items-center justify-center hover:bg-oxygenix-600 transition-colors">
                <Github size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Team", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-oxygenix-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Custom Software Development",
                "Web Application Development",
                "Database Management",
                "Cloud Solutions",
                "SEO & Digital Marketing",
                "Business Analytics",
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#services"
                    className="text-gray-400 hover:text-oxygenix-400 transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Your Email" 
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button size="icon" className="bg-oxygenix-600 hover:bg-oxygenix-700">
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 sm:mb-0">
              © {new Date().getFullYear()} Oxygenix Tech Solutions Pvt Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Cookies Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
