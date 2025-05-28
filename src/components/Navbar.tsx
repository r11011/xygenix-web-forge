
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
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3" 
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
                  "text-gray-700 hover:text-blue-600 font-medium transition-colors relative group py-2",
                  activeSection === item.id && "text-blue-600",
                  !isScrolled && "text-white hover:text-blue-300",
                  !isScrolled && activeSection === item.id && "text-blue-300"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
              >
                {item.id === "celebration" && (
                  <span className="absolute -top-1 -right-1 flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                  </span>
                )}
                {item.label}
                <span className={cn(
                  "absolute bottom-0 left-0 h-0.5 bg-blue-500 transition-all duration-300",
                  activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"
                )}></span>
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex items-center space-x-4">
          <div className={cn(
            "flex items-center transition-colors",
            isScrolled ? "text-gray-700 hover:text-blue-600" : "text-white/80 hover:text-blue-300"
          )}>
            <Globe size={18} className="mr-1" />
            <span className="text-sm">Tech Solutions</span>
          </div>
          <Button 
            className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white shadow-lg px-6 py-2"
            onClick={() => scrollToSection("contact")}
          >
            <Wallet size={16} className="mr-2" />
            Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={cn(
            "md:hidden transition-colors",
            isScrolled ? "text-gray-700" : "text-white"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg p-5 md:hidden animate-fade-in border-t border-gray-200">
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    className={cn(
                      "text-gray-700 hover:text-blue-600 block py-2 flex items-center transition-colors",
                      activeSection === item.id && "text-blue-600"
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    {item.id === "celebration" && (
                      <PartyPopper size={16} className="mr-2 text-blue-600" />
                    )}
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-gray-200">
                <Button 
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white shadow-lg"
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
