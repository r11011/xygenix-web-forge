
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Globe, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
        <a href="/" className="flex items-center">
          <span className="text-2xl font-bold text-oxygenix-700">
            Xygen<span className="text-Xygenix-500">ix</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          {["Home", "Web3", "Services", "Team", "Contact"].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-Xygenix-600 font-medium transition-colors relative group py-2"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-Xygenix-500 transition-all duration-300 group-hover:w-full"></span>
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
          <Button className="bg-gradient-to-r from-oxygenix-500 to-Xygenix-700 hover:from-Xygenix-600 hover:to-Xygenix-800 text-white shadow-md">
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
              {["Home", "Web3", "Services", "Team", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-Xygenix-600 block py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <Button className="w-full bg-gradient-to-r from-oxygenix-500 to-Xygenix-700 hover:from-oxygenix-600 hover:to-oxygenix-800 text-white shadow-md">
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
