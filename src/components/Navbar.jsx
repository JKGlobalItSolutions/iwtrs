import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Award } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import expBadge from "@/assets/experience-badge.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCareerOpen, setIsCareerOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // பக்கங்களுக்கு நேவிகேட் செய்ய

  // உங்கள் பக்கங்களின் சரியான ரவுட்டிங் பாதைகள் (Paths)
  const links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Technologies", path: "/technologies" },
    { label: "Process Flow", path: "/process" },
    { label: "Cost Analysis", path: "/cost" },
    { label: "Industries", path: "/industries" },
    { label: "Contact", path: "/contact" },
  ];

  // தனித்தனி பக்கங்களுக்கு தடையின்றி அழைத்துச் செல்லும் பங்க்ஷன்
  const handleNavigation = (path) => {
    setIsOpen(false); // மொபைல் மெனுவை மூட
    navigate(path);   // புதிய பக்கத்திற்கு அழைத்துச் செல்ல
    
    // பக்கம் மாறியவுடன் தானாகவே மேல் பகுதிக்கு (Top) ஸ்க்ரோல் செய்ய
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 50);
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50 transition-smooth">
        <div className="container mx-auto px-4 xl:px-6 h-24 flex items-center justify-between">
          
          {/* Logo Section */}
          <button 
            onClick={() => handleNavigation("/")} 
            className="flex items-center gap-3 group shrink-0 h-20 select-none bg-transparent border-none p-0 cursor-pointer text-left"
          >
            <img 
              src={logo} 
              alt="IWTRS Logo" 
              className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
            <span className="font-display font-black text-3xl tracking-tight bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent hidden sm:flex items-center h-full leading-none pb-1">
              IWTRS
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5 text-sm font-medium">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavigation(link.path)}
                className={cn(
                  "hover:text-primary transition-smooth py-1.5 relative px-1 whitespace-nowrap font-semibold bg-transparent border-none cursor-pointer",
                  location.pathname === link.path ? "text-primary font-bold" : "text-muted-foreground"
                )}
              >
                {link.label}
                {/* ஆக்டிவாக இருக்கும் பக்கத்திற்கு கீழே அடிக்கோடு (Indicator) */}
                {location.pathname === link.path && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </button>
            ))}

            {/* Career Dropdown - Desktop */}
            <div
              className="relative py-4 group cursor-pointer"
              onMouseEnter={() => setIsCareerOpen(true)}
              onMouseLeave={() => setIsCareerOpen(false)}
            >
              <span className={cn(
                "flex items-center gap-1 transition-smooth font-semibold",
                location.pathname === "/internship" ? "text-primary font-bold" : "text-muted-foreground hover:text-primary"
              )}>
                Career <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-smooth" />
              </span>

              {/* Dropdown Menu */}
              <div
                className={cn(
                  "absolute top-full right-0 w-48 mt-1 p-2 bg-card/95 backdrop-blur-xl border border-border/80 shadow-card rounded-xl transition-all duration-200 origin-top-right",
                  isCareerOpen ? "opacity-100 scale-100 translate-y-0 visible" : "opacity-0 scale-95 -translate-y-2 invisible"
                )}
              >
                <Link
                  to="/internship"
                  className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:text-primary hover:bg-gradient-soft transition-smooth"
                >
                  <Award className="w-4 h-4 text-accent" />
                  <span>Internship</span>
                </Link>
              </div>
            </div>
          </nav>

          {/* Right Actions: Experience Badge & Button (Desktop) */}
          <div className="hidden xl:flex items-center gap-6 shrink-0">
            <div className="flex items-center justify-center min-w-[120px] transition-smooth hover:scale-105">
              <img 
                src={expBadge} 
                alt="40 Years of Experience" 
                className="h-16 w-auto object-contain filter contrast-135 brightness-95 saturate-110" 
              />
            </div>
            <Button
              size="md"
              onClick={() => handleNavigation("/contact")}
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 h-10 text-sm font-semibold shadow-soft navbar-cta"
            >
              Get in touch
            </Button>
          </div>

          {/* Hamburger Menu Icon for Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden p-2 text-muted-foreground hover:text-foreground focus:outline-none bg-transparent border-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer (Hamburger Open View) */}
        <div
          className={cn(
            "fixed inset-x-0 top-24 bottom-0 z-40 bg-white border-t border-slate-200 xl:hidden transition-all duration-300 ease-in-out overflow-y-auto px-6 pt-8 pb-28 flex flex-col items-center min-h-[90vh]",
            isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"
          )}
        >
          {/* மொபைல் மெனு லோகோ */}
          <div className="flex flex-col items-center justify-center mb-6 mt-2 select-none">
            <img 
              src={logo} 
              alt="IWTRS Logo" 
              className="h-14 w-auto object-contain" 
            />
            <span className="text-xl font-black text-slate-900 mt-2 tracking-wider">IWTRS</span>
          </div>

          <hr className="w-full border-slate-100 mb-4" />

          {/* மொபைல் லிங்க்குகள் - இங்கு பட்டன்கள் நேரடியாக ரவுட்டிங் பாதைகளுக்கு அழைத்துச் செல்லும் */}
          <div className="flex flex-col w-full gap-2 text-center">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavigation(link.path)}
                className={cn(
                  "cursor-pointer font-semibold text-lg block w-full py-4 rounded-xl hover:bg-slate-50 transition-all text-center active:bg-slate-100 bg-transparent border-none appearance-none outline-none",
                  location.pathname === link.path ? "text-primary bg-slate-50/50" : "text-slate-800 hover:text-primary"
                )}
              >
                {link.label}
              </button>
            ))}

            {/* Mobile Career Section */}
            <div className="space-y-1 mt-4 text-center">
              <span className="text-slate-400 text-xs font-bold uppercase tracking-wider block mb-1">Career</span>
              <Link
                to="/internship"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-4 text-slate-800 hover:text-primary transition-smooth font-semibold rounded-lg hover:bg-slate-50"
              >
                <Award className="w-4 h-4 text-accent" />
                <span>Internship Program</span>
              </Link>
            </div>

            {/* Mobile Contact Button */}
            <Button
              onClick={() => handleNavigation("/contact")}
              className="bg-primary hover:bg-primary/90 text-white rounded-full py-7 mt-6 shadow-md text-base font-semibold w-full mb-4"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;