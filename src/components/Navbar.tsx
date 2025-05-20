import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Globe, Wallet, PartyPopper } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ["home", "web3", "services", "celebration", "about", "team", "contact"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "web3", label: "Web3" },
    { id: "services", label: "Services" },
    { id: "celebration", label: "Anniversary" },
    { id: "about", label: "About" },
    { id: "team", label: "Team" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md py-3" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="#home" className="flex items-center" onClick={(e) => {
          e.preventDefault();
          scrollToSection("home");
        }}>
          <img 
            src="/lovable-uploads/69f37c35-9450-48fc-a6e6-0efddf7839fb.png" 
            alt="Xygenix Logo" 
            className="h-12 md:h-14"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`}
                className={cn(
                  "text-gray-700 hover:text-Xygenix-600 font-medium transition-colors relative group py-2",
                  activeSection === item.id && "text-Xygenix-600"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.id === "celebration" && (
                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-Xygenix-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-Xygenix-600"></span>
                  </span>
                )}
                {item.label}
                <span className={cn(
                  "absolute bottom-0 left-0 h-0.5 bg-Xygenix-500 transition-all duration-300",
                  activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                )}></span>
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center text-gray-700 hover:text-Xygenix-600">
            <Globe size={18} className="mr-1" />
            <span className="text-sm">Tech Solutions</span>
          </div>
          <Button 
            className="bg-gradient-to-r from-oxygenix-500 to-Xygenix-700 hover:from-Xygenix-600 hover:to-Xygenix-800 text-white shadow-md"
            onClick={() => scrollToSection("contact")}
          >
            <Wallet size={16} className="mr-2" />
            Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg p-5 md:hidden animate-fade-in">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    className={cn(
                      "text-gray-700 hover:text-Xygenix-600 block py-2 flex items-center",
                      activeSection === item.id && "text-Xygenix-600"
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    {item.id === "celebration" && (
                      <PartyPopper size={16} className="mr-2 text-Xygenix-600" />
                    )}
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <Button 
                  className="w-full bg-gradient-to-r from-oxygenix-500 to-Xygenix-700 hover:from-oxygenix-600 hover:to-oxygenix-800 text-white shadow-md"
                  onClick={() => scrollToSection("contact")}
                >
                  <Wallet size={16} className="mr-2" />
                  Consultation
                </Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
