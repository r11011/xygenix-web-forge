
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
          ? "bg-white/95 backdrop-blur-md shadow-md py-1" 
          : "bg-transparent py-2"
      )}
    >
      <div className="container flex items-center justify-between px-4">
        <a href="#home" className="flex items-center" onClick={(e) => {
          e.preventDefault();
          scrollToSection("home");
        }}>
          <img 
            src="/lovable-uploads/69f37c35-9450-48fc-a6e6-0efddf7839fb.png" 
            alt="Xygenix Logo" 
            className="h-8 md:h-10"
          />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <a 
                href={`#${item.id}`}
                className={cn(
                  "text-gray-700 hover:text-blue-600 font-medium transition-colors relative group py-1 px-2 text-sm",
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
                  <span className="absolute -top-0.5 -right-0.5 flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600"></span>
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
        <div className="hidden md:flex items-center space-x-3">
          <Button 
            size="sm"
            className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white shadow-lg px-4 py-1 text-sm"
            onClick={() => scrollToSection("contact")}
          >
            <Wallet size={14} className="mr-1" />
            Contact
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
          <Menu size={20} />
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg p-4 md:hidden animate-fade-in border-t border-gray-200">
            <ul className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a 
                    href={`#${item.id}`}
                    className={cn(
                      "text-gray-700 hover:text-blue-600 block py-1 flex items-center transition-colors text-sm",
                      activeSection === item.id && "text-blue-600"
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                  >
                    {item.id === "celebration" && (
                      <PartyPopper size={14} className="mr-2 text-blue-600" />
                    )}
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-gray-200">
                <Button 
                  size="sm"
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white shadow-lg text-sm"
                  onClick={() => scrollToSection("contact")}
                >
                  <Wallet size={14} className="mr-1" />
                  Contact
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
